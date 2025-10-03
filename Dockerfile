# === STAGE 1: Builder ===
# Use a full Node image for building
FROM node:22-bullseye-slim AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
# Copy application source code
# This copies your server.js, index.ts, etc., whatever you need to build
COPY . .

# Run your build command to generate the 'dist' folder
# Change 'build' to whatever script name compiles your code (e.g., 'tsc')
RUN npm run build 

# === STAGE 2: Production Final Image ===
# Use a lightweight runtime environment for the final image
FROM node:22-bullseye-slim

# Set working directory where the final app will live
WORKDIR /code

# Copy *only* the production dependencies from the builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json .
COPY --from=builder /app/dist ./dist
# Expose the application port
EXPOSE 3000

# Start the application using the command that references the compiled files
CMD ["npm", "start"]
