FROM node:18
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node testServ.js
EXPOSE 5900