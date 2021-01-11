from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.db.models.fields import CharField

# Create your models here.

class Study(models.Model):
    searchKey = ArrayField(models.CharField(max_length=300))
    q1 = models.PositiveSmallIntegerField()
    q2 = models.PositiveSmallIntegerField()
    q3 = models.PositiveSmallIntegerField()
    q4 = models.PositiveSmallIntegerField()
    q5 = models.PositiveSmallIntegerField()
