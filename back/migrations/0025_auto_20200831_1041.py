# Generated by Django 3.1 on 2020-08-31 07:41

import back.models.worker
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('back', '0024_worker_safety_quiz_answer'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='worker',
            name='chemical_handling_permit',
        ),
        migrations.RemoveField(
            model_name='worker',
            name='cold_work_permit',
        ),
        migrations.RemoveField(
            model_name='worker',
            name='confined_space_permit',
        ),
        migrations.RemoveField(
            model_name='worker',
            name='hot_work_permit',
        ),
        migrations.RemoveField(
            model_name='worker',
            name='lifting_work_permit',
        ),
        migrations.RemoveField(
            model_name='worker',
            name='work_alone_permit',
        ),
        migrations.RemoveField(
            model_name='worker',
            name='work_at_height_permit',
        ),
        migrations.RemoveField(
            model_name='worker',
            name='work_at_sensitive_area_permit',
        ),
        migrations.AddField(
            model_name='worker',
            name='license_scan',
            field=models.FileField(blank=True, null=True, upload_to=back.models.worker.project_docs_path),
        ),
        migrations.AddField(
            model_name='worker',
            name='passport_scan',
            field=models.FileField(blank=True, null=True, upload_to=back.models.worker.project_docs_path),
        ),
        migrations.AddField(
            model_name='worker',
            name='personal_declaration',
            field=models.FileField(blank=True, null=True, upload_to=back.models.worker.project_docs_path),
        ),
        migrations.AddField(
            model_name='worker',
            name='safety_green_card_scan',
            field=models.FileField(blank=True, null=True, upload_to=back.models.worker.project_docs_path),
        ),
    ]
