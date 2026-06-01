const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let countEE = 0;
let countEB = 0;

// includes : 포함 갯수 x, 포함 여부에 따른 T/F 반환
for (let i = 0; i < input.length - 1; i++) {
  let target = input.slice(i, i + 2);
  
  if (target === 'ee') countEE++;
  if (target === 'eb') countEB++;
}

console.log(countEE, countEB);
