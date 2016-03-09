from django.test import TestCase
from hx_lti_assignment.models import Assignment, AssignmentTargets
from target_object_database.views import *
from hx_lti_initializer.models import LTICourse, LTIProfile
from django.contrib.auth.models import User


class AssignmentTests(TestCase):
    """
    """
    def setUp(self):
        """
        """

        user = User(username="Luis", email="dfslkjfijeflkj")
        user.save()

        lti_profile = LTIProfile.objects.get(user=user)

        course = LTICourse(
            course_name="Fake Course",
            course_id="BlueMonkeyFake"
        )
        course.save()
        course.course_admins.add(lti_profile)

        self.tod = TargetObject(
            target_title="TObj1",
            target_author="Test Author1",
            target_content="Fake Content1",
            target_citation="Fake Citation1",
            target_type="tx"
        )
        self.tod.save()
        self.tod2 = TargetObject(
            target_title="TObj2",
            target_author="Test Author",
            target_content="Fake Content2",
            target_citation="Fake Citation2",
            target_type="tx"
        )
        self.tod2.save()
        self.assignment = Assignment(
            assignment_name="Assignment One",
            annotation_database_url="http://fakedatabaseurl.com",
            annotation_database_apikey="apikey",
            annotation_database_secret_token="secret token",
            highlights_options="test1:red;test2:blue",
            pagination_limit="10",
            course=course,
        )
        self.assignment.save()

        self.aTarget = AssignmentTargets(
            assignment=self.assignment,
            target_object=self.tod,
            order=1,
            target_external_css="",
            target_instructions="Fake Instructions",
            target_external_options=""
        )

        self.aTarget.save()

        self.aTarget2 = AssignmentTargets(
            assignment=self.assignment,
            target_object=self.tod2,
            order=2,
            target_external_css="",
            target_instructions="Fake Instructions",
            target_external_options=""
        )
        self.aTarget2.save()

    def tearDown(self):
        """
        """
        del self.assignment

    def test_str_output(self):
        """
        Tests to make sure that when you try to print out the target
        """
        self.assertEqual(self.assignment.assignment_name, "Assignment One")
        self.assertEqual(self.assignment.__str__(), "Assignment One")
        self.assertEqual(self.assignment.__unicode__(), u"Assignment One")
        self.assertEqual(self.assignment.assignment_name, self.assignment.__str__())  # noqa

    def test_object_before_exists(self):
        result = self.assignment.object_before(self.tod2.id)
        self.assertEqual(self.aTarget, result)

    def test_object_before_does_not_exist(self):
        result = self.assignment.object_before(self.tod.id)
        self.assertEqual(result, None)

        result = self.assignment.object_before("fakeid")
        self.assertEqual(result, None)

        self.tod.delete()
        result = self.assignment.object_before(self.tod2.id)

    def test_object_after_exists(self):
        result = self.assignment.object_after(self.tod.id)
        self.assertEqual(self.aTarget2, result)

    def test_object_after_does_not_exist(self):
        result = self.assignment.object_after(self.tod2.id)
        self.assertEqual(result, None)

        result = self.assignment.object_after("fakeid")
        self.assertEqual(result, None)

        self.tod2.delete()
        result = self.assignment.object_after(self.tod.id)


class AssignmentTargetTests(TestCase):
    """
    """
    def setUp(self):
        """
        """

        user = User(username="Luis", email="dfslkjfijeflkj")
        user.save()

        lti_profile = LTIProfile.objects.get(user=user)

        course = LTICourse(
            course_name="Fake Course",
            course_id="BlueMonkeyFake"
        )
        course.save()
        course.course_admins.add(lti_profile)

        self.tod = TargetObject(
            target_title="TObj1",
            target_author="Test Author1",
            target_content="Fake Content1",
            target_citation="Fake Citation1",
            target_type="tx"
        )
        self.tod.save()
        self.tod2 = TargetObject(
            target_title="TObj2",
            target_author="Test Author",
            target_content="Fake Content2",
            target_citation="Fake Citation2",
            target_type="tx"
        )
        self.tod2.save()
        self.assignment = Assignment(
            assignment_name="Assignment One",
            annotation_database_url="http://fakedatabaseurl.com",
            annotation_database_apikey="apikey",
            annotation_database_secret_token="secret token",
            highlights_options="test1:red;test2:blue",
            pagination_limit="10",
            course=course,
        )
        self.assignment.save()

        self.aTarget = AssignmentTargets(
            assignment=self.assignment,
            target_object=self.tod,
            order=1,
            target_external_css="",
            target_instructions="Fake Instructions",
        )

        self.aTarget.save()

        self.aTarget2 = AssignmentTargets(
            assignment=self.assignment,
            target_object=self.tod2,
            order=2,
            target_external_css="",
            target_instructions="Fake Instructions",
            target_external_options="ThumbnailView,canvasIdForMirador,true,true,true,true"  # noqa
        )
        self.aTarget2.save()

    def tearDown(self):
        """
        """
        del self.assignment

    def test_target_options_list(self):
        result = self.aTarget.get_target_external_options_list()
        self.assertEqual(result, [])

        result = self.aTarget2.get_target_external_options_list()
        self.assertEqual(result, ['ThumbnailView', 'canvasIdForMirador', 'true', 'true', 'true', 'true'])

    def test_get_view_type_for_mirador(self):
        result = self.aTarget.get_view_type_for_mirador()
        self.assertEqual(result, "ImageView")

        result = self.aTarget2.get_view_type_for_mirador()
        self.assertEqual(result, "ThumbnailView")

    def test_get_canvas_id_for_mirador(self):
        result = self.aTarget.get_canvas_id_for_mirador()
        self.assertEqual(result, None)

        result = self.aTarget2.get_canvas_id_for_mirador()
        self.assertEqual(result, 'canvasIdForMirador')

    def test_get_dashboard_hidden(self):
        result = self.aTarget.get_dashboard_hidden()
        self.assertEqual(result, 'false')

        result = self.aTarget2.get_dashboard_hidden()
        self.assertEqual(result, 'true')

    def test_get_transcript_hidden(self):
        result = self.aTarget.get_transcript_hidden()
        self.assertEqual(result, 'false')

        result = self.aTarget2.get_transcript_hidden()
        self.assertEqual(result, 'true')

    def test_get_transcript_download(self):
        result = self.aTarget.get_transcript_download()
        self.assertEqual(result, 'false')

        result = self.aTarget2.get_transcript_download()
        self.assertEqual(result, 'true')

    def test_get_video_download(self):
        result = self.aTarget.get_video_download()
        self.assertEqual(result, 'false')

        result = self.aTarget2.get_video_download()
        self.assertEqual(result, 'true')