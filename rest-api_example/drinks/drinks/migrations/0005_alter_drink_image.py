# Generated by Django 4.0.6 on 2023-06-24 15:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('drinks', '0004_alter_drink_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='drink',
            name='image',
            field=models.ImageField(default='Images/error_image.jpg', upload_to='Images/'),
        ),
    ]
