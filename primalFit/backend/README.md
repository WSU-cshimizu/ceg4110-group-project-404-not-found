# Flask Backend
Python application developed using the Flask framework to communicate with the our postgresql db. 

## Requirements
* Python >= 3.13
* Postgresql14

## Running container 

> _**NOTE:**_ Make sure the database is running before running the application. 

1. Build the container

```shell
docker image build -t flask_docker .
```

2. Run the container

```shell
docker run -p 5000:5000 -d flask_docker
```

3. stop container

Find the CONTAINER ID using: `docker ps` 

```shell
docker stop <CONTAINER_ID>
```

### Removing Containers
1. Find the container id you want to delete
```shell
docker ps -a
```

2. Remove container 
```shell
docker rm <CONTAINER_ID>
```

## Running Locally (Prod)

## Running Locally (Dev)

1. Create a virtual environment. (Skip this step if you already have a venv folder)

```shell
python3 -m venv .venv
```

2. Activate virtual environment
    * Linux
    ```shell
    source venv/bin/activate
    ```
    * Windows
    ```shell
    ```

> Ensure VS Code has the right interpreter selected by using the command palette `CMD+SHIFT+P`, select `Python: Select Interpreter` select `venv` option, if not, type the path to the interpreter (venv/bin).  

3. Install dependencies
```shell
pip install -r requirements.txt
```

4. Run Application

Ensure that `.flaskenv` is provided

```shell
flask run --debug
```


5. Exit venv

```shell
deactivate
```


