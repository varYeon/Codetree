const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

const num_of_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const day_of_week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

/* 1차 시도 : 일방향
let month = m1;
let days = d1;
let index = 0; // 요일

while (true) {
    // 주의 : 논리가 어긋나 숫자가 의도대로 올라가지않으면 if문에 걸리지 않아 '무한 루프'
    if (month === m2 && days === d2) break;

    days += 1;
    index += 1;
    // index = (index + 1) % 7;

    if (days > num_of_days[month]) {
        month += 1;
        days = 1;
    }

    if (index > 6) index = 0;
}
*/

/**
 * 2차 시도 :
 * 두 날짜의 1/1과의 차이를 구하고
 * 그 값을 빼서 두 날짜 사이의 차이를 구함
 * 두 날짜의 차이를 직접적으로 구하려면 앞선 날짜 찾기(+/- 인지 몰라서) 등 로직이 복잡
 */
function distance(month, day) {
    let total = 0;
    let m3 = 1;
    let d3 = 1;

    while (true) {
        if (m3 === month && d3 === day) break;

        total += 1;
        d3 += 1;

        if (d3 > num_of_days[m3]) {
            m3 += 1;
            d3 = 1;
        }
    }

    return total;
}

const base = distance(m1, d1);
const target = distance(m2, d2);
const diff = target - base;
const idx = diff < 0 ? 7 - Math.abs(diff % 7) : diff % 7;

console.log(day_of_week[idx])
