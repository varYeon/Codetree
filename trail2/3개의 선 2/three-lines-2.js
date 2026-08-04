const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
// [ [ 1, 7 ], [ 0, 0 ], [ 1, 2 ], [ 2, 0 ], [ 1, 4 ], [ 3, 4 ] ]

// 가로/세로 직선 3개로 모든 좌표 지남 -> 1 출력 / 아님 -> 0 출력 => so hard
let pass = false;

const situation = [];
for (let i = 0; i <= 10; i++) {
    situation.push({
        parallel: 'x',
        location: i
    });
    situation.push({
        parallel: 'y',
        location: i
    });
}
/* [  { parallel: 'x', location: 1 },
  { parallel: 'y', location: 1 }, ... ] */

for (let i = 0; i < situation.length; i++) {
    for (let j = i + 1; j < situation.length; j++) {
        for (let k = j + 1; k < situation.length; k++) {
            const lineI = situation[i]; // { parallel: 'x', location: 1 }
            const lineJ = situation[j];
            const lineK = situation[k];

            let combinationPass = true;

            for (let a = 0; a < n; a++) {
                const onLineI = (lineI.parallel === 'x' && lineI.location === points[a][0])
                    || (lineI.parallel === 'y' && lineI.location === points[a][1]);

                const onLineJ = (lineJ.parallel === 'x' && lineJ.location === points[a][0])
                    || (lineJ.parallel === 'y' && lineJ.location === points[a][1]);

                const onLineK = (lineK.parallel === 'x' && lineK.location === points[a][0])
                    || (lineK.parallel === 'y' && lineK.location === points[a][1]);

                if (!(onLineI || onLineJ || onLineK)) {
                    combinationPass = false;
                    break;
                }
            }

            if (combinationPass) pass = true;
        }
    }
}

if (pass) console.log(1);
else console.log(0);
