const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

/**
 * cf
 * 
 * < 1. (x, y) 's lcm >
 * gcd(최대공약수) -> lcm(최소공배수)
 * use "x * y === gcd * lcm" 
 * 
 * < 2. numbers = [a, b, c ... ] 's lcm >
 * lcm -> Associative Property(결합법칙) 성립
 * (a,b)의 lcm 값과 c와의 lcm을 구하면, (a,b,c)의 lcm과 같음
 */

const getGCD = (a, b) => {
    let x = a;
    let y = b;
    while (y !== 0) {
        let r = x % y;
        x = y;
        y = r;
    }
    return x;
};

const getLCM = (a, b) => {
    return (a * b) / getGCD(a, b);
};

function LCM(n, arr, idx = 1) {
    if (idx === n - 1) {
        return arr[idx];
    }

    return getLCM(arr[idx], LCM(arr, idx + 1));

    // return numbers.reduce((acc, cur) => getLCM(acc, cur), numbers[0]);
}

console.log(LCM(n, numbers));
