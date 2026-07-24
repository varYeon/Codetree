const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, c, g, h] = input[0].split(' ').map(Number);
const ta = [], tb = [];
for (let i = 1; i <= n; i++) {
    const [taValue, tbValue] = input[i].split(' ').map(Number);
    ta.push(taValue);
    tb.push(tbValue);
}

/**
 * 온도 범위 t
 * 1. t < ta -> C
 * 2. ta <= t <= tb -> G
 * 3. t > tb -> H
 */

let maxWork = 0;

function machine(t, ta, tb) {
    if (t < ta) return c;
    else if (ta <= t && tb >= t) return g;
    else if (t > tb) return h
}

for (let t = 0; t <= 1000; t++) {
    let work = 0;

    for (let i = 0; i < n; i++) {
        work += machine(t, ta[i], tb[i]);
    }

    maxWork = Math.max(maxWork, work);
}

console.log(maxWork);
