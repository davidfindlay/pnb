from django.db import models
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver

UserModel = get_user_model()


class Profile(models.Model):
    user = models.OneToOneField(UserModel, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    # avatar = will link to images

    # @receiver(post_save, sender=UserModel)
    # def create_user_profile(sender, instance, created, **kwargs):
    #     if created:
    #         Profile.objects.create(user=instance)
    #     instance.profile.save()
    #
    # @receiver(post_save, sender=UserModel)
    # def save_user_profile(sender, instance, **kwargs):
    #     instance.profile.save()

    def __str__(self):
        return '{0}'.format(self.user.first_name)
