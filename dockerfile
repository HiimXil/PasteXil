FROM node:18
WORKDIR /app


WORKDIR /app/backend
COPY ./backend/package*.json .
RUN npm install
COPY ./backend .
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
USER 1000:1000
ENTRYPOINT [ "./entrypoint.sh" ]