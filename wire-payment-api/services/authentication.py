import jwt
from functools import wraps

def authenticate(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        # Authentication logic here
        return f(*args, **kwargs)
    return decorated_function

def decode_token(token: str):
    return jwt.decode(token, "your_secret_key", algorithms=["HS256"])