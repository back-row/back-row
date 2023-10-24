# Use a multi-stage build for efficiency
FROM node as builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm ci

# Copy source code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the application
RUN npm run build

# Start a new stage for the final image
FROM node:slim

# Set the NODE_ENV to production
ENV NODE_ENV=production

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies without development dependencies
COPY package*.json ./

# Copy prisma schema
COPY prisma ./prisma/

# Install openssl for prisma
RUN apt-get update -y && apt-get install -y openssl

# Generate Prisma client
RUN npx prisma generate

# Install production dependencies
RUN npm ci --only=production

# Copy the build output from the builder stage
COPY --from=builder /usr/src/app/dist ./dist

# Expose the port that your application listens on
EXPOSE 8000

# Start the application
CMD [ "node", "dist/index.js" ]
