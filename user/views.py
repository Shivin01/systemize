from rest_framework import generics
from . import serializers
from .models import User


class UserListView(generics.ListAPIView):
    """
    User List view.
    """
    queryset = User.objects.all()

    serializer_class = serializers.UserSerializer
