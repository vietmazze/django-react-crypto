# Generated by Django 2.1.3 on 2018-11-16 04:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Coincap',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('symbol', models.CharField(max_length=200)),
                ('name', models.CharField(max_length=200)),
                ('marketcap', models.DecimalField(decimal_places=10, max_digits=100, null=True)),
                ('maxSupply', models.DecimalField(decimal_places=10, max_digits=100, null=True)),
                ('price', models.DecimalField(decimal_places=10, max_digits=100, null=True)),
                ('rank', models.IntegerField(null=True)),
                ('currentSupply', models.DecimalField(decimal_places=10, max_digits=100, null=True)),
                ('volume24hr', models.DecimalField(decimal_places=10, max_digits=100, null=True)),
                ('changepercent24hr', models.DecimalField(decimal_places=10, max_digits=100, null=True)),
                ('vwap24hr', models.DecimalField(decimal_places=10, max_digits=100, null=True)),
                ('update', models.DateField(auto_now=True)),
            ],
        ),
    ]
