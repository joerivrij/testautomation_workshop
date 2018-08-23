from datetime import timedelta


class BaseConfig:
    """Base configuration"""
    DEBUG = False
    TESTING = False
    JWT_SECRET_KEY = 'qquest_secret'
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(minutes=60)

class Development(BaseConfig):
    """Development configuration"""
    DEBUG = True
    USERS_URL = 'http://0.0.0.0:4242/api/'
    MOVIE_URL = 'http://0.0.0.0:4243/api/'


class Testing(BaseConfig):
    """Testing configuration"""
    DEBUG = True
    TESTING = True


class Production(BaseConfig):
    """Production configuration"""
    DEBUG = False
    USERS_URL = 'http://users:4242/api/'
    MOVIE_URL = 'http://movies:4243/api/'

