from rest_framework import viewsets
from rest_framework.authentication import (
    SessionAuthentication,
    BasicAuthentication
)
from task.serializer import (
    ProjectSerializer,
    TaskSerializer,
    CommentSerializer
)
from task.models import Project, Task, Comment


class ProjectViewSet(viewsets.ModelViewSet):
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()


class TaskViewSet(viewsets.ModelViewSet):
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    serializer_class = TaskSerializer
    queryset = Task.objects.all()


class CommentViewSet(viewsets.ModelViewSet):
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()



