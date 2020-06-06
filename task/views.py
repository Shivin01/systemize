from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from rest_framework.authentication import (
    SessionAuthentication,
    BasicAuthentication
)
from task.serializer import (
    TaskSerializer,
    CommentSerializer
)
from task.models import Task, Comment


@csrf_exempt
class TaskViewSet(viewsets.ModelViewSet):
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
    permission_classes = []


class CommentViewSet(viewsets.ModelViewSet):
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()



