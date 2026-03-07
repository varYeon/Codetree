const fs = require('fs');
let result = fs.readFileSync(0).toString().trim().split('\n');

const all = Number(result[0]);
const nums = result[1].split(' ').map(Number).sort((a, b) => a - b);

const uniques = [];

for (let i = 0; i < all; i++) {
    // 변수 사용 (직관 up)
    const prev = nums[i - 1];
    const cur = nums[i];
    const next = nums[i + 1];

    if (cur !== prev && cur !== next) {
        uniques.push(cur);
    }
}

if (uniques.length === 0) {
    console.log(-1);
} else {
    /*
  const big = uniques[0];

  for(let i=1; i<uniques.length; i++){
    if(big<=uniques[i]) big = uniques[i];
  }

  console.log(big);
  */

    // 메서드 사용
    console.log(Math.max(...uniques));
}

