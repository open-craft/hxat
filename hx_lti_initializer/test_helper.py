"""
Originally found here:
https://github.com/tophatmonocle/ims_lti_py/blob/develop/tests/test_helper.py
"""
from ims_lti_py import ToolProvider
from ims_lti_py import ToolConsumer

TEST_CONSUMER_KEY = '123key'
TEST_SECRET_KEY = 'secret'

def create_params_tp():
    '''
    Creates a set of launch parameters for a ToolConsumer.
    '''
    return {
          "lti_message_type": "basic-lti-launch-request",
          "lti_version": "LTI-1p0",
          "resource_link_id": "c28ddcf1b2b13c52757aed1fe9b2eb0a4e2710a3",
          "lis_result_sourcedid": "261-154-728-17-784",
          "lis_outcome_service_url": "http://localhost/lis_grade_passback",
          "launch_presentation_return_url": "http://example.com/lti_return",
          "custom_param1": "custom1",
          "custom_param2": "custom2",
          "ext_lti_message_type": "extension-lti-launch",
          "roles": "Learner,Instructor,Observer"
    }


def create_test_tp():
    '''
    Returns a new ToolProvider.
    '''
    return ToolProvider('hi', 'oi', create_params_tp())  # pragma: no cover


def create_params_tc():
    '''
    Creates a set of launch parameters for a ToolConsumer.
    '''
    params = create_params_tp()
    params.update({
        # 'resource_link_id': '120988f929-274612',
        'user_id': '292832126',
        'roles': 'Instructor',
        'lis_person_sorucedid': "lduarte1991",
        'lis_person_name_full': 'Jane Q. Public',
        'lis_person_contact_email_primary': 'user@school.edu',
        'context_id': '456434513',
        'context_title': 'Design of Personal Environments',
        'context_label': 'SI182',
        'lti_version': 'LTI-1p0',
        'launch_url': "http://testserver/launch_lti/",
        'lti_message_type': 'basic-lti-launch-request',
        'tool_consumer_instance_guid': 'lmsng.school.edu',
        'tool_consumer_instance_description': 'University School (LMSng)',
    })
    return params


def create_test_tc(params=None):
    '''
    Returns a new ToolConsumer.
    '''

    params = create_params_tc() if params is None else params
    tc = ToolConsumer(TEST_CONSUMER_KEY, TEST_SECRET_KEY, params)
    tc.launch_url = 'http://testserver/launch_lti/'
    tc.timestamp = '1251600739'
    tc.nonce = 'c8350c0e47782d16d2fa48b2090c1d8f'
    tc.set_non_spec_param('lis_person_sourced_id', 'school.edu:user')
    tc.set_non_spec_param('basiclti_submit', 'Launch Endpoint with BasicLTI Data')  # noqa
    tc._params_update = lambda: {
            'oauth_nonce': "c8350c0e47782d16d2fa48b2090c1d8f",
            'oauth_timestamp': "1251600739",
            'oauth_scheme': 'body',
        }

    return tc
