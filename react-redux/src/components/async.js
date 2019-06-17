const fs = require('fs');

//const data = fs.readFileSync(__filename);

fs.readFile(__filename, (err, data) => {
  console.log(data);
});

console.log('Hello');
