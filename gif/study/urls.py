from django.urls import path
from django.conf.urls import url

from . import views

urlpatterns = [
    path('', views.main_render, name='index'),
    path('api/', views.StudyListCreate.as_view()),
]
