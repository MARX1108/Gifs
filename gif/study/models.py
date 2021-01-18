from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.db.models.fields import CharField, DateField, DateTimeField
from datetime import datetime
from django.utils import timezone


# Create your models here.


class Study(models.Model):
    searchKey = ArrayField(models.CharField(max_length=300), default=list)
    timeStamps = ArrayField(models.TimeField(), default=list)
    q1 = models.PositiveSmallIntegerField(default=10)
    q2 = models.PositiveSmallIntegerField(default=10)
    q3 = models.PositiveSmallIntegerField(default=10)
    q4 = models.PositiveSmallIntegerField(default=10)
    q5 = models.PositiveSmallIntegerField(default=10)
    created_at = models.DateTimeField(auto_now_add=True)
