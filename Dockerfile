FROM node:22-bullseye-slim

WORKDIR /code

COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Inform Docker that the container listens on the specified port
EXPOSE 3000

# Command to run the application using 'npm start'
CMD ["npm", "start"]
