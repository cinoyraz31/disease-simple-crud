FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@10.2.5
COPY . .
EXPOSE 5000
CMD ["npm", "start"]