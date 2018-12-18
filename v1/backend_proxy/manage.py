from flask_script import Manager
from flask_jwt_extended import JWTManager
from flask_cors import CORS

from project import create_app


app = create_app()
CORS(app)
jwt = JWTManager(app)
manager = Manager(app)


if __name__ == '__main__':
    manager.run()
