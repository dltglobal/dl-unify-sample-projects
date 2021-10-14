FROM node:latest
WORKDIR /app
RUN mkdir -p /app/public
COPY public public/
COPY package*.json ./
COPY backend.js .
RUN npm install
EXPOSE 8004
ENTRYPOINT ["node", "backend.js"]