FROM node:21.4.0

WORKDIR .
COPY package.json .
RUN npm install
COPY . .
CMD npm start