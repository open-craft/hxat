# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hx_lti_initializer', '0014_auto_20151021_2025'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='lticourseadmin',
            options={'verbose_name': 'Pending Admin'},
        ),
    ]
