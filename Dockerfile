FROM node:14
WORKDIR /usr/src/app
COPY src/package.json ./
RUN npm install
copy src/server.js ./
copy src/index.html ./
copy src/images/ ./images
copy src/package.json ./
copy src/package-lock.json ./
expose 3000
CMD ["node","server.js"]
