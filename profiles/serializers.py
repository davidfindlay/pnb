from django.contrib.auth import get_user_model
from profiles.models import Profile
from rest_framework import serializers

UserModel = get_user_model()


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = (
            'bio',
        )


class UserSerializer(serializers.ModelSerializer):

    profile = ProfileSerializer()

    class Meta:
        model = UserModel
        fields = (
            'id',
            'last_login',
            'username',
            'first_name',
            'last_name',
            'email',
            'password',
            'profile',
        )

        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        profile_data = validated_data.pop('profile', None)
        user = UserModel.objects.create(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        Profile.objects.create(user=user, **profile_data)
        return user

    def update(self, instance, validated_data):
        # Password checked before modifying user accounts.
        if instance.check_password(validated_data['password']):
            # update users base information.
            instance.username = validated_data.get('username', instance.username)
            instance.first_name = validated_data.get('first_name', instance.first_name)
            instance.last_name = validated_data.get('last_name', instance.last_name)
            instance.email = validated_data.get('email', instance.email)
            instance.save()

            # update profile information
            profile_data = validated_data.pop('profile', None)
            profile = instance.profile
            profile.bio = profile_data['bio']
            profile.save()
        return instance
