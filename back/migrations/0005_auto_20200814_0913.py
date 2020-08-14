# Generated by Django 3.1 on 2020-08-14 09:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('back', '0004_auto_20200813_1153'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='company',
            options={'verbose_name': 'Company', 'verbose_name_plural': 'Companies'},
        ),
        migrations.AlterModelOptions(
            name='documentassign',
            options={'verbose_name_plural': 'Document Assignments'},
        ),
        migrations.AlterModelOptions(
            name='project',
            options={'verbose_name': 'Project'},
        ),
        migrations.AlterModelOptions(
            name='worker',
            options={'verbose_name': 'Worker'},
        ),
        migrations.RenameField(
            model_name='document',
            old_name='worker',
            new_name='Worker',
        ),
        migrations.RenameField(
            model_name='permit',
            old_name='project',
            new_name='Project',
        ),
        migrations.RenameField(
            model_name='permit',
            old_name='worker',
            new_name='Worker',
        ),
        migrations.RenameField(
            model_name='worker',
            old_name='workers',
            new_name='contractor',
        ),
        migrations.RemoveField(
            model_name='project',
            name='projects',
        ),
        migrations.RemoveField(
            model_name='template',
            name='templates',
        ),
        migrations.AddField(
            model_name='project',
            name='Company',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='back.company'),
        ),
        migrations.AddField(
            model_name='template',
            name='Project',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='back.project'),
        ),
        migrations.AlterField(
            model_name='foxuser',
            name='role',
            field=models.CharField(choices=[('CliMan', 'Client Manager'), ('CliAdm', 'Client Admin'), ('Contr', 'Contractor'), ('Dum', 'Dummy')], default='Dum', max_length=16),
        ),
        migrations.DeleteModel(
            name='Work',
        ),
    ]
