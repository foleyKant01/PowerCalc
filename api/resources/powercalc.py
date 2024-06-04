from flask_restful import Resource
from helpers.user import *


class UserApi(Resource):
    def post(self, route):
        if route == "createuser":
            return CreateUser()
        if route == "loginuser":
            return LoginUser()
    