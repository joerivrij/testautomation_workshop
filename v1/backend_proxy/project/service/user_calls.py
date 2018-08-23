import requests
import json
from project.middleware.error_handler import InvalidUsage
from project.models.users import UserObject
from .resources import UserLogin


URL = ''


def verify_user_can_create_token(username, password, id):
    user = get_user_role(id)
    post_body = json.dumps({"userName": username, "passWord": password})
    headers = {'content-type': 'application/json'}
    r = requests.post(URL + "Validation", data=post_body, headers=headers)
    response = json.loads(r.text)
    if r.status_code is not 200:
        raise InvalidUsage(response['Error'], status_code=r.status_code)
    user_can_login = response['passWordIsValid']
    if not user_can_login:
        raise InvalidUsage('Password is not valid, no action will be taken', status_code=400)
    token = UserLogin.create_token(user)
    return token['access_token']


def get_user_role(id):
    r = requests.get(URL + "Users/" + str(id))
    user_info = json.loads(r.text)
    return user_info


def get_user_id(username):
    r = requests.get(URL + "Users")
    response = json.loads(r.text)
    user_object = None
    for user in response['allUsers']:
        if user['username'].lower() == username.lower():
            user_object = UserObject(user['username'], user['role'], user['id'], user['active'])
    return user_object


def get_all_users():
    r = requests.get(URL + "Users")
    return json.loads(r.text)


def create_a_new_user(user):
    headers = {'content-type': 'application/json'}
    r = requests.post(URL + "Users", data=json.dumps(user.__dict__), headers=headers)
    response = json.loads(r.text)
    if r.status_code is not 201:
        raise InvalidUsage(response['Error'], status_code=r.status_code)
    return response


def delete_a_user(id):
    raise InvalidUsage('Error', status_code=501)
    return


def update_a_user(id, active):
    raise InvalidUsage('Error', status_code=501)
    return
