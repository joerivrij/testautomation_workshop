import os
import project
from project.service import user_calls, movie_calls


app_settings = 'project.config.' + os.getenv('APP_SETTINGS')
config = eval(app_settings)
movie_url = config.MOVIE_URL
user_url = config.USERS_URL
print(movie_url, user_url)

user_calls.URL = user_url
movie_calls.URL = movie_url
