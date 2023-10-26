#!/bin/sh
cd /app/frontend
HOST=0.0.0.0 PORT=4321 URL=$URL PUBLIC_URL=$PUBLIC_URL node ./dist/server/entry.mjs &
cd /app/backend
npm run start 
