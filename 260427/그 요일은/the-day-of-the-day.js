const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number); // 날짜
const A = input[1]; // 요일

const num_of_days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const day_of_week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const A_idx = day_of_week.indexOf(A); // A의 index가 뭔지 저장
// for (let i = 0; i < 7; i++) {
//     if (day_of_week[i] === A) A_idx = i
// }

let month = m1, days = d1, idx = 0, count = 0;
// idx => 요일

while (true) {
    if (month === m2 && days === d2) break;

    days += 1;
    idx += 1;

    if (days > num_of_days[month]) {
        month += 1;
        days = 1;
    }
    if (idx > 6) {
        idx = 0;
    }

    if (A_idx === idx) count++;
}

console.log(count);
