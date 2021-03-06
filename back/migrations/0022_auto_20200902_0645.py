# Generated by Django 3.1 on 2020-09-02 03:45

import back.models.company
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('back', '0021_auto_20200831_0701'),
    ]

    operations = [
        migrations.AddField(
            model_name='company',
            name='personal_declaration_template',
            field=models.FileField(blank=True, null=True, upload_to=back.models.company.company_docs_path),
        ),
        migrations.AddField(
            model_name='company',
            name='safety_quiz_template',
            field=models.FileField(blank=True, null=True, upload_to=back.models.company.company_docs_path),
        ),
        migrations.AddField(
            model_name='company',
            name='safety_video_url',
            field=models.URLField(blank=True, default='https://www.youtube.com/embed/ORUJ6gWBhrY', null=True),
        ),
    ]
