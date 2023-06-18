FROM node:18.12.1

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
EXPOSE 3306

CMD [ "node", "dist/app.js" ]


