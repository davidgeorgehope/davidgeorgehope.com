#!/bin/bash
# Production is the static dist/ directory, served by nginx.
# Do not run `astro preview` on the server. See deploy/nginx.conf.

set -euo pipefail

cd "$(dirname "$0")"

if [ ! -d "dist" ] || [ "${1:-}" = "--build" ]; then
    echo "Building site..."
    npm run build
fi

echo ""
echo "Static build is ready in dist/"
echo "Serve that directory with nginx. Example:"
echo "  rsync -av --delete dist/ user@server:/var/www/davidgeorgehope.com/"
echo "  # site config: deploy/nginx.conf"
echo ""
echo "No Node process. \`astro preview\` is not the production server."
