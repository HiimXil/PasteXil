FROM node:18
WORKDIR /app

COPY ./backend/package*.json ./
RUN npm install
COPY ./backend ./backend
RUN npx prisma migrate dev

COPY ./entrypoint.sh ./entrypoint.sh
RUN chmod +x ./entrypoint.sh


COPY ./frontend ./frontend
WORKDIR /app/frontend

RUN npm install
RUN npm run build

EXPOSE 3000
EXPOSE 4321
WORKDIR /app
ENTRYPOINT [ "./entrypoint.sh" ]