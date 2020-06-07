from rest_framework import generics, viewsets
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import ValidationError
from task.views import CsrfExemptSessionAuthentication
from rest_framework import status
from rest_framework.response import Response
from . import serializers
from .models import User, Organization, UserProfile
from .serializers import UserSerializer


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

    def update(self, request, *args, **kwargs):
        """
        Over writing create method.
        :param request:
        :return:
        """
        try:
            user_profile = UserProfile.objects.get(user=request.user)
            serializer = self.get_serializer(user_profile, data=request.data, partial=True)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            data = {
                'first_name': request.data.get('first_name', request.user.first_name),
                'last_name': request.data.get('last_name', request.user.last_name)
            }
            update_serializer = UserSerializer(
                    request.user, data=data, partial=True)
            update_serializer.is_valid(raise_exception=True)
            update_serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except ValidationError:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        except Exception:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class OrganizationViewSet(viewsets.ModelViewSet):
    """
    Organization view set
    """
    queryset = Organization.objects.all()
    serializer_class = serializers.OrganizationSerializer
    permission_classes = (IsAuthenticated,)
    authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)
