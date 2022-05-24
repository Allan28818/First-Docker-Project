FROM node:16

WORKDIR /usr/src

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 8080

RUN  yarn build 

CMD ["yarn", "start"]