FROM node:16-alpine3.14

WORKDIR /order_service

COPY . .

RUN npm install express mongoose cors dotenv body-parser config

EXPOSE 4001

CMD ["node", "server.js"]