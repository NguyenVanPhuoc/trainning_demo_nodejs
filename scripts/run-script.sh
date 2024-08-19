#!/bin/sh

set -e

echo "Starting the script..."

npm ci --unsafe-perm=true --allow-root
echo "Dependencies installed successfully."

npm audit signatures
echo Audit npm signatures

npm run lint && NODE_ENV=testing node --require ts-node/register src/index.ts
echo "Linting passed and the TypeScript file executed successfully."

npm run test
echo "Tests executed successfully."

echo "Script completed."
