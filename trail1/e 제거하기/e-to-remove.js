const fs = require("fs");
let str = fs.readFileSync(0).toString().trim().split('');

for (let i = 0; i < str.length; i++) {
    if (str[i] === 'e') {
        str[i] = '';
        break;
    }
}

console.log(str.join(''));
