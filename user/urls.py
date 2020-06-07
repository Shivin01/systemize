from django.urls import include, path
from django.conf.urls import url
from rest_framework.routers import DefaultRouter

from user.views import OrganizationViewSet, UserListView, UserProfileView

organization_router = DefaultRouter()
organization_router.register(
    r'',
    OrganizationViewSet,
    basename='organization'
)

user_profile_router = DefaultRouter()
user_profile_router.register(
        r'',
        UserProfileView,
        basename='user_profile'
)

urlpatterns = [
    path('', UserListView.as_view()),
    url(r'^user_profile/', include(user_profile_router.urls)),
    url(r'^organization/', include(organization_router.urls))

]
