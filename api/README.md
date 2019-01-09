# API documentation

## Users

### Creating a New User

A `POST` request to `/api/register/` will create a new user account. Upon account create a new `user` instance is created along with a linked `profile`.
After creating a new user account and profile, the API returns an instance of the user account.

#### Request

```html
POST /api/register/
```

#### Parameters

* The following parameters are **_required_**:

##### username

   The Username for the account. This will be used for display in the website. This is a non-unique field.

##### password

A password for the account.

* The following parameters are **_optional_**:

##### first name

   The first name of the user creating the account.

##### last name

   The last name of the user creating the account.

##### email

   The email address of the user creating the account. This will be used to send them updates and notifications.

#### Input

```html
{
    "username": "test_account",
    "password": "hunter21",
    "first_name": "test",
    "last_name": "user",
    "email": "test@test.com"
}
````

#### Response

```html
{
    "id": 3,
    "username": "test_account",
    "first_name": "test",
    "last_name": "user",
    "email": "test@test.com",
}
````

If a username or password is not provided, the API will instead return the following

#### Response
```html
{
    "username": [
        "This field may not be blank."
    ],
    "password": [
        "This field may not be blank."
    ]
}
```
-----

### Access and Modification
The API endpoint to access and modify user information is `/api/users/`. The type of request sent to this endpoint determine the response object.

### Retrieve a list of all users
A `GET` request returns a list of all users, including a nested representation of their profile information. If a user does not have a profile instance associated with their account (as in the case of a user created through `python manage.py createsuperuser`), this field will return `null`.

#### Request
```html
GET /api/users
```

#### Response
```html
[
    {
        "id": 2,
        "last_login": null,
        "username": "test_acct",
        "first_name": "Test",
        "last_name": "Acct",
        "email": "test@test.com",
        "profile": {
            "bio": "A test user"
        }
    },
    {
        "id": 1,
        "last_login": "2019-01-03T22:19:59.581251Z",
        "username": "test_admin",
        "first_name": "Admin",
        "last_name": "",
        "email": "test_admin@test.com",
        "profile": null
    }
]
```

If a request comes from an unauthenticated source, it will return the following

```html
{
    "detail": "Authentication credentials were not provided."
}
```

### Retrieve a Single User

If the URL in a `GET` request is followed by a valid `user_id` number and the requester is authenticated, the API will return the requested instance.

#### Request
```html
GET /api/users/2
```

#### Response

```html
{
    "id": 2,
    "last_login": null,
    "username": "test_acct",
    "first_name": "Test",
    "last_name": "Acct",
    "email": "test@test.com",
    "profile": {
        "bio": "A test user"
    }
}
```

If there is no user instance associated with that id, the API will return the following

#### Response
```html
{
    "detail": "Not found."
}
```

### Updating a User

A `PATCH` request submitted to a specific user object will update their information.

This API endpoint does not currently enable password changing. That feature will be added later.

#### Request
```html
PATCH /api/users/<USER_NUMBER>/
```

#### Parameters

* The following parameters are **_required_**.

##### password
   The user's current password. This is used to validate whether the source sending the `PUT` request has valid access to the account.

* The following parameters are **_optional_**.

##### username

   Same as above.

##### first_name

   Same as above.

##### last_name

   Same as above.

##### email

   Same as above.

##### profile.bio

   Same as above.

#### Input
```html
PATCH /api/users/3/
{
    "password": "hunter21",
    "first_name": "New",
    "last_name": "Name",
    "profile": {
        "bio": "This is my new bio."
    }
}
```

#### Response
```html
{
    "id": 3,
    "last_login": null,
    "username": "test_account",
    "first_name": "New",
    "last_name": "Name",
    "email": "test@test.com",
    "profile": {
        "bio": "This is my new bio."
    }
}
```

If no password is provided, no changes will be made and the API will raise a validation error.

```html
{
    "password": "This field may not be blank."
}
```

If an incorrect password is provided, no changes will be made and the API will raise a validation error.

```html
{
    "password": "password was incorrect."
}
```

## Albums

**_TODO_**

## Blog

**_TODO_**