# Generated by Django 3.2.9 on 2021-11-16 17:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0006_auto_20211115_1038'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='coach_notes',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='member_notes',
            field=models.TextField(null=True),
        ),
        migrations.DeleteModel(
            name='Note',
        ),
    ]
