FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt install nodejs
WORKDIR /code
ADD requirements.txt /code/
RUN pip install -r requirements.txt
ADD . /code/
RUN mkdir /code/static
WORKDIR /code/frontend
RUN npm install -g @angular/cli
RUN npm install
RUN ng build --outputPath=/code/static