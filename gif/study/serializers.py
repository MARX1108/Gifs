from rest_framework import serializers
from .models import Study


class StudySerializer(serializers.ModelSerializer):
    class Meta:
        model = Study
        fields = ('id', 'searchKey', 'q1', 'q2', 'q3', 'q4', 'q5')
