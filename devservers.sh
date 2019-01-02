#!/usr/bin/env bash

python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver 0.0.0.0:8000 &

mkdir -p /code/static
cd frontend
npm install
ng build --watch --outputPath=/code/static/