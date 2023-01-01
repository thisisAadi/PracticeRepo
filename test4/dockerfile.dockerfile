FROM node:18
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node testserv.js
EXPOSE 5600