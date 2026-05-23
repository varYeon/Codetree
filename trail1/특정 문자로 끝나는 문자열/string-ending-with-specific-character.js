const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let strArr = [];
let alphabet = input[10]

for (let i = 0; i < 10; i++) {
   strArr.push(input[i]);
}

let result = [];

for (let i = 9; i >= 0; i--) {
   const length = input[i].length;

   if (strArr[i][length - 1] === alphabet) result.push(strArr[i])
}

if (result.length === 0) console.log('None');
else {
   for (let i = result.length - 1; i >= 0; i--) {
      console.log(result[i]);
   }
}
