# User

## Object Documentation

### Fields



## API Documentation

### Get an User
> GET: /user/<:id>
#### Parameters
> None

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