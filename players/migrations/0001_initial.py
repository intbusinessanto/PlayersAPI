# Generated by Django 4.2.1 on 2023-05-19 02:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Player',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('first_name', models.CharField(max_length=100)),
                ('height_feet', models.IntegerField(null=True)),
                ('height_inches', models.IntegerField(null=True)),
                ('last_name', models.CharField(max_length=100)),
                ('position', models.CharField(max_length=10)),
                ('team', models.JSONField()),
                ('weight_pounds', models.IntegerField(null=True)),
            ],
        ),
    ]