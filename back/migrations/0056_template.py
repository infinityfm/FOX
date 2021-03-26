# Generated by Django 3.1 on 2020-10-08 13:39

import back.models.template
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('back', '0055_auto_20201004_0948'),
    ]

    operations = [
        migrations.CreateModel(
            name='Template',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128)),
                ('hazardous_work', models.CharField(choices=[('None', 'None'), ('Work_At_Height', 'Work At Height'), ('Lifting_Work', 'Lifting Work'), ('Confined_Space', 'Confined Space'), ('Hot_Work', 'Hot Work'), ('Chemical_Handling', 'Chemical Handling'), ('Work_Alone', 'Work Alone'), ('Work_At_Sensitive_Area', 'Work At Sensitive Area'), ('Cold_Work', 'Cold Work')], default='None', max_length=25)),
                ('file', models.FileField(upload_to=back.models.template.project_docs_path)),
                ('deleted', models.BooleanField(default=False)),
                ('company', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='templates', to='back.company')),
            ],
        ),
    ]