from django.db import models
from django.conf import settings

# Create your models here.

class Task(models.Model):
    text = models.CharField(max_length=500)
    complete = models.BooleanField(default=False)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)

    def __str__(self):
        return self.text