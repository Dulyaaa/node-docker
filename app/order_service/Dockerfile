FROM node:16-alpine

WORKDIR /order_service

COPY . .

RUN npm install

EXPOSE 4001

CMD ["node", "server.js"]