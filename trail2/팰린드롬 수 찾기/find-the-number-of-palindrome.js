const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(' ').map(Number);

let cnt = 0;
for (let i = x; i <= y; i++) {
    const num = i.toString().split('');
    let palindrome = true;
    /**
     * tip.
     * 전체 조건 (전체가 다 맞아야 되는 경우) -> true 시작 (예외가 생기면 false)
     * 부분 조건 (하나라도 맞으면 되는 경우) -> false 시작 (성공 사례 발견하면 true)
     */

    for (let j = 0; j < num.length; j++) {
        if (num[j] !== num[num.length - 1 - j]) palindrome = false;
    }

    if (palindrome) cnt++;
}

console.log(cnt);
