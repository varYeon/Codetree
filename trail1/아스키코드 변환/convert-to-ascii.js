const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');

let a = input[0].charCodeAt();
let b = String.fromCharCode(input[1]);

console.log(a, b);
