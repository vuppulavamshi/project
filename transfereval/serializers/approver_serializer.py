from rest_framework import serializers
from transfereval.models import Approver


class approverSerializer(serializers.ModelSerializer):
    class Meta:
        model = Approver
        fields = '__all__'
