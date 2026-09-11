const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim().split(' '));

let grade = '';

if(n>=90) grade = 'A';
else if(n>=80) grade = 'B';
else if(n>=70) grade = 'C';
else if(n>=60) grade = 'D';
else grade = 'F';

console.log(grade)
