FROM node:alpine

WORKDIR /src

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install
RUN npm install react-scripts -g

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]