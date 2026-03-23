#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Prompt for GitHub username and PAT
echo "To pull from private GHCR, you may need a Personal Access Token (PAT)."
echo "If your package is public, you can skip login, but if it's private, please login."
read -p "GitHub Username (e.g., adminvpshub): " GH_USER
echo -n "GitHub PAT (with read:packages permission): "
read -s GH_PAT
echo ""

# Login to GHCR if credentials are provided
if [ -n "$GH_USER" ] && [ -n "$GH_PAT" ]; then
    echo "Logging in to ghcr.io..."
    sudo docker logout ghcr.io || true
    echo "$GH_PAT" | sudo docker login ghcr.io -u "$GH_USER" --password-stdin
fi

IMAGE_NAME="ghcr.io/adminvpshub/do-cu-viet-anh:latest"
CONTAINER_NAME="docu-frontend-app"
PORT="3002"

echo "Pulling the latest image from GitHub Container Registry ($IMAGE_NAME)..."
sudo docker pull "$IMAGE_NAME"

echo "Checking if an older container exists..."
if sudo docker ps -a --format '{{.Names}}' | grep -Eq "^${CONTAINER_NAME}\$"; then
    echo "Stopping existing container..."
    sudo docker stop "$CONTAINER_NAME" || true
    echo "Removing existing container..."
    sudo docker rm "$CONTAINER_NAME" || true
fi

echo "Starting the new container on port $PORT..."
sudo docker run -d \
    --name "$CONTAINER_NAME" \
    --restart unless-stopped \
    -p "$PORT:3002" \
    "$IMAGE_NAME"

echo "Deployment complete! Application is now running on port $PORT."
