dockerize -wait tcp://mysqld:3306 -timeout 120s > /dev/null 2>&1 && npm run build && npm run start:prod;