#!/bin/bash
rm /etc/nginx/sites-enabled/default && ln -s /etc/nginx/sites-available/conf && /etc/nginx/sites-enabled && nginx -g 'daemon off;'
