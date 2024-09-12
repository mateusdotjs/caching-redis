FROM node:20.17.0-alpine3.20

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "run", "start:dev"] 

