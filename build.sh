#!/usr/bin/env bash
echo "-- running npm ci to install all dependencies"
npm install

echo "-- running a dedupe on the dependency tree"
npm ddp

echo "-- running the webpack bundle process"
npx webpack --config webpack.config.js