FROM node:18
WORKDIR /app


WORKDIR /app/backend
COPY ./backend/package*.json .
RUN npm install
COPY ./backend .
COPY ./backend/prisma/schema.prisma ./prisma
RUN npx prisma migrate dev

WORKDIR /app/frontend
COPY ./frontend/package*.json .
COPY ./frontend .
RUN npm install

EXPOSE 3000
EXPOSE 4321
WORKDIR /app
COPY ./entrypoint.sh ./entrypoint.sh
RUN chmod 777 ./entrypoint.sh
ENTRYPOINT [ "./entrypoint.sh" ]