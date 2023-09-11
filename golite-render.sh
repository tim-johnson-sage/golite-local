#!/bin/bash
FOLDER="$1"
rm -rf /app/docs
redocly bundle /app/$FOLDER/paths/*.yaml --output "/app/docs"
redocly join /app/docs/*.yaml --output "/app/docs/$FOLDER.openapi.yaml" --without-x-tag-groups
redocly build-docs /app/docs/$FOLDER.openapi.yaml --output /var/www/html/$FOLDER.html