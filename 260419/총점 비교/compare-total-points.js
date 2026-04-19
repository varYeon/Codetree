const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const studentData = input.map(line => line.split(' '));
// console.log(studentData)
/**
 * [
  [ 'lee', '50', '60', '70', '' ],
  [ 'kim', '70', '80', '70' ],
  [ 'park', '80', '70', '55' ]
]
 */

class Scores {
  constructor(name, one, two, three) {
    this.name = name;
    this.one = one;
    this.two = two;
    this.three = three;
  }
}

const students = studentData.map(line => {
  const [name, one, two, three] = line;
  return new Scores(name, Number(one), Number(two), Number(three));
}).sort((a, b) => {
  const totalA = a.one + a.two + a.three;
  const totalB = b.one + b.two + b.three;

  return totalA - totalB;
});

// console.log(students);
/**
 * [
  Scores { name: 'lee', one: 50, two: 60, three: 70 },
  Scores { name: 'park', one: 80, two: 70, three: 55 },
  Scores { name: 'kim', one: 70, two: 80, three: 70 }
]
 */

const studentsString = students.map(student => `${student.name} ${student.one} ${student.two} ${student.three}`);
// console.log(studentsString);
// [ 'lee 50 60 70', 'park 80 70 55', 'kim 70 80 70' ]

console.log(studentsString.join('\n'));
