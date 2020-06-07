from rest_framework import generics, viewsets
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated

from task.views import CsrfExemptSessionAuthentication
from . import serializers
from .models import User, Organization


class UserListView(generics.ListAPIView):
    """
    User List view.
    """
    permission_classes = (IsAuthenticated,)
    queryset = User.objects.all()

    serializer_class = serializers.UserSerializer


class OrganizationViewSet(viewsets.ModelViewSet):
    """
    Organization view set
    """
    queryset = Organization.objects.all()
    serializer_class = serializers.OrganizationSerializer
    permission_classes = (IsAuthenticated,)
    authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)
