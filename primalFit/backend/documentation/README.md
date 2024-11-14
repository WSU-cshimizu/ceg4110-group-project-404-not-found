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

| Method | Route                                   | Description                    |
|--------|-----------------------------------------|--------------------------------|
| POST   | /login                                  | log a user with email password |
| POST   | /register                               | register a user                |
| GET    | /users                                  | get all user                   |
| GET    | /users/:id                              | get user by id                 |
| PUT    | /users/:id                              | update user by id              |
| DELETE | /users/:id                              | delete user by id              |
| GET    | /users/:id/routines                     | get all routines               |
| GET    | /users/:uid/routines/:rid               | get routine by id              |
| POST   | /users/:id/routines                     | create a routine               |
| DELETE | /users/:uid/routines/:rid               | delete routine                 |
| PUT    | /users/:uid/routines/:rid               | update routine                 |
| GET    | /users/:uid/routines/:rid/exercise      | get all exercise in a routine  |
| POST   | /users/:uid/routines/:rid/exercise      | add an exercise                |
| DELETE | /users/:uid/routines/:rid/exercise/:eid | delete an exercise             |
| GET    | /users/:id/foods                        | get all food eaten             |
| GET    | /users/:uid/foods/:fid                  | get a single food by id        |
| POST   | /users/:id/foods                        | add a food to the user         |
| DELETE | /users/:uid/foods/:fid                  | delete a food from the user    |
| GET    | /users/:id/goals                        | get all goals for a user       |
| GET    | /users/:uid/goals/:gid                  | get a goal from a user         |
| POST   | /users/:id/goals                        | add a goal for a user          |
| PUT    | /users/:uid/goals/:gid                  | edit a goal for a user         |
| DELETE | /users/:uid/goals/:gid                  | delete a goal for a user       |

### POST: /login

Body
```json
{
    "email":"string",
    "password":"string"
}
```
Response: 200 OK
```json
    {
        "user": {
            "id":"Integer",
            "name":"String",
            "email":"String",
            "birthdate":"Date (e.g. 2024-10-11)",
            "weight":"Double",
            "height":"Double",
            "is_male":"Boolean",
            "routines":["<Rountine>"],
            "eaten_food":["<Food>"],
            "goals":["<Goal>"]
        }
    }
```

### POST: /register

Body
```json
{
    "name":"String",
    "email":"String",
    "birthdate":"Date (e.g. 2024-10-11)",
    "weight":"Double",
    "height":"Double",
    "is_male":"Boolean",

}
```
Response: 201 OK
```json
    {
        "user": {
            "id":"Integer",
            "name":"String",
            "email":"String",
            "birthdate":"Date (e.g. 2024-10-11)",
            "weight":"Double",
            "height":"Double",
            "is_male":"Boolean",
            "routines":null,
            "eaten_food":null,
            "goals": null
        }
    }
```

### GET: /users
get all users
### GET: /users/:id
get a single user
### PUT: /users/:id
Body
```json
    {
        "user": {
            "id":"Integer",
            "name":"String",
            "email":"String",
            "birthdate":"Date (e.g. 2024-10-11)",
            "weight":"Double",
            "height":"Double",
            "is_male":"Boolean",
            "routines":["<Routine>"],
            "eaten_food":["<Food>"],
            "goals": ["<Goal>"]
        }
    }
```
Response
```json
    {
        "user": {
            "id":"Integer",
            "name":"String",
            "email":"String",
            "birthdate":"Date (e.g. 2024-10-11)",
            "weight":"Double",
            "height":"Double",
            "is_male":"Boolean",
            "routines":["<Routine>"],
            "eaten_food":["<Food>"],
            "goals": ["<Goal>"]
        }
    }
```

### DELETE: /users/:id
Delete a user
### GET: /users/:id/routines
get all routines of user
### GET: /users/:uid/routines/:rid
get a single routine from the user
### POST: /users/:id/routines
create a routine for the user
### DELETE: /users/:uid/routines/:rid
delete a routine for a user
### PUT: /users/:uid/routines/:rid
update a routine from a user
### GET: /users/:uid/routines/:rid/exercise
get all exercise from a rountine
### POST: /users/:uid/routines/:rid/exercise
add an exercise to the routine
### DELETE: /users/:uid/routines/:rid/exercise/:eid
delete an exercise in the routine
### GET: /users/:id/foods
get all foods eaten by a user
### GET: /users/:uid/foods/:fid
get a single food eaten by a user
### POST: /users/:id/foods
add a food eaten by a user
### DELETE: /users/:uid/foods/:fid
deletes a food from the list of eaten food by user
### GET: /users/:id/goals
get all goals for the user
### GET: /users/:uid/goals/:gid
get a single goal for a user
### POST: /users/:id/goals
add a goal for a user
### PUT: /users/:uid/goals/:gid
Edit a goal for a user
### DELETE: /users/:uid/goals/:gid
Delete a goal for a user