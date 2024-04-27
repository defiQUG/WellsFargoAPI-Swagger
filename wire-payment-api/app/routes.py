from flask import request, jsonify
from .services.validation import validate_payment
from .services.authentication import authenticate
from .services.authorization import authorize

def get_app():
    from app import app
    return app

@app.route('/payment', methods=['POST'])
def handle_payment():
    data = request.get_json()
    errors = validate_payment(data)
    if errors:
        return jsonify(errors), 400
    return jsonify({"status": "success"}), 200