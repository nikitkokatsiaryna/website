# Generated by Django 2.2.7 on 2020-10-04 18:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0027_auto_20200923_0901'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='certificate',
            name='checkbox',
        ),
        migrations.RemoveField(
            model_name='certificate',
            name='date_end',
        ),
    ]