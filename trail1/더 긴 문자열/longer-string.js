const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

const AstrLength = input[0].length;
const BstrLength = input[1].length;

if (AstrLength < BstrLength) console.log(input[1], input[1].length);
else if (AstrLength === BstrLength) console.log('same');
else console.log(input[0], input[0].length);
