# Generated by Django 3.1 on 2020-10-22 08:24

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('back', '0065_auto_20201022_1436'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activity',
            name='timestamp',
            field=models.DateTimeField(default=django.utils.timezone.localtime),
        ),
    ]
