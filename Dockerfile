FROM node:14
WORKDIR /usr/src/app
COPY src/package.json ./
RUN npm install
copy src/* ./
expose 80
CMD ["node","server.js"]