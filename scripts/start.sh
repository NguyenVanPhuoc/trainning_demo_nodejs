NODE_MODULE_DIR="./node_modules/"

if [ ! -d "$NODE_MODULE_DIR" ]; then
  echo "====== Installing dependencies ======"
  npm install
fi

echo "====== Running project with nodemon ======"
npx nodemon --watch src --ext ts,js --exec ts-node src/index.ts
