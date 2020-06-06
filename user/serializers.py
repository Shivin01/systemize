from rest_framework import serializers
from . import models
from task.serializer import BaseSerializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ('email', 'username', )


class OrganizationSerializer(BaseSerializer):
    class Meta:
        model = models.Organization
        fields = '__all__'
