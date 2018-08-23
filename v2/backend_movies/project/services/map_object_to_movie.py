from project.services.models.movie_model import MovieObject


class MovieMapper(object):


    def map_cursor_to_object(self, specified_document):
        title = specified_document['title']
        year = specified_document['year']
        imdb = specified_document['imdb']
        type = specified_document['type']
        movie_model = MovieObject(title, year, imdb, type)
        return movie_model