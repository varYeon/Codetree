const fs = require("fs");
let inputs = fs.readFileSync(0).toString().trim().split('\n');

let a = Number(inputs[0]);
let nums = inputs[1].split(' ').map((a) => Number(a));

let b = nums[0];
let c = nums[1];
let d = nums[2];
let e = nums[3];

if (a > b) console.log(1);
else console.log(0);

if (a > c) console.log(1);
else console.log(0);

if (a > d) console.log(1);
else console.log(0);

if (a > e) console.log(1);
else console.log(0);
