from django.urls import path
from django.conf.urls import url

from . import views

urlpatterns = [
    path('', views.main_render, name='index'),
    path('api/view', views.StudyListCreate.as_view()),
    path('api', views.request_handler),

]
