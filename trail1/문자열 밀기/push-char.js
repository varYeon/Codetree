const fs = require("fs");
let str = fs.readFileSync(0).toString().trim();

/**
 * 덮어쓰며 진행하는 형태는 값이 바뀌어버린 후 덮어씌워질 수 있어서 X
 * for (let i = 0; i < str.length; i++) {
    if (i === str.length - 1) str[i] = str[0];
    else str[i] = str[i + 1];
}
*/
const shifted = str.slice(1) + str[0];

console.log(shifted);
