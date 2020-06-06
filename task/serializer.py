from rest_framework import serializers
from datetime import datetime

from task.models import Task, Comment
from user.models import UserProfile


class TimestampField(serializers.DateTimeField):
    """
    Convert a django datetime to/from timestamp.
    """
    def to_representation(self, value):
        """
        Convert the field to its internal representation (aka timestamp)
        :param value: the DateTime value
        :return: a UTC timestamp integer
        """
        result = super(TimestampField, self).to_representation(value)
        return result.timestamp()

    def to_internal_value(self, value):
        """
        deserialize a timestamp to a DateTime value
        :param value: the timestamp value
        :return: a django DateTime value
        """
        converted = datetime.fromtimestamp(float('%s' % value))
        return super(TimestampField, self).to_representation(converted)


class ReadOnlyTimestampField(serializers.ReadOnlyField):
    def to_representation(self, value):
        return int(value.timestamp() * 1000.)


class BaseSerializer(serializers.ModelSerializer):
    created_at = ReadOnlyTimestampField()
    updated_at = ReadOnlyTimestampField()


class TaskSerializer(BaseSerializer):
    due_date = ReadOnlyTimestampField()

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
