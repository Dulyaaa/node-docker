FROM node:16-alpine

WORKDIR /payment_service

COPY . .

RUN npm install

EXPOSE 4002

CMD ["node", "server.js"]