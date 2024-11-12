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


## User

| Method | Uri                | Description                                |
|--------|--------------------|--------------------------------------------|
| POST   | /login             | log the user in with email and password    |
| POST   | /register          | create a new user                          |
| PUT    | /user/:id          | updates the user by id                     |
| PUT    | /user/:id/routines | Replace routines with new list of routines |

## Execrcise

| Method | Uri            | Description             |
|--------|----------------|-------------------------|
| GET    | /exercises     | get all exercises       |
| GET    | /exercises/:id | get a specific exercise |
| POST   | /exercises     | create a new exercise   |
| PUT    | /exercises/:id | update an exercise      |
| DELETE | /exercises/:id | delete an exercise      |

## Food

| Method | Uri        | Description         |
|--------|------------|---------------------|
| GET    | /foods     | get all foods       |
| GET    | /foods/:id | get a specific food |
| POST   | /foods     | create a new food   |
| PUT    | /foods/:id | update a food       |
| DELETE | /foods/:id | delete a food       |