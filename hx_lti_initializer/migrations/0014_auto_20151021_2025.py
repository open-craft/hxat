# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hx_lti_initializer', '0013_lticourseadmin'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='lticourseadmin',
            options={'verbose_name': 'Pending Admins'},
        ),
        migrations.AlterUniqueTogether(
            name='lticourseadmin',
            unique_together=set([('admin_unique_identifier', 'new_admin_course_id')]),
        ),
    ]
