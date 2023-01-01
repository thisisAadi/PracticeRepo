FROM node:18
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node testServer.js
EXPOSE 4700
