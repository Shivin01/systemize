from rest_framework import serializers

from task.models import Task, Comment
from user.models import UserProfile


class ReadOnlyTimestampField(serializers.ReadOnlyField):
    def to_representation(self, value):
        return int(value.timestamp() * 1000.)


class BaseSerializer(serializers.ModelSerializer):
    created_at = ReadOnlyTimestampField()
    updated_at = ReadOnlyTimestampField()


class TaskSerializer(BaseSerializer):
    class Meta:
        model = Task
        fields = '__all__'
        extra_kwargs = {
            'created_by': {'read_only': True}
        }

    def create(self, validated_data):
        validated_data['created_by'] = UserProfile.objects.get(
            id=self.context['request'].user.id)
        return super(TaskSerializer, self).create(validated_data)


class CommentSerializer(BaseSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
        extra_kwargs = {
            'user': {'read_only': True}
        }

    def create(self, validated_data):
        validated_data['user'] = UserProfile.objects.get(
            id=self.context['request'].user.id)
        return super(CommentSerializer, self).create(validated_data)
