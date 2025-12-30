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

# Run Astro preview in the background
nohup npm run preview -- --port $PORT --allowed-hosts=davidgeorgehope.com > /tmp/astro-preview.log 2>&1 &
PID=$!

echo "Server started in background (PID: $PID)"
echo "Log file: /tmp/astro-preview.log"
echo ""
echo "To stop: kill $PID"

# Save PID to file for easy stopping
echo $PID > /tmp/astro-preview.pid
