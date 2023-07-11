from django.db import models

class Drink(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    image = models.ImageField(upload_to='Images/', default='Images/None/No0img.jpg')

    def __str__(self):
        return self.name + ' ' + self.description

# class Spirit(models.Model):
#     name = models.CharField(max_lenth=200)
#     description = models.CharField(max_length=200)
#     price = models.FloatField(default=0)
#
#     def __str__(self):
#         return self.name + ' ' + self.description

# python manage.py makemigrations
# python manage.py migrate
# python manage.py runserver