# Generated by Django 3.1.7 on 2021-03-25 08:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rooms', '0006_auto_20210321_1814'),
    ]

    operations = [
        migrations.AlterField(
            model_name='room',
            name='guests',
            field=models.IntegerField(help_text='How many people will be staying?'),
        ),
    ]
