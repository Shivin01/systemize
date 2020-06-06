from django.conf.urls import url, include
from task.views import *
from rest_framework.routers import DefaultRouter

task_router = DefaultRouter()
task_router.register(
    r'',
    TaskViewSet,
    basename='task'
)

comment_router = DefaultRouter()
comment_router.register(
    r'',
    CommentViewSet,
    basename='comment'
)

urlpatterns = [
    url(r'^', include(task_router.urls)),
    url(r'^comment/', include(comment_router.urls)),
]
