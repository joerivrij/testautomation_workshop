from cerberus import Validator
from project.middleware.error_handler import InvalidUsage


class DataValidator(object):

    @staticmethod
    def validate_id(id):
        schema = {'id': {'type': 'string', 'required': True, 'minlength': 8, 'maxlength': 10}}
        list_to_validate = {'id': id}
        DataValidator.validate_schema(schema, list_to_validate)
        return

    @staticmethod
    def validate_schema(schema, file):
        v = Validator(schema)
        valid = v.validate(file, schema)
        if not valid:
            raise InvalidUsage('Errors occured when validating', status_code=400, meta=v.errors)
        return
