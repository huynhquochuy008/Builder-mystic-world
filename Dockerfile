# Step 1: Build
FROM node:22 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve with static server
FROM node:22 AS runner
WORKDIR /app

# Install a static server like 'serve'
RUN npm install -g serve

# Copy the built output from the previous step
COPY --from=builder /app/dist ./dist

# Expose port
EXPOSE 8080

# Serve the static files
CMD ["serve", "-s", "dist", "-l", "8080"]
