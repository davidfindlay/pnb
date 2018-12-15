FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
RUN mkdir /code/static
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt install nodejs
RUN npm install -g @angular/cli
WORKDIR /
ADD /frontend/ /frontend/
WORKDIR /frontend
RUN npm install
RUN ng build
WORKDIR /code
ADD requirements.txt /code/
RUN pip install -r requirements.txt
ADD . /code/
WORKDIR /frontend/dist/frontend/
COPY . /code/static/
WORKDIR /code