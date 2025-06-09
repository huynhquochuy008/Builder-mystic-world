FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY vite.config.* ./
COPY . .

# Install depencencies
RUN npm install

CMD ["npm", "run", "dev"]