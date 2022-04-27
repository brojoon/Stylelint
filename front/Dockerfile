FROM debian:buster

RUN apt-get -y update && apt-get -y upgrade && apt-get -y install \
    curl

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get -y install nodejs

COPY package*.json ./

RUN npm install

COPY . .
COPY ./init.sh ./

EXPOSE 3000

CMD bash init.sh
