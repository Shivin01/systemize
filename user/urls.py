from django.urls import include, path
from django.conf.urls import url
from rest_framework.routers import DefaultRouter

from user.views import OrganizationViewSet, UserListView

organization_router = DefaultRouter()
organization_router.register(
    r'',
    OrganizationViewSet,
    basename='organization'
)

urlpatterns = [
    path('', UserListView.as_view()),
    url(r'^organization/', include(organization_router.urls))
]
