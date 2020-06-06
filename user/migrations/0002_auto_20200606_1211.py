# Generated by Django 3.0.6 on 2020-06-06 12:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofile',
            name='organization',
        ),
        migrations.AddField(
            model_name='userprofile',
            name='current_organization',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='current_users', to='user.Organization'),
        ),
        migrations.AddField(
            model_name='userprofile',
            name='guest_organizations',
            field=models.ManyToManyField(blank=True, null=True, related_name='guest_users', to='user.Organization'),
        ),
    ]
