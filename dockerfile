FROM node:18
# Create app directory
WORKDIR /app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./backend/package*.json ./
RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev
# Bundle app source
COPY ./entrypoint.sh ./entrypoint.sh
RUN chmod +x ./entrypoint.sh

COPY ./backend ./backend
COPY ./frontend ./frontend
WORKDIR /app/frontend

RUN npm install
RUN npm run build

EXPOSE 3000
EXPOSE 4321
WORKDIR /app
ENTRYPOINT [ "./entrypoint.sh" ]