#!/usr/bin/env bash
echo "-- clearing the dir directory"
npm run build-clean

echo "-- removing the node_modules"
npm run dependency_clean

echo "-- running npm install to install all dependencies"
npm install

echo "-- running a dedupe on the dependency tree"
npm ddp

echo "-- running the webpack bundle process"
npx webpack --config webpack.config.js