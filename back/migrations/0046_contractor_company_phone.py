# Generated by Django 3.1 on 2020-09-22 12:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('back', '0045_auto_20200922_0811'),
    ]

    operations = [
        migrations.AddField(
            model_name='contractor',
            name='company_phone',
            field=models.CharField(max_length=64, null=True),
        ),
    ]
