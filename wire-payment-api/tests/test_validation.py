import unittest
from validations.validate_payment import validate_payment

class TestValidation(unittest.TestCase):
    def test_validate_payment(self):
        data = {'amount': 100}
        result = validate_payment(data)
        self.assertIsInstance(result, list)