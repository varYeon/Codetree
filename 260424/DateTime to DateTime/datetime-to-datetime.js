const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

/**
 * 반복문(while) 사용 
 ** 앞 두 문제는 1년 안 혹은 24시간 안으로만 돌아서 시간 초과 x
 ** 해당 문제는 24 시간 + 약 19일로 훨씬 범위가 넓어서 시간 초과 o
 * code :
let day = 11, hour = 11, mins = 11;
let elapsed_time = 0;

while (true) {
    if (day === A && hour === B && mins === C) break;

    mins += 1;
    elapsed_time += 1;

    if (mins == 60) {
        hour += 1;
        mins = 0;
    }
}

console.log(elapsed_time)
*/

const base = (11 * 24 * 60) + (11 * 60) + 11;
const target = (A * 24 * 60) + (B * 60) + C;
const diff = target - base;

console.log(diff < 0 ? -1 : diff);
