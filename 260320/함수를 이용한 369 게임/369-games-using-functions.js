function game369(A, B) {
    let count = 0;

    for (let i = A; i <= B; i++) {
        if (i % 3 === 0) {
            count++;
            continue;
        }

        const iStr = String(i);
        if (iStr.includes('3') || iStr.includes('6') || iStr.includes('9')) count++;

    }

    return count;
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);

console.log(game369(A, B));
