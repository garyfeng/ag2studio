# Use the official Python 3.10 slim image
FROM python:3.10-slim

# Install system dependencies, including rsync, Node.js (v20+), and yarn
RUN apt-get update && apt-get install -y curl gnupg build-essential rsync \
 && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
 && apt-get install -y nodejs \
 && npm install -g yarn \
 && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy the entire repository into the image
COPY . .

# Upgrade pip and install the backend in editable mode
RUN pip install --upgrade pip && \
    pip install -e .&& \
    pip install openai

# Build the frontend
WORKDIR /app/frontend
RUN yarn install && yarn build

# Expose the port that the AG2 Studio UI will use
EXPOSE 8081

# Set the working directory back to the repository root
WORKDIR /app

# Run the AG2 Studio UI
CMD ["ag2studio", "ui", "--port", "8081"]
