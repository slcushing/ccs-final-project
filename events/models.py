from django.db import models
from django.conf import settings

# Create your models here.

class Event(models.Model):
    title = models.CharField(max_length=255)
    start = models.DateTimeField()
    end = models.DateTimeField()
    allDay = models.BooleanField(default=False)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    gymEvent = models.BooleanField(default=False)
    session = models.BooleanField(default=False)
    details = models.TextField(blank=True)

    def __str__(self):
        return self.title
