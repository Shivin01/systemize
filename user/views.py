from rest_framework import generics, viewsets
from rest_framework.authentication import BasicAuthentication

from task.views import CsrfExemptSessionAuthentication
from . import serializers
from .models import User, Organization


class UserListView(generics.ListAPIView):
    """
    User List view.
    """
    queryset = User.objects.all()

    serializer_class = serializers.UserSerializer


class OrganizationViewSet(viewsets.ModelViewSet):
    """
    Organization view set
    """
    queryset = Organization.objects.all()
    serializer_class = serializers.OrganizationSerializer
    permission_classes = []
    authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)
