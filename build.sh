#!/bin/bash
echo "[INFO] Starting up the server."
docker run -d -p 8080:80 \
  -v "$(pwd)/html":/usr/local/apache2/htdocs/ \
  --name apache-dev httpd:2.4
