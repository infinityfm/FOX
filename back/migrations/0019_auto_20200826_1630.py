# Generated by Django 3.1 on 2020-08-26 13:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('back', '0018_auto_20200826_1630'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='workers',
            field=models.ManyToManyField(blank=True, related_name='projects', to='back.Worker'),
        ),
    ]
