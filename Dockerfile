FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
RUN mkdir /static
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt install nodejs
RUN npm install -g @angular/cli
WORKDIR /
ADD /frontend/ /frontend/
RUN ng build
WORKDIR /static
COPY /frontend/dist/frontend/* .
WORKDIR /code
ADD requirements.txt /code/
RUN pip install -r requirements.txt
ADD . /code/