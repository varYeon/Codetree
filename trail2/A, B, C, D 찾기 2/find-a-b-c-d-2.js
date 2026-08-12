const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const numbers = input[0].split(' ').map(Number).sort((a, b) => a - b);
// [ 3,  3,  4,  6,  7,  7, 7, 10, 10, 10, 11, 13, 14, 14, 17 ]

for (let a = 1; a <= 40; a++) {
    for (let b = a; b <= 40; b++) {
        for (let c = b; c <= 40; c++) {
            for (let d = c; d <= 40; d++) {
                const calcul = [a, b, c, d,
                    a + b, b + c, c + d, d + a, a + c, b + d,
                    a + b + c, a + b + d, a + c + d, b + c + d,
                    a + b + c + d].sort((a, b) => a - b);

                let match = true;
                for (let i = 0; i < 15; i++) {
                    if (calcul[i] !== numbers[i]) {
                        match = false;
                        break;
                    }
                }

                // if (!match) continue; // 없어도 d로 넘어가는 구조
                if (match) {
                    console.log(a, b, c, d);
                    process.exit(0)
                }
            }
        }
    }
}
