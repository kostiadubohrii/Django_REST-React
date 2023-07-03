from django.contrib import admin
from django.urls import path
from users import views

urlpatterns = [
    path('users/', views.user_list),
    path('users/<string:name><int:id>', views.user_detail),
]