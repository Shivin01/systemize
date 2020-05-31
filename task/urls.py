from django.conf.urls import url, include
from task.views import *
from rest_framework.routers import DefaultRouter


project_router = DefaultRouter()
project_router.register(
    r'',
    ProjectViewSet,
    basename='project'
)

task_router = DefaultRouter()
task_router.register(
    r'',
    ProjectViewSet,
    basename='project'
)

comment_router = DefaultRouter()
comment_router.register(
    r'',
    ProjectViewSet,
    basename='project'
)

urlpatterns = [
    url(r'^project/', include(project_router.urls)),
    url(r'^task/', include(task_router.urls)),
    url(r'^comment/', include(comment_router.urls)),
]
