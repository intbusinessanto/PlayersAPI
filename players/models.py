from django.db import models

class Player(models.Model):
    id = models.IntegerField(primary_key=True)
    first_name = models.CharField(max_length=100)
    height_feet = models.IntegerField(null=True, blank=True)
    height_inches = models.IntegerField(null=True, blank=True)
    last_name = models.CharField(max_length=100)
    position = models.CharField(max_length=10, null=True, blank=True)
    team = models.JSONField(null=True, blank=True)
    weight_pounds = models.IntegerField(null=True, blank=True)

    
    def __str__(self) -> str:
        return self.first_name,self.last_name