FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json ./

RUN npm install

COPY tsconfig.json ./
COPY vite.config.* ./

COPY . .

# Install depencencies

CMD ["npm", "run", "dev"]