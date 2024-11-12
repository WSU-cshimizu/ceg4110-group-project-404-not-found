# Exercise

This object is meant to represent the exercise that are going to be added in our application. 

## Object Fields
| Name          | Type    | Description                                            |
|---------------|---------|--------------------------------------------------------|
| id            | Integer | the id of the object                                   |
| exerciseName  | String  | Name of the exercise                                   |
| type          | String  | Types of exercise include: Cardio, Aerobic, Anaerobic  |
| videoUrl      | String  | A text of the url showcasing the exercise              |

## Api Endpoints

| Method | Uri            | description                    |
|--------|----------------|--------------------------------|
| GET    | /exercise      | retrieve all of the exercises  |
| GET    | /exercise/:id  | get a single exercise by id    |
| POST   | /exercise      | Create a new exercise          |
| PUT    | /exercise/:id  | Update a single exercise       |
| DELETE | /exercise/:id  | Delete the exercise by id      |