const fs = require("fs");
let str = fs.readFileSync(0).toString().trim();

const l = str.length;

for (let i = 0; i <= l; i++) {
    console.log(str);

    str = str[l - 1] + str.slice(0, l - 1);
}
