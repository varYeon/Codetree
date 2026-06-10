const fs = require("fs");
let str = fs.readFileSync(0).toString().trim();

for (let i = 0; i < str.length; i++) {
    if (str[i] === 'e') {
        str = str.slice(0, i) + str.slice(i + 1);
        break;
    }
}

console.log(str);
