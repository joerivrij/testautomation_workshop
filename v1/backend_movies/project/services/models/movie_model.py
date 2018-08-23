class MovieObject:
    # Common base class for all mongo objects

    def __init__(self, title, year, imdb, type):
        self.title = title
        self.year = year
        self.imdb = imdb
        self.type = type

class SuccessModel():
    def __init__(self, message, body):
        self.message = message
        self.body = body