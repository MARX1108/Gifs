from django.urls import path
from django.conf.urls import url

from . import views

urlpatterns = [
    path('', views.main_render, name='index'),
    # url(r'^start', views.start, name='start'),
]