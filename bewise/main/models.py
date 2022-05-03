from django.db import models

# Create your models here.


class Questions(models.Model):
    questions_num = models.CharField(max_length=150)
    description = models.CharField(max_length=400, blank=True)
    date = models.DateTimeField(auto_now_add=True)
    done = models.BooleanField(default=False, null=False)

    def __str__(self):
        return self.questions_num
