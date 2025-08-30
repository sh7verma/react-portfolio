#!/bin/bash

# Clean up any existing node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Install dependencies with legacy peer deps
npm install --legacy-peer-deps

# Run the build
npm run build 