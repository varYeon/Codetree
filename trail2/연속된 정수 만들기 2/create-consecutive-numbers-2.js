const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].split(" ").map(Number);

let cnt = 0;

while (true) {
    arr.sort((a, b) => a - b);

    let gap1 = Math.abs(arr[1] - arr[0]);
    let gap2 = Math.abs(arr[2] - arr[1]);

    if (gap1 === 1 && gap2 === 1) {
        break;
    }

    if (gap1 === 1) {
        // 오른쪽 끝에 있는걸 이동
        arr[2] = arr[1] + 1;
    } else {
        // 왼쪽 끝에 있는걸 이동
        arr[0] = arr[1] - 1;
    }

    cnt++;
}

console.log(cnt);
