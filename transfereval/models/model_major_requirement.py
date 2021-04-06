from django.db import models
from .model_major import Major


class MajorRequirement(models.Model):
    """
    table name is MajorRequirement
    major_req_id is the Primarykey
    """
    major_req_id = models.AutoField(primary_key=True)
    description = models.CharField(max_length=200, default=None)
    major_id = models.ForeignKey(Major, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('major_id', 'description')

    def __str__(self):
        return str(self.description)

    def major(self):
        return str(self.major_id.major_name)