const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const arrangeArr = arr.map((num, idx) => {
  return { value: num, index: idx };
}).sort((a, b) => a.value - b.value).map((object, idx) => {
  return { ...object, newIndex: idx + 1 }
}).sort((a, b) => a.index - b.index).map((object) => `${object.newIndex}`);
/**
 * 1. 배열을 값과 인덱스를 담은 객체로 변경
 * 2. 값을 오름차순으로 정렬
 * 3. 정렬 후 인덱스를 객체에 저장
 * 4. 처음 인덱스를 오름차순으로 정렬
 * 5. 마지막 정렬 후 인덱스만 문자열로 변환하여 출력
 * 최종 정렬 객체
[
  { value: 3, index: 0, newIndex: 4 },
  { value: 1, index: 1, newIndex: 1 },
  { value: 6, index: 2, newIndex: 5 },
  { value: 2, index: 3, newIndex: 3 },
  { value: 7, index: 4, newIndex: 6 },
  { value: 30, index: 5, newIndex: 7 },
  { value: 1, index: 6, newIndex: 2 }
]
 */

console.log(arrangeArr.join(' '))
