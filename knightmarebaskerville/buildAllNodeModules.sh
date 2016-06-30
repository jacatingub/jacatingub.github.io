#!/usr/bin/env bash
rebuild() {
    rm -rf node_modules
    npm install
}

echo "========================================"
echo "      Building client node_modules      "
echo "========================================"
cd client
rebuild

echo "========================================"
echo "      Building server node_modules      "
echo "========================================"
cd ../server
rebuild