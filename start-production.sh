#!/bin/bash

# Find an open port and serve the production build

DEFAULT_PORT=4321
MAX_PORT=4400

# Build first if dist doesn't exist or --build flag passed
if [ ! -d "dist" ] || [ "$1" = "--build" ]; then
    echo "Building site..."
    npm run build
    if [ $? -ne 0 ]; then
        echo "Build failed"
        exit 1
    fi
fi

# Find an open port
find_open_port() {
    local port=$DEFAULT_PORT
    while [ $port -le $MAX_PORT ]; do
        if ! ss -tuln | grep -q ":$port "; then
            echo $port
            return 0
        fi
        port=$((port + 1))
    done
    echo "No open port found between $DEFAULT_PORT and $MAX_PORT" >&2
    exit 1
}

PORT=$(find_open_port)

echo ""
echo "Starting production server on http://localhost:$PORT"
echo "Press Ctrl+C to stop"
echo ""

# Run Astro preview on the found port
npm run preview -- --port $PORT
