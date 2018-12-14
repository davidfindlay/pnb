FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
RUN mkdir /static
WORKDIR /frontend
RUN ng build
WORKDIR /static
ADD /frontend/dist/frontend/* /static/
WORKDIR /code
ADD requirements.txt /code/
RUN pip install -r requirements.txt
ADD . /code/