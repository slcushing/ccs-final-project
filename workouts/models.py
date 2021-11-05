from django.db import models

# Create your models here.

class Workout(models.Model):
    date = models.DateField()
    details = models.TextField()

    def __str__(self):
        return self.date
        
# could eventually add category here?