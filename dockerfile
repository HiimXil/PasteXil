FROM node:18
WORKDIR /app

WORKDIR /app/backend
COPY ./backend/package*.json .
RUN npm install
COPY ./backend .
RUN npx prisma migrate dev

WORKDIR /app/frontend
COPY ./frontend/package*.json .
RUN npm install
COPY ./frontend .
RUN npm run build

EXPOSE 3000
EXPOSE 4321
WORKDIR /app
COPY ./entrypoint.sh ./entrypoint.sh
RUN chmod +x ./entrypoint.sh
ENTRYPOINT [ "./entrypoint.sh" ]