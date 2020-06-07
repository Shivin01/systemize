from rest_framework.response import Response
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
from django.db.models import Q


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


class TaskGraphViewSet(viewsets.ModelViewSet):

    def get_pie_chart_data(self, request):
        """
        Get pie chart data.
        :return:
        """
        new_task = Task.objects.filter(Q(status=Task.NEW),
                                       Q(created_by=self.request.user) |
                                       Q(assigned_to=self.request.user))
        in_progress_task = Task.objects.filter(Q(status=Task.IN_PROGRESS),
                                               Q(created_by=self.request.user) |
                                               Q(assigned_to=self.request.user))
        completed_task = Task.objects.filter(Q(status=Task.COMPLETED),
                                             Q(created_by=self.request.user) |
                                             Q(assigned_to=self.request.user))

        data = [{
            'name': 'New Task',
            'y': len(new_task)
        },
            {
                'name': 'In Progress Task',
                'y': len(in_progress_task)

            },
            {
                'name': 'Completed Task',
                'y': len(completed_task)

            }]
        return Response(data)


# class TaskBarGraphViewSet(viewsets.ModelViewSet):

    def get_bar_data(self, request):
        """
        Get bar data
        :return:
        """
        new_task = Task.objects.filter(Q(status=Task.NEW),
                                       Q(created_by=self.request.user) |
                                       Q(assigned_to=self.request.user))
        in_progress_task = Task.objects.filter(Q(status=Task.IN_PROGRESS),
                                               Q(created_by=self.request.user) |
                                               Q(assigned_to=self.request.user))
        completed_task = Task.objects.filter(Q(status=Task.COMPLETED),
                                             Q(created_by=self.request.user) |
                                             Q(assigned_to=self.request.user))
        data = {
            'new': [len(new_task.filter(label=Task.PERSONAL)),
                    len(new_task.filter(label=Task.WORK)),
                    len(new_task.filter(label=Task.SHOPPING)),
                    len(new_task.filter(label=Task.OTHERS))],

            'in_progress': [len(in_progress_task.filter(label=Task.PERSONAL)),
                            len(in_progress_task.filter(label=Task.WORK)),
                            len(in_progress_task.filter(label=Task.SHOPPING)),
                            len(in_progress_task.filter(label=Task.OTHERS))],

            'completed': [len(completed_task.filter(label=Task.PERSONAL)),
                          len(completed_task.filter(label=Task.WORK)),
                          len(completed_task.filter(label=Task.SHOPPING)),
                          len(completed_task.filter(label=Task.OTHERS))]
        }

        return Response(data)
