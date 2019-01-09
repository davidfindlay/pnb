from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth import get_user_model

from rest_framework import serializers

from profiles.models import Profile


UserModel = get_user_model()


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = (
            'bio',
        )


class UserSerializer(serializers.ModelSerializer):

    profile = ProfileSerializer(required=False, partial=True)

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

    def update(self, instance, validated_data):
        # Password checked before modifying user accounts.
        if 'password' in validated_data:
            if instance.check_password(validated_data['password']):
                # update users base information.
                instance.username = validated_data.get('username', instance.username)
                instance.first_name = validated_data.get('first_name', instance.first_name)
                instance.last_name = validated_data.get('last_name', instance.last_name)
                instance.email = validated_data.get('email', instance.email)
                instance.save()

                profile_data = validated_data.get('profile', None)
                if profile_data:
                    # update profile information if one exists
                    # Won't exist for SuperUser, since profile is created through serializer and not a post_save signal.
                    try:
                        profile = instance.profile
                        profile.bio = profile_data.get('bio', profile.bio)
                        profile.save()
                    except ObjectDoesNotExist:
                        pass
            else:
                raise serializers.ValidationError({
                    'password': 'password was incorrect.'
                })
        else:
            # return validation error
            raise serializers.ValidationError({
                'password': 'This field may not be blank.'
            })
        return instance


class UserRegistrationSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserModel
        fields = (
            'id', 'username', 'password', 'first_name', 'last_name', 'email',
        )

        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        # Create a linked profile for each user account as they are made.
        user = UserModel.objects.create(**validated_data)
        user.set_password(validated_data['password'])
        user.is_active = False
        user.save()
        Profile.objects.create(user=user)
        return user
