const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rect1 = input[0].split(' ').map(Number);
const rect2 = input[1].split(' ').map(Number);

const grid = Array.from({ length: 2000 }, () => new Array(2000).fill(0))

// num : first rect = 1, second rect = 2
function markRect(rect, num) {
  const [x1, y1, x2, y2] = rect;

  for (let x = x1; x < x2; x++) {
    for (let y = y1; y < y2; y++) {
      grid[x + 1000][y + 1000] = num;
    }
  }
}

markRect(rect1, 1);
markRect(rect2, 2);

let minX = 2000, maxX = -2000;
let minY = 2000, maxY = -2000;
let hasOne = false; // 예외 처리 : 1이 존재하는지 여부를 체크할 변수

for (let x = 0; x < grid.length; x++) {
  for (let y = 0; y < grid.length; y++) {
    if (grid[x][y] === 1) {
      hasOne = true;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

let area = 0

if (hasOne) {
  const areaRow = maxX - minX + 1;
  const areaColumn = maxY - minY + 1;
  /** +1이 필요한 이유
   * markRect은 '면적/점'이 아닌 칸(cell)을 세기 때문에 maxX/maxY 는 하나 적게 나온다
   * 즉, 2~3 사이의 면적은 인덱스 2가 대표하게 된다
   * 예를 들어, 2~7이라고 하면 2~3, 3~4, 4~5, 5~6, 6~7 5칸이 1로 채워지고, 인덱스는 2~6까지만 존재하게 되는 것
   * 따라서 maxX/maxY 의 좌표를 찾을 때 7을 찾으려고 하는 의도와 다르게 7칸이지만 인덱스는 6까지만 존재하는 거
   */
  area = areaRow * areaColumn;
} else {
  area = 0;
}

console.log(area)

