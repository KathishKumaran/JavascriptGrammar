class Student {
  constructor(name2, mark) {
    this.name2 = name2;
    this.mark = mark;
  }
  static staticMethod(name2, mark) {
    console.log(`name: ${name2},mark: ${mark}`);
  }
}
let detail1 = new Student("kathish", 63);
console.log(detail1);
Student.staticMethod("pradeep", 75);
