class Detail {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  method() {
    return `I am ${this.name}, I am living in  ${this.address}`;
  }
}
class Person extends Detail {
  constructor(name, address, age) {
    super(name, address);
    this.age = age;
  }
  method() {
    console.log(`${super.method()}, and My age is ${this.age}.`);
  }
}
let person1 = new Person("Kathish Kumaran", "Tenkasi", 23);

person1.method();
