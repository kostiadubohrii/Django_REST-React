# Generated by Django 4.0.6 on 2023-06-24 14:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('drinks', '0002_drink_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='drink',
            name='image',
            field=models.ImageField(upload_to='Images/'),
        ),
    ]