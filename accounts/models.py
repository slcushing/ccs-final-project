from django.contrib.auth.models import AbstractUser
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from django.conf import settings

# Create your models here.

class User(AbstractUser):
    pass

class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    phone_number = PhoneNumberField(null=True)
    details = models.TextField(blank=True)
    personalTraining = models.BooleanField(default=False)
    pt_coach = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='pt_coach', blank=True, null=True)
    avatar = models.ImageField(upload_to='profiles/', null=True)


    def __str__(self):
        return self.user.username