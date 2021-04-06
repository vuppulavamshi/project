from django.db import models
from .model_major import Major


class School(models.Model):

    school_id = models.AutoField(primary_key=True)
    school_name = models.CharField(max_length=100, unique=True)
    state_name = models.CharField(max_length=10, null=True)

    def __str__(self):
        return self.school_name
