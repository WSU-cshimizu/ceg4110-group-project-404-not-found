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
| PATCH  | /users/:id                               | partially update a user by id  |
| DELETE | /users/:id                               | delete user by id              |
| GET    | /routines                                | get all routines               |
| GET    | /users/:uid/routines                     | get all routines from user     |
| GET    | /routines/:rid                           | get routine by id              |
| POST   | /users/:uid/routines                     | create a routine               |
| DELETE | /routines/:rid                           | delete routine                 |
| PATCH  | /users/:uid/routines/:rid                | update routine                 |
| GET    | /users/routines/:rid/exercises           | get all exercise in a routine  |
| POST   | /users/routines/:rid/exercises           | create an exercise             |
| DELETE | /exercises/:eid                          | delete an exercise             |
| GET    | /users/:id/foods                         | get all food eaten             |
| GET    | /users/:uid/foods/:fid                   | get a single food by id        |
| POST   | /users/:id/foods                         | add a food to the user         |
| DELETE | /foods/:fid                               | delete a food from the user    |

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
    "calorieGoal": "Integer",
    "carbohydrateGoal": "Integer",
    "proteinGoal": "Integer"
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
    "activityLevel":"Integer(ex: 0=sedentary, 1=lightly active, 2=active, 3=very active)" 
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
    "activityLevel":"Integer"
}
```

### GET: /users
Retrieves all users

**Body**
```
```
**Response: 200 OK**
shows all information in user
```json
{
    "users":["<User1>", "<User2>"]
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
    "activityLevel":"Integer",
    "calorieGoal":"Integer",
    "carbohydrateGoal":"Integer",
    "proteinGoal":"Integer",
}
```

### PATCH: /users/:id
Body
```json
{
    "name":"String",
    "email":"String",
    "birthdate":"Date (e.g. 2024-10-11)",
    "weight":"Double",
    "weightGoal":"Double",
    "height":"Double",
    "isMale":"Boolean",
    "routines":["<Routine>"],
    "eatenFood":["<Food>"],
    "activityLevel":"Integer",
    "calorieGoal":"Integer",
    "carbohydrateGoal":"Integer",
    "proteinGoal":"Integer"
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
    "activityLevel":"Integer",
    "calorieGoal":"Integer",
    "carbohydrateGoal":"Integer",
    "proteinGoal":"Integer"
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

### GET: /routines
Get all routines

**Body**
```
```

**Response: 200 OK**
```json
{
    "routines":["<Routine>", "<Routine>"]
}
```

### GET: /users/:id/routines
Get all the routines from a specific user

**Body**
```
```

**Response: 200 OK**
```json
{
    "routines":["<Routine>", "<Routine>"]
}
```


### GET: /routines/:rid
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
    "exercises":["<Exercise>"],
    "days": ["monday", "wednesday", "thursday"]
}
```

**Response: 201 OK**
```json
{
    "id":"Integer",
    "userId":"Integer",
    "name":"String",
    "exercises":["<Exercise>"],
    "days":["monday", "wednesday", "thursday"],
}
```

### DELETE: /routines/:rid
Deletes a routine from a specific user by id

**Body**
```
```

**Response: 204 OK**
```
```
### PATCH: /users/:uid/routines/:rid
Update a routine for a user

**Body**
```json
{
    "name":"String",
    "exercises":["<Exercise>"],
    "days":["monday", "wednesday", "thursday"],
}
```

**Response: 200 OK**
```json
{
    "id":"Integer",
    "userId":"Integer",
    "name":"String",
    "exercises":["<Exercise>"],
    "days":["monday", "wednesday", "thursday"],
}
```

### GET: /users/routines/:rid/exercises
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

### POST: /users/routines/:rid/exercises
Add an exercise to the routine

**Body**
```json
{
    "name":"String",
    "type":"String",
    "videoUrl":"String",
    "caloriesBurned": "Integer"
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
    "caloriesBurned":"Integer",
    "videoUrl":"String",
    "date":"Date (2024-11-12)"
}
```

### PATCH: /routines/:rid/exercises/:eid
Update an exercise in the routine

**Body**
```json
{
    "name":"String",
    "type":"String",
    "duration":"Double",
    "caloriesBurned":"Integer",
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
    "caloriesBurned":"Integer",
    "videoUrl":"String",
    "date":"Date (2024-11-12)"
}
```


### DELETE: /exercises/:eid
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

### DELETE: /foods/:fid
Deletes a food from the list of eaten food by user

**Body**
```
```

**Response: 204 OK**
```
```