from django import forms
from hx_lti_initializer.models import LTICourse, LTICourseAdmin
from hx_lti_assignment.models import Assignment


class CourseForm(forms.ModelForm):

    class Meta:
        model = LTICourse
        fields = (
            'course_name',
            'course_id',
            'course_admins',
            'course_external_css_default'
        )


class CourseAdminForm(forms.ModelForm):
    class Meta:
        model = LTICourseAdmin
        fields = (
            'admin_unique_identifier',
            'new_admin_course_id',
        )
