const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const personLines = input.slice(1, n + 1);

class PersonInfo {
    constructor(name, streetNum, region) {
        this.name = name;
        this.streetNum = streetNum;
        this.region = region;
    }
}

// 인스턴스 배열 만들기
const persons = personLines.map(line => {
  const [name, streetNum, region] = line.split(' ');
  return new PersonInfo(name, streetNum, region);
});
// console.log(persons)

const names = persons.map((person)=>person.name).sort();
// console.log(names)

const target = persons.find(person => person.name === names[n-1]);

console.log(`name ${target.name}
addr ${target.streetNum}
city ${target.region}`);
