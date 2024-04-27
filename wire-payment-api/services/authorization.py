def authorize(user: dict) -> bool:
    return user.get('is_admin', False)