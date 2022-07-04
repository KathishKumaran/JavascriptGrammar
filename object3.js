const Manager = {
    name: "John",
    age: 27,
    job: "Software Engineer"
  }
  const Intern = {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern"
  }
  
  function sayHi() {
    console.log(`Hello, my name is ${this.name}`)
  }
  

  Manager.sayHi = sayHi;
  Intern.sayHi = sayHi;
  
  Manager.sayHi();
  Intern.sayHi(); 
  