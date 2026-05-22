const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');
   console.log(input);

for (let i = 10 - 1; i <= 0; i--) {
   console.log(input[i]);
}
