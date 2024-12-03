# Routine

This object is going to be associated with a user and it will essentially be a list of Exercises that the user can create, edit, delete and use to follow the workout. 

## API Documentation

Most of these calls will need the user ID in the body or in the 
query parameter. 


| Method | Uri                      | Description                                                          |
|--------|--------------------------|----------------------------------------------------------------------|
| GET    | /routines                | get all routines associated with the user                            |
| POST   | /routines                | create a new routine for a specific user                             |
| PUT    | /routines/:id            | Edit the routine                                                     |
| DELETE | /routines/:id            | Delete the routine if the userId matches                             |
| GET    | /routines/:id/exercises  | Get all exercises for a specific routine                             |
| PUT    | /routines/:id/exercises  | Update the list of exercises in the routine by providing a new list  |

### Get all Routines
> GET: /routines

#### Parameters

```
userId: Integer
```


### Get a Routine
> GET: /routine/:id
#### Parameters
```
userId: Integer
```

#### Response
```javascript
{
    routine: {
        id: Integer,
        user_name: String(80),
        email: String(80),
        age: Integer,
        weight: Double,
        height: Double,
    }
}
```

### Create an User
> POST: /user
#### Parameters
JSON Object
```javascript
{
    id: Integer,
    user_name: String(80),
    email: String(80),
    age: Integer,
    weight: Double,
    height: Double,
}
```
#### Response
```javascript
{
    user: {
        id: Integer,
        user_name: String(80),
        email: String(80),
        age: Integer,
        weight: Double,
        height: Double,
    }
}
```

### Update an User
> PUT: /user/<:id>
#### Parameters
JSON Object
```javascript
{
    id: Integer,
    user_name: String(80),
    email: String(80),
    age: Integer,
    weight: Double,
    height: Double,
}
```
#### Response
```javascript
{
    user: {
        id: Integer,
        user_name: String(80),
        email: String(80),
        age: Integer,
        weight: Double,
        height: Double,
    }
}
```