const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [prod2_id, code2] = input[0].split(' ');

class Product {
    constructor(id, code) {
        this.id = id;
        this.code = code;
    }
}

const product1 = new Product("codetree", 50);
const product2 = new Product(prod2_id, code2);

console.log(`product ${product1.code} is ${product1.id}`)
console.log(`product ${product2.code} is ${product2.id}`)
