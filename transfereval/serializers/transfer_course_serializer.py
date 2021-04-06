from rest_framework import serializers
from transfereval.models import TransferCourse


class transferCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = TransferCourse
        fields = ['transfer_course_id', 'school_id', 'subject_number', 'title', 'school']
