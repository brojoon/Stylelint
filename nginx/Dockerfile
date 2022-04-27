FROM debian:buster

RUN apt-get -y update && apt-get -y upgrade && apt-get -y install \
    nginx \
    vim
COPY ./nginx.conf /etc/nginx/sites-available/conf
COPY ./init.sh ./

EXPOSE 80

CMD bash init.sh
