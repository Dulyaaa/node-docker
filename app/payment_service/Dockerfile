FROM node:16-alpine

RUN npm install express mongoose cors dotenv body-parser config

WORKDIR /payment_service

COPY . .

RUN npm install

EXPOSE 4002

CMD ["node", "server.js"]