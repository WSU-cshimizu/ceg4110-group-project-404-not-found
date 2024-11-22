echo "Waiting for postgres..."

while ! nc -z db 5432; do
  sleep 0.1
done

echo "PostgreSQL started"
python drop_db.py # comment this line if you want the db to persist
python init_db.py
python run.py