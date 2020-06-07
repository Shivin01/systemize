from rest_framework import viewsets
from rest_framework.authentication import (
    SessionAuthentication
)
from rest_framework.permissions import IsAuthenticated

from task.serializer import (
    TaskSerializer,
    CommentSerializer
)
from task.models import Task, Comment


class CsrfExemptSessionAuthentication(SessionAuthentication):

    def enforce_csrf(self, request):
        return  # To not perform the csrf check previously happening


class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    permission_classes = (IsAuthenticated, )
    queryset = Task.objects.all()


class CommentViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, )
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()



