const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const strInfo = input[0].split(' ');
const str = strInfo[0].split('');
const q = strInfo[1];

for (let i = 1; i <= q; i++) {
    const mission = input[i].split(' ');

    if (mission[0] === "1") {
        const a = mission[1] - 1;
        const b = mission[2] - 1;

        const aStr = str[a];
        const bStr = str[b];
        // 저장해두지 않으면, b번째에 a번째 문자를 넣을 때 이미 b번째로 바뀐 문자가 들어감

        str[a] = bStr;
        str[b] = aStr;
    } else {
        const x = mission[1];
        const y = mission[2];

        for (let j = 0; j < str.length; j++) {
            if (str[j] === x) str[j] = y;
        }
    }

    console.log(str.join(''));
}
