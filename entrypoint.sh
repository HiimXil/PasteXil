#!/bin/sh
cp /app/backend/prismatemp/schema.prisma /app/backend/prisma/schema.prisma 
cd /app/backend || exit
npx prisma migrate dev
cd /app/frontend|| exit
echo "URL=$URL PUBLIC_URL=$PUBLIC_URL" > .env
npm run build
HOST=0.0.0.0 PORT=4321 node ./dist/server/entry.mjs &
cd /app/backend|| exit
npm run start 
