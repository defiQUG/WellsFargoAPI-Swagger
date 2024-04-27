import unittest
from models.payment import Payment

class TestPayment(unittest.TestCase):
    def test_payment_creation(self):
        payment = Payment(amount=100)
        self.assertEqual(payment.amount, 100)