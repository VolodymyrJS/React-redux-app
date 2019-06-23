const fsp = require('fs').promises;

async function main() {
  const data = await fsp.readFile(__filename);
  console.log(data);
}

main().then(() => {
  console.log('Filename has been show to you.');
});

console.log('Hello');
