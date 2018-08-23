from flask import Blueprint, jsonify, request
from project.services import mongo_movies
import json
movies_blueprint = Blueprint('movies', __name__,)


@movies_blueprint.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify({
        'status': 'success',
        'message': 'pong!'
    })


@movies_blueprint.route('/api/movies/<id>', methods=['GET'])
def get_movie_by_id(id):
    """
        Endpoint to get information about a specific movie
        ---
        tags:
          - Movies Methods
        parameters:
          - name: id
            type: string
            in: path
            required: true
            description: specific movie you want to query
            example: tt0064116
        responses:
          400:
            description: Incorrect data used
          200:
            description: Your movie query is correct
    """
    return_model = mongo_movies.get_movie_by_id(id)
    if return_model['status_code'] is 200:
        res = json.dumps(return_model['body'], indent=4)
        return res, 200
    else:
        res = json.dumps(return_model['body'].__dict__, indent=4)
        return res, return_model['status_code']


@movies_blueprint.route('/api/movies', methods=['GET'])
def movie_get_all_movies():
    """
        Endpoint to get information about movies
        ---
        tags:
          - Movies Methods
        responses:
          400:
            description: Incorrect data used
          200:
            description: Your movie query is correct
    """
    return_model = mongo_movies.get_list_of_movies()
    if return_model['status_code'] is 200:
        res = json.dumps(return_model['body'], indent=4)
        return res, 200
    else:
        res = json.dumps(return_model['body'], indent=4)
        return res, return_model['status_code']



@movies_blueprint.route('/api/movies', methods=['POST'])
def post_a_new_movie():
    """
        Endpoint to post a new movie
        ---
        tags:
          - Movies Methods
        parameters:
          - name: body
            in: body
            required: true
            schema:
              properties:
                title:
                  type: string
                  description: The title to insert
                year:
                  type: string
                  description: The year the movie is from
                imdb:
                  type: string
                  description: Some imdb code
                type:
                  type: string
                  description: The type
              example:
                title: Qquest goes wild
                year: 2018
                imdb: whatever
                type: movie
        responses:
          400:
            description: Incorrect data used
          200:
            description: Your movie query is correct
    """
    return '', 501
