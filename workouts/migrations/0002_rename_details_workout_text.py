# Generated by Django 3.2.9 on 2021-11-06 15:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('workouts', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='workout',
            old_name='details',
            new_name='text',
        ),
    ]
