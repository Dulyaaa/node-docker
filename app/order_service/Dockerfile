FROM node:16-alpine

RUN npm install express mongoose cors dotenv body-parser config

WORKDIR /order_service

COPY . .

RUN npm install

EXPOSE 4001

CMD ["node", "server.js"]