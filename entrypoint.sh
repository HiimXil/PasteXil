#!/bin/sh
cd /app/frontend
echo "URL=$URL PUBLIC_URL=$PUBLIC_URL" > .env
npm run build
HOST=0.0.0.0 PORT=4321 node ./dist/server/entry.mjs &
cd /app/backend
npm run start 
