# Routine

## API Documentation

### Get all Routines
>
### Get a Routine
> GET: /routine/:id
#### Parameters
> None

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