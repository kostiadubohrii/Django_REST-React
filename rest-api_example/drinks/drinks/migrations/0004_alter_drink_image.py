# Generated by Django 4.0.6 on 2023-06-24 14:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('drinks', '0003_alter_drink_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='drink',
            name='image',
            field=models.ImageField(default='', upload_to='Images/'),
        ),
    ]
