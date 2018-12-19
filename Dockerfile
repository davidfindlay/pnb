FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt install nodejs
WORKDIR /code
ADD requirements.txt /code/
RUN pip install -r requirements.txt
ADD . /code/
WORKDIR /code/frontend
RUN npm install
RUN npm install -g @angular/cli
RUN ng build --outputPath=/code/static