from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    name = models.CharField(blank=True, max_length=255)

    def __str__(self):
        return self.email


class Organization(models.Model):
    """
    Organization Model
    """
    name = models.CharField(max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class UserProfile(models.Model):
    """
    User model
    """
    user = models.OneToOneField(to=User, on_delete=models.CASCADE)
    timezone = models.CharField(max_length=30)
    current_organization = models.OneToOneField(Organization, on_delete=models.CASCADE, related_name='current_users',
                                                blank=True, null=True)
    guest_organizations = models.ManyToManyField(Organization, related_name='guest_users', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    profile_image = models.ImageField()

    def __str__(self):
        return self.user.username
