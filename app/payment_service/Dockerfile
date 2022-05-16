FROM node:16-alpine3.14

WORKDIR /payment_service

COPY . .

RUN npm install express mongoose cors dotenv body-parser config

EXPOSE 4002

CMD ["node", "server.js"]