def test_home(client):
    response = client.get("/")
    assert response.status_code == 200
    assert b"Hello, World!" in response.data

def test_add_user(client):
    response = client.post("/add_user")
    assert response.status_code == 200
    data = response.get_json()
    assert data["message"] == "User added!"

def test_get_users(client):
    # First, add a user
    client.get("/add_user")

    # Then, fetch the list of users
    response = client.get("/users")
    data = response.get_json()

    assert response.status_code == 200
    assert len(data) == 1
    assert data[0]["username"] == "example_user"
    assert data[0]["email"] == "example@example.com"
