users = [
    {"email": "a@test.com", "active": True},
    {"email": "b@test.com", "active": False},
]

result = [f"{user['email']} {'(active)' if user['active'] else '(inactive)'}" for user in users]
print(result)