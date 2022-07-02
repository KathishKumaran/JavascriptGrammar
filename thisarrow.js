function student() {
  (this.name = "Ram"),
    (this.rollno = 11),
    (this.sayName = function () {
      console.log(this.name);
      let secFunction = () => {
        console.log(this.rollno);
      };
      secFunction();
    });
}
let a = new student();
a.sayName();
