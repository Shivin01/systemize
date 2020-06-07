from rest_framework import generics, viewsets
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated

from task.views import CsrfExemptSessionAuthentication
from . import serializers
from .models import User, Organization, UserProfile


class UserListView(generics.ListAPIView):
    """
    User List view.
    """
    permission_classes = (IsAuthenticated,)
    queryset = User.objects.all()

    serializer_class = serializers.UserSerializer


class UserProfileView(viewsets.ModelViewSet):
    """
    User Profile viewsets.
    """
    serializer_class = serializers.UserProfileSerializer
    permission_classes = (IsAuthenticated, )

    def get_queryset(self):
        """
        Get the queryset.
        :return: user profile instance.
        """
        user = self.request.user
        user_profile, _ = UserProfile.objects.get_or_create(user=user)
        user_profile = UserProfile.objects.filter(user=user)
        return user_profile


class OrganizationViewSet(viewsets.ModelViewSet):
    """
    Organization view set
    """
    queryset = Organization.objects.all()
    serializer_class = serializers.OrganizationSerializer
    permission_classes = (IsAuthenticated,)
    authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)
