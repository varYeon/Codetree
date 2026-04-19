const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rawStudentData = input.slice(1, n + 1);
// console.log(rawStudentData);
//[ 'lee 80 70 50 ', 'kim 70 60 70', 'june 70 80 50', 'park 80 70 60' ]

class Scores {
  constructor(name, korean, math, english) {
    this.name = name;
    this.korean = korean;
    this.math = math;
    this.english = english;
  }
}

const studentDate = rawStudentData.map((line) => {
  const [name, korean, math, english] = line.split(' ');
  return new Scores(name, Number(korean), Number(math), Number(english));
}).sort((a, b) => {
  if (a.korean !== b.korean) return b.korean - a.korean;
  // return을 사용함으로써 국어 성적이 다를 땐 국어만 비교하고 sort 함수를 빠져나옴
  // 만약 return이 없다면, 계산만 하고 어디에도 값을 저장하지 않음, 반환값 없으므로 undefined
  if (a.math !== b.math) return b.math - a.math;
  if (a.english !== b.english) return b.english - a.english;
})

// console.log(studentDate)
/**
 [
  Scores { name: 'park', korean: 80, math: 70, english: 60 },
  Scores { name: 'lee', korean: 80, math: 70, english: 50 },
  Scores { name: 'june', korean: 70, math: 80, english: 50 },
  Scores { name: 'kim', korean: 70, math: 60, english: 70 }
]
 */

const studentDateString = studentDate.map(student => `${student.name} ${student.korean} ${student.math} ${student.english}`)

// console.log(studentDateString)
// [ 'park 80 70 60', 'lee 80 70 50', 'june 70 80 50', 'kim 70 60 70' ]

console.log(studentDateString.join('\n'));
