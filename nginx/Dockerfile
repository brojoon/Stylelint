FROM debian:buster

RUN apt-get -y update && apt-get -y upgrade && apt-get -y install \
    nginx \
    vim \
    openssl 

COPY ./nginx.conf /etc/nginx/sites-available/conf
COPY ./init.sh ./

EXPOSE 80 443

CMD bash init.sh
