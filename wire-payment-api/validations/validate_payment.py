def validate_payment(data: dict[str, any]) -> list[str]:
    errors: list[str] = []
    if 'amount' not in data:
        errors.append("Amount is required")
    return errors