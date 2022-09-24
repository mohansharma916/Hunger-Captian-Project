# Generated by Django 4.1 on 2022-09-22 16:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('items', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='category',
            field=models.CharField(choices=[('hot', 'HOT'), ('cold', 'COLD'), ('bagel', 'BAGEL')], db_index=True, default='others', max_length=14, verbose_name='Category'),
        ),
    ]
