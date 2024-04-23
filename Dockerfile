# dockerfile for nodejs app on express
# base image
FROM node:slim
# create app directory
WORKDIR /app
# install app dependencies
COPY package*.json ./
RUN npm install
# bundle app source
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]
