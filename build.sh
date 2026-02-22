#!/bin/bash

# Pull Git LFS files before building
echo "Pulling Git LFS files..."
git lfs pull

# Run the Next.js build
echo "Building Next.js app..."
next build
