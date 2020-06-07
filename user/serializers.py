from rest_framework import serializers
from . import models
from task.serializer import BaseSerializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ('email', 'username', 'id')


class UserProfileSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField(required=False, read_only=True)
    first_name = serializers.SerializerMethodField(required=False, read_only=True)
    last_name = serializers.SerializerMethodField(required=False, read_only=True)
    email = serializers.SerializerMethodField(required=False, read_only=True)
    profile_image = serializers.SerializerMethodField(required=False, read_only=True)

    class Meta:
        model = models.UserProfile
        fields = ('user',
                  'timezone',
                  'current_organization',
                  'guest_organizations',
                  'profile_image',
                  'username',
                  'first_name',
                  'last_name',
                  'email',
                  'id'
                  )

    def get_username(self, obj):
        return obj.user.username

    def get_first_name(self, obj):
        return obj.user.first_name

    def get_last_name(self, obj):
        return obj.user.last_name

    def get_email(self, obj):
        return obj.user.email

    def get_profile_image(self, obj):
        return obj.profile_image.url if obj.profile_image else ''

    def save(self):
        print(self.context)
        super().save()
        self.context['request'].user.assets.add(self.instance)


class OrganizationSerializer(BaseSerializer):
    class Meta:
        model = models.Organization
        fields = '__all__'
