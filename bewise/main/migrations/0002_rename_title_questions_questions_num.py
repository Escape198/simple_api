# Generated by Django 4.0.4 on 2022-05-03 19:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='questions',
            old_name='title',
            new_name='questions_num',
        ),
    ]
