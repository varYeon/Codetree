/**
 * 문자열 -> 불변
 * 1. 배열로 쪼개서 바꾸기
 * 2. 새 문자열 만들어 넣기
 */

// 2.
const fs = require("fs");
let str = fs.readFileSync(0).toString().trim();

const first = str[0];
const second = str[1];

let result = '';

for (let i = 0; i < str.length; i++) {
    if (str[i] === first) result += second;
    else if (str[i] === second) result += first;
    else result += str[i];
}

console.log(result);
