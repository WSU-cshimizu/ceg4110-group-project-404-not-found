# API Documentation

This is an overview of all the objects and the Uri in a single file

## Seeding and Dropping

To add initial data to the database run the following command

```shell
python init_db.py
```

To reset the database and dropping all the tables 
```shell
python drop_db.py
```
## Routes
| Method | Route                                    | Description                    |
|--------|------------------------------------------|--------------------------------|
| POST   | /login                                   | log a user with email password |
| POST   | /register                                | register a user                |
| GET    | /users                                   | get all user                   |
| GET    | /users/:id                               | get user by id                 |
| PUT    | /users/:id                               | update user by id              |
| PATCH  | /users/:id                               | partially update a user by id  |
| DELETE | /users/:id                               | delete user by id              |
| GET    | /users/:id/routines                      | get all routines               |
| GET    | /users/:uid/routines/:rid                | get routine by id              |
| POST   | /users/:id/routines                      | create a routine               |
| DELETE | /users/:uid/routines/:rid                | delete routine                 |
| PUT    | /users/:uid/routines/:rid                | update routine                 |
| GET    | /users/:uid/routines/:rid/exercises      | get all exercise in a routine  |
| POST   | /users/:uid/routines/:rid/exercises      | add an exercise                |
| DELETE | /users/:uid/routines/:rid/exercises/:eid | delete an exercise             |
| GET    | /users/:id/foods                         | get all food eaten             |
| GET    | /users/:uid/foods/:fid                   | get a single food by id        |
| POST   | /users/:id/foods                         | add a food to the user         |
| DELETE | /users/:uid/foods/:fid                   | delete a food from the user    |

### POST: /login
Logs the user into the app

**Body**
```json
{
    "email":"string",
    "password":"string"
}
```
**Response: 200 OK**
```json
{
    "id":"Integer",
    "name":"String",
    "email":"String",
    "birthdate":"Date (e.g. 2024-10-11)",
    "weight":"Double",
    "weightGoal":"Double",
    "height":"Double",
    "isMale":"Boolean",
    "routines":["<Routine>"],
    "eatenFood":["<Food>"],
}
```

### POST: /register
Adds the user to the database

**Body**
```json
{
    "name":"String",
    "email":"String",
    "password":"String",
    "birthdate":"Date (e.g. 2024-10-11)",
    "weight":"Double",
    "weightGoal":"Double",
    "height":"Double",
    "isMale":"Boolean",
}
```
**Response: 201 OK**
```json
{
    "id":"Integer",
    "name":"String",
    "email":"String",
    "birthdate":"Date (e.g. 2024-10-11)",
    "weight":"Double",
    "weightGoal":"Double",
    "height":"Double",
    "isMale":"Boolean",
    "routines":null,
    "eatenFood":null,
}
```

### GET: /users
Retrieves all users

**Body**
```
```
**Response: 200 OK**

```json
{
    "users":["<User>"]
}
```

### GET: /users/:id
Retrieves a single user from the database based on id

**Body**
```
```

**Response: 200 OK**
```json
{
    "id":"Integer",
    "name":"String",
    "email":"String",
    "birthdate":"Date (e.g. 2024-10-11)",
    "weight":"Double",
    "weightGoal":"Double",
    "height":"Double",
    "isMale":"Boolean",
    "routines":["<Routine>"],
    "eatenFood":["<Food>"],
}
```

### PUT: /users/:id
Body
```json
{
    "id":"Integer",
    "name":"String",
    "email":"String",
    "birthdate":"Date (e.g. 2024-10-11)",
    "weight":"Double",
    "weightGoal":"Double",
    "height":"Double",
    "isMale":"Boolean",
    "routines":["<Routine>"],
    "eatenFood":["<Food>"],
}
```
Response
```json
{
    "id":"Integer",
    "name":"String",
    "email":"String",
    "birthdate":"Date (e.g. 2024-10-11)",
    "weight":"Double",
    "weightGoal":"Double",
    "height":"Double",
    "isMale":"Boolean",
    "routines":["<Routine>"],
    "eatenFood":["<Food>"],
}
```

### PATCH: /users/:id
Patially update the user. For things like updating the goal

**Body: All fields are optional**
```json
{
    "id":"Integer",
    "name":"String",
    "email":"String",
    "birthdate":"Date (e.g. 2024-10-11)",
    "weight":"Double",
    "weightGoal":"Double",
    "height":"Double",
    "isMale":"Boolean",
    "routines":["<Routine>"],
    "eatenFood":["<Food>"],
}
```

**Response: 200 OK**
```json
{
    "id":"Integer",
    "name":"String",
    "email":"String",
    "birthdate":"Date (e.g. 2024-10-11)",
    "weight":"Double",
    "weightGoal":"Double",
    "height":"Double",
    "isMale":"Boolean",
    "routines":["<Routine>"],
    "eatenFood":["<Food>"],
}
```

### DELETE: /users/:id
Deletes a user from the database

**Body**
```
```
**Response: 204 OK**
```
```

### GET: /users/:id/routines
Get all the routines from a specific user

**Body**
```
```

**Response: 200 OK**
```json
{
    "routines":["<Routine>"]
}
```

### GET: /users/:uid/routines/:rid
Get a single routine from a user by id

**Body**
```
```

**Response: 200 OK**
```json
{
    "id":"Integer",
    "userId":"Integer",
    "name":"String",
    "exercises":["<Exercise>"],
    "days":"String",
}
```
### POST: /users/:id/routines
Create a new routine for a user

**Body**
```json
{
    "name":"String",
    "exercises":["<Exercise>"]
}
```

**Response: 201 OK**
```json
{
    "id":"Integer",
    "userId":"Integer",
    "name":"String",
    "exercises":["<Exercise>"],
    "days":"String",
}
```

### DELETE: /users/:uid/routines/:rid
Deletes a routine from a specific user by id

**Body**
```
```

**Response: 204 OK**
```
```
### PUT: /users/:uid/routines/:rid
Update a routine for a user

**Body**
```json
{
    "id":"Integer",
    "userId":"Integer",
    "name":"String",
    "exercises":["<Exercise>"],
    "days":"String",
}
```

**Response: 200 OK**
```json
{
    "id":"Integer",
    "userId":"Integer",
    "name":"String",
    "exercises":["<Exercise>"],
    "days":"String",
}
```

### GET: /users/:uid/routines/:rid/exercises
get all exercises from a routine from a user

**Body**
```
```

**Response: 200 OK**
```json
{
    "exercises":["<Exercise>"]
}
```

### POST: /users/:uid/routines/:rid/exercises
Add an exercise to the routine

**Body**
```json
{
    "name":"String",
    "type":"String",
    "videoUrl":"String"
}
```

**Response: 201 OK**
```json
{
    "id":"Integer",
    "routineId":"Integer",
    "name":"String",
    "type":"String",
    "duration":"Double",
    "caloriesBurned":"Double",
    "videoUrl":"String",
    "date":"Date (2024-11-12)"
}
```

### PATCH: /users/:uid/routines/:rid/exercises/:eid
Update an exercise in the routine. **All fields in body are optional.**

**Body**
```json
{   
    "id":"Integer",
    "routineId":"Integer",
    "name":"String",
    "type":"String",
    "duration":"Double",
    "caloriesBurned":"Double",
    "videoUrl":"String",
    "date":"Date (2024-11-12)"
}
```

**Response: 201 OK**
```json
{
    "id":"Integer",
    "routineId":"Integer",
    "name":"String",
    "type":"String",
    "duration":"Double",
    "caloriesBurned":"Double",
    "videoUrl":"String",
    "date":"Date (2024-11-12)"
}
```
### DELETE: /users/:uid/routines/:rid/exercises/:eid
Delete an exercise in the routine

**Body**
```
```

**Response: 204 OK**
```
```
### GET: /users/:id/foods
Get all foods eaten by a user

**Body**
```
```

**Response: 200 OK**
```json
{
    "foods":["<Food>"]
}
```
### GET: /users/:uid/foods/:fid
Get a single food eaten by a user

**Body**
```
```

**Response: 200 OK**
```json
{
    "id":"Integer",
    "userId":"Integer",
    "name":"String",
    "mealType":"String",
    "calories":"Integer",
    "proteins":"Integer",
    "carbs":"Integer",
    "fats":"Integer",
    "date":"Date (2024-11-14)"
}
```

### POST: /users/:id/foods
Add a food eaten by a user

**Body**
```json
{
    "name":"String",
    "mealType":"String",
    "calories":"Integer",
    "proteins":"Integer",
    "carbs":"Integer",
    "fats":"Integer",
}
```

**Response: 201 OK**
```json
{
    "id":"Integer",
    "userId":"Integer",
    "name":"String",
    "mealType":"String",
    "calories":"Integer",
    "proteins":"Integer",
    "carbs":"Integer",
    "fats":"Integer",
}
```
### DELETE: /users/:uid/foods/:fid
Deletes a food from the list of eaten food by user

**Body**
```
```

**Response: 204 OK**
```
```