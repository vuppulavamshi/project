from rest_framework import serializers
from transfereval.models import Transferevaluation


class transferEvaluationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transferevaluation
        fields = [
            'transfer_eval_id',
            'transfer_course_id',
            'major_req_id',
            'sem_year_taken',
            'expiration_date',
            'approved_status',
            'notes',
            'approver_id',
            'major',
            'school',
            'school_id',
            'course_number',
            'course_title',
            'unhm_eq',
            'approver',
            'major_id',
        ]
