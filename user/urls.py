from django.urls import include, path

from user import views

urlpatterns = [
    path('', views.UserListView.as_view()),
]
