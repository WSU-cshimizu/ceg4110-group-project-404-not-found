# Primal Fit

## Requirements
- Node => 22.9.0
- Npm => 10.8.3
- Python => 3.13
- postgresql14

## Running Container

1. Build containers
```shell
docker-compose build
```
2. Run container
```shell
docker-compose up -d
```

The `-d` flag will run the container detached

3. Shutting down the containers

```shell
docker-compose down
```

## Front-end

### Running the app

Before running the app, after fetching from git, make sure you do the following command first:
```shell
npm i
```
This will fetch all of the packages the app uses and are needed to run the app. 

```shell
npm start
```

If using yarn
```shell
yarn start
```

## Back-end

### How to setup environment


1. Install pipenv

```shell
pip install pipenv
```


2. Activate virtual environment. Make sure you are inside primalFit/backend folder
```shell
pipenv shell
```

3. Set interpreter
    1. copy virtualenv location from cmd line from previous task. 
    2. open command palette `SHIFT+CMD+P`
    3. select `Python:Select Interpreter`
    4. Select `Enter interpreter path`
    5. Paste the virtualenv path from step 1. 


4. Install flask, sql, psycopg2

```shell
pipenv install flask flask-sqlalchemy psycopg2 python-dotenv flask-cors
```

### Running the App

```shell
flask run
```

## DB

### Starting the server

Mac
```shell
brew services start postgresql@14
```

If running for the first time run the following as well:
```shell
cd /opt/homebrew/Cellar/postgresql@16/16.4/bin
./createuser postgres
```

### Stoping the server

Mac
```shell
brew services stop postgresql@14
```

### Initializing the DB
Enter the python shell by typing `python` on the shell.
Then write each line in the interpreter to start all the tables

```python
from app import app, db
app.app_context().push()
db.create_all()
```