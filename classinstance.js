class Address {
  constructor(name1, city) {
    this.name1 = name1;
    this.city = city;
  }
  class1() {
    console.log("name: " + this.name1 + ", city: " + this.city);
  }
}
let detail = new Address("kathish", "tenkasi");
detail.class1();
console.log(detail);
