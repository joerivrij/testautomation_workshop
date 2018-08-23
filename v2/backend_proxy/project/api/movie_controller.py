from flask import jsonify, request, Blueprint
from flask_jwt_extended import jwt_required, get_jwt_identity

from project.middleware.error_handler import InvalidUsage
from project.service import user_calls


movie_blueprint = Blueprint('movie', __name__,)

@movie_blueprint.route('/admin', methods=['GET'])
@jwt_required
def protected():
    """
    Protected content method.
    ---
    description: Protected content method. Can not be seen without valid token.
    tags:
      - Movie Methods
    security:
      - APIKeyHeader: []
    responses:
      200:
        description: User successfully accessed the content.
    """
    allowed_role = 'admin'
    current_user_role = get_jwt_identity()['role']
    if current_user_role != allowed_role:
        raise InvalidUsage('Forbidden for this user', status_code=403)
    else:
        return jsonify({"msg": "You are a super cool admin"})


@movie_blueprint.errorhandler(InvalidUsage)
def handle_invalid_usage(error):
    response = jsonify(error.to_dict())
    response.status_code = error.status_code
    return response