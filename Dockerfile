FROM node:12.14.0-alpine3.11

RUN npm config set cache /home/node/app/.npm-cache --global

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install react-scripts@3.4.0

COPY . .

EXPOSE 3000

ENTRYPOINT npm run start