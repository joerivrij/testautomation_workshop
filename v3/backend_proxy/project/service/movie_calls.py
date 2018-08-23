import requests
import json
from project.middleware.error_handler import InvalidUsage


URL = ''

def get_all_movies():
    r = requests.get(URL + "movies")
    return json.loads(r.text)