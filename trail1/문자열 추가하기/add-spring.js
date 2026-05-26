const fs = require("fs");
let str = fs.readFileSync(0).toString().trim();

const editStr = str + 'Hello';

console.log(editStr);
