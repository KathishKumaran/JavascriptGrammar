# Variables

- Variable allows computers to store and manipulate data in a dynamic fashion

# Difference Between Let,Var and Const

## Var

- The scope of a var variable is functional scope.
- It can be updated and re-declared into the scope.
- It can be declared without initialization.
- It can be accessed without initialization as its default value is “undefined”.

## Let

- The scope of a let variable is block scope.
- It can be updated but cannot be re-declared into the scope.
- It can be declared without initialization.
- It cannot be accessed without initialization, as it returns an error.

## Const

- The scope of a const variable is block scope.
- It cannot be updated or re-declared into the scope.
- It cannot be declared without initialization.
- It cannot be accessed without initialization, as it cannot be declared without initialization.

# Variable Scope in Javascript

- The scope manages the availability of variables or we can also say that it determines the accessibility of variables.

## Types of Scope in Javascript

- Block Scope
- Function Scope
- Local Scope
- Global Scope

## Block Scope

- let and const are the two new important keywords that were introduced by the ES6 and these two keywords provide Block Scope in JavaScript.
- Variables that are declared inside a { } block cannot be accessed from outside the block.

```Javascript
{
 var x = 2;
}
//x can be used here
```

- Variables declared with the var keyword cannot have block scope and they can be declared inside a { } block and can be accessed from outside the block.

```Javascript
{
 let x = 2;
}
//x cannot be used here
```

## Example

```Javascript
function block(){
    let x=1;
    console.log(x);   //1
}block();
console.log(x);   //x is not defined
```

## Output

```Javascript
1
/home/kathish/Desktop/TopicsInJs/block.js:5
console.log(x);
            ^

ReferenceError: x is not defined
    at Object.<anonymous> (/home/kathish/Desktop/TopicsInJs/block.js:5:13)
    at Module._compile (node:internal/modules/cjs/loader:1105:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47
```

## Function Scope

- JavaScript has function scope and each function creates a new scope. Variables defined inside a function are not accessible from outside the function and variables declared with var, let and const are quite similar when declared inside a function.

```Javascript
//var
function myFunction() {
   var firstName = "Krishna";   // Function Scope
}
//let
function myFunction() {
   let firstName = "Krishna";   // Function Scope
}
//const
function myFunction() {
   const firstName = "Krishna";   // Function Scope
}
```

## Local Scope

- Variables declared inside a function become local to the function. Local variables are created when a function starts and deleted when the function is executed. Local variables have Function Scope which means that they can only be accessed from within the function.

```Javascript
// This part of code cannot use firstName

function myFunction() {
 let firstName = "Krishna";
 // This part of code can use firstName
}

//This part of code cannot use firstName
```

## Example

```Javascript
function foo() {
  var x = 1;
  console.log("inside function: ", x);
}

foo(); // Inside function: 1
console.log(x); // Error: x is not defined
```

## Output

```Javascript
inside function:  1
/home/kathish/Desktop/TopicsInJs/funscope.js:7
console.log(x); // Error: x is not defined
            ^

ReferenceError: x is not defined
    at Object.<anonymous> (/home/kathish/Desktop/TopicsInJs/funscope.js:7:13)
    at Module._compile (node:internal/modules/cjs/loader:1105:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47
```

## Global Scope

- Variables declared Globally (outside of any function) have Global Scope and Global variables can be accessed from anywhere in a program. Similar to function scope variables declared with var, let and const are quite similar when declared outside a block.

## Example

```Javascript
// Global scope
var x = 1;
const y = 2;
let z = 3;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 3

function getNo() {
  console.log(x); // x is accessible here
  console.log(y); // y is accessible here
  console.log(z); // z is accessible here
}
getNo(); // 1
```

## Output

```Javascript
1
2
3
1
2
3
```

# Rest and Spread

# Rest

- The rest operator is used to put the rest of some specific user-supplied values into a JavaScript array.

* The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.

* Note: The rest parameter have to be the last argument, as its job is to collect all the remaining arguments into an array.

## Example 1

```Javascript

function friends(fname,snamne,...lname){
    return lname;
}
console.log(friends("raja","vijay","ajith","ramesh","ram"));
```

## Output

```Javascript
[ 'ajith', 'ramesh', 'ram' ]
```

## Example 2

```Javascript
const {fname,sname,...lname}={
    fname:"pradeep",
    sname:"kumar",
    company:"tsdxfg",
    place:"madurai"
}
console.log(lname);
```

## Output

```Javascript
{ company: 'tsdxfg', place: 'madurai' }
```

# Spread

- The spread operator (...) helps you expand iterables into individual elements.

## Example1

```Javascript
const name1=["benny","john","david"];
const name2=["harish",...name1,"jeyaraj"];
console.log(name2);
```

## Output

```Javascript
[ 'harish', 'benny', 'john', 'david', 'jeyaraj' ]
```

## Example 2

```Javascript
//Convert string into individual array items
const name="rajkumar";
console.log([...name]);
```

## Output

```Javascript
[
  'r', 'a', 'j',
  'k', 'u', 'm',
  'a', 'r'
]
```

## Example 3

```Javascript
// In function call
const numbers = [1, 3, 5, 7];

function addNumbers(a, b, c, d) {
  return a + b + c + d;
}

console.log(addNumbers(...numbers));

```

## Output

```Javascript
16
```

## Example 4

```Javascript
//In Object literals
const myNames = ["ram", "kumar"];
const bio = { ...myNames, runs: "yuvaraj" };

console.log(bio);

```

## Output

```Javascript
{ '0': 'ram', '1': 'kumar', runs: 'yuvaraj' }
```

## Example 5

```Javascript
//In Object literals
const myNames = {fname:"ram", lname:"kumar"};
const bio = { ...myNames, runs: "yuvaraj" };

console.log(bio);

```

## Output

```Javascript
{ fname: 'ram', lname: 'kumar', runs: 'yuvaraj' }
```

## Example 6

```Javascript
//In Object literals
const myNames = {fname:"ram", lname:"kumar"};
const bio = { ...myNames,fname:"praveen", runs: "yuvaraj" };

console.log(bio);

```

## Output

```Javascript
{ fname: 'praveen', lname: 'kumar', runs: 'yuvaraj' }
```

# Arrow Function

- Arrow functions were introduced in ES6.
- Arrow functions allow us to write shorter function syntax:
- Arrow functions are best for callbacks or methods like map, reduce, or forEach.

## Syntax

```Javascript
() => {}                                    // Arrow function syntax
let data = () => {}.                        // Assigning arrow function to variable
data();                                     // call arrow function
let data = () => { return 1; }              // return a value
let data = () => 1                          // this is also a return type of value
```

## Example

```Javascript

let x=function(x,y){
    return x*y;
}
//This function can be written as using an arrow function
x=(x,y)=>x*y;

//Arrow function with no argument
let a=()=>console.log("Hello World");
a();

//Arrow function with one argument
let b=(x)=>console.log(x);
b("Hello");

//Multiline arrow function
let sum=(a,b)=>{
    let result=a+b;
    return result;
}
let result1=sum(4,7);
console.log(result1);
```

## Output:

```Javascript
Hello World
Hello
11
```

## Example: this in arrow Function

```Javascript
function student() {
  this.name = "Ram",
  this.rollno = 11,
  this.sayName = function () {
    console.log(this.name);
    let secFunction = () => {
      console.log(this.rollno);
    }
    secFunction();
  }
}
let a = new student();
a.sayName();
```

## Output:

```Javascript
Ram
11
```

# Call Stack:

- The call stack is used by JavaScript to keep track of multiple function calls. It is like a real stack in data structures where data can be pushed and popped and follows the Last In First Out (LIFO) principle.

## Example

```Javascript
function f1(){
    console.log("Hai I am First");
}
function f2(){
    f1();
    console.log("Hai I am Second");
}
f2();
```

## Output

```Javascript
Hai I am First
Hai I am Second
```

## SetInterval

- The setInterval() method repeats a block of code at every given timing event.

## Example

```Javascript
let count = 0;
let interval = setInterval(function () {
  count += 1;

  if (count === 5) {
    clearInterval(interval);
  }
  console.log("Hello World");
}, 2000);
```

## Output

```Javascript
Hello World
Hello World
Hello World
Hello World
Hello World
```

## SetTimeout

- The setTimeout() method allows you to execute a piece of code after a certain amount of time has passed.

## Example

```Javascript
setTimeout(function(){
    console.log("Hello World");
}, 2000);

console.log("I am First");
```

## Output

```Javascript
I am First
Hello World
```

# Event Loop

- JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. This model is quite different from models in other languages like C and Java.

## Stack

- Function calls form a stack of frames.

## Heap

- Objects are allocated in a heap which is just a name to denote a large (mostly unstructured) region of memory.

## Queue

- A JavaScript runtime uses a message queue, which is a list of messages to be processed. Each message has an associated function that gets called to handle the message.
- At some point during the event loop, the runtime starts handling the messages on the queue, starting with the oldest one. To do so, the message is removed from the queue and its corresponding function is called with the message as an input parameter. As always, calling a function creates a new stack frame for that function's use.
- The processing of functions continues until the stack is once again empty. Then, the event loop will process the next message in the queue (if there is one).

## Example1

```Javascript
console.log("Start");

setTimeout(() => {
  console.log("Message");
}, 1000);

console.log("End");
```

## Output

```Javascript
Start
End
Message
```

## Example2

```Javascript
function eventLoop() {
  console.log("Start");

  setTimeout(function cb() {
    console.log("First");
  });

  console.log("Message");

  setTimeout(function cb1() {
    console.log("Second");
  }, 0);

  console.log("End");
}eventLoop();
```

## Output

```Javascript
Start
Message
End
First
Second
```

# Promises

- A promise, in computer science, is basically a concept that handles a value that is to be produced in the future, after an asynchronous operation completes successfully or if it does not, gracefully handles a failure.

## Parts of a promise

- A promise has a STATE and a RESULT

- A promise has 3 states:

  - Pending
  - Fulfilled
  - Rejected

- Pending promises in JavaScript, much like in the real world, is a promise that has been executed but not yet completed and can therefore move to the ‘Fulfilled’ or ‘Rejected’ state.

- Fulfilled promises are resolved or completed, indicating a successful outcome.

- Rejected promises indicate an unsuccessful outcome due to an error or a timeout.

## Handling a promise

- The handler functions .then(), .catch(), .finally() allow functions consuming the promise to be in sync with the executor function when a promise is fulfilled/rejected.

## Example

```Javascript
let promise = new Promise(function (resolve, reject) {
    const x = "kkr";
    const y = "kkr";
    if (x === y) {
      resolve();
    } else {
      reject();
    }
  });
  promise
    .then(function () {
      console.log("Success, You are a kkr");
    })
    .catch(function () {
      console.log("Some error has occurred");
    });
```

## Output

```Javascript
Success, You are a kkr
```

## Example1

```Javascript
//catch
let promise = new Promise(function (resolve, reject) {
  reject("Promise Rejected");
});

promise
  .then(function (successMessage) {
    console.log(successMessage);
  })
  .catch(function (errorMessage) {
    //error handler function is invoked
    console.log(errorMessage);
  });
```

## Output

```Javascript
Promise Rejected
```

## Example2

```Javascript
//catch
let promise = new Promise(function (resolve, reject) {
  throw new Error("Some error has occurred");
});

promise
  .then(function (successMessage) {
    console.log(successMessage);
  })
  .catch(function (errorMessage) {
    //error handler function is invoked
    console.log(errorMessage);
  });
```

## Output

```Javascript
Error: Some error has occurred
  at /home/kathish/Desktop/TopicsInJs/catch2.js:2:11
  at new Promise (<anonymous>)
  at Object.<anonymous> (/home/kathish/Desktop/TopicsInJs/catch2.js:1:15)
  at Module._compile (node:internal/modules/cjs/loader:1105:14)
  at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
  at Module.load (node:internal/modules/cjs/loader:981:32)
  at Function.Module._load (node:internal/modules/cjs/loader:822:12)
  at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
  at node:internal/main/run_main_module:17:47
```

## Example

```Javascript
//then
let promise = new Promise(function (resolve, reject) {
    resolve("kkr");
  });

  promise.then(
    function (successMessage) {
      //success handler function is invoked
      console.log(successMessage);
    },
    function (errorMessage) {
      console.log(errorMessage);
    }
  );
```

## Output

```Javascript
kkr
```

## Example

```Javascript
//then
let promise = new Promise(function (resolve, reject) {
    reject("Promise Rejected");
  });

  promise.then(
    function (successMessage) {
      console.log(successMessage);
    },
    function (errorMessage) {
      //error handler function is invoked
      console.log(errorMessage);
    }
  );
```

## Output

```Javascript
Promise Rejected
```

# asyn function

- An async function is a function declared with the async keyword, and the await keyword is permitted within it. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

## await

- Await: Await function is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result. It only makes the async block wait.

## Example1

```Javascript
async function a() {
    return "first";
  }
  async function b() {
    return Promise.resolve("second");
  }
  a().then(console.log);
  b().then(console.log);
```

## Output

```Javascript
first
second
```

## Example2

```Javascript
async function a() {
    await Math.sqrt(1);
   return "first";
 }
 async function b() {
   return "second";
 }
 a().then(console.log);
 b().then(console.log);
```

## Output

```Javascript
second
first
```

## Example

```Javascript
function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }

  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }

  asyncCall();
```

## Output

```Javascript
calling
resolved
```

## Classes

- Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

## Definig Classes

- Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.

## Class Declaration

- One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class

```Javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

## Hoisting

An important difference between function declarations and class declarations is that while functions can be called in code that appears before they are defined, classes must be defined before they can be constructed. Code like the following will throw a ReferenceError:

```Javascript
const p = new Rectangle(); // ReferenceError

class Rectangle {}
```

## Class Expressions

- A class expression is another way to define a class. Class expressions can be named or unnamed. The name given to a named class expression is local to the class's body. However, it can be accessed via the name property.

```Javascript
// unnamed
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// output: "Rectangle"

// named
let Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// output: "Rectangle2"
```

## Example

```Javascript
//class instance
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
```

## Output

```Javascript
//static method
name: kathish, city: tenkasi
Address { name1: 'kathish', city: 'tenkasi' }
```

## Example

```Javascript
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
```

## Output

```Javascript
Student { name2: 'kathish', mark: 63 }
name: pradeep,mark: 75
```

## Example

```Javascript
//super keyword
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
```

## Output

```Javascript
I am Kathish Kumaran, I am living in  Tenkasi, and My age is 23.
```

# Loops

- The primary purpose of a loop is to iterate over one or a set of multiple statements. Iterating is commonplace in software development – it means to repeat an action a multiple number of times.

## Syntax

```Javascript
for(initialize;condition;increment)
```

## Example

```Javascript
let arr=[1,4,6,65,98,34];
let sum=0;
for(i=0;i<arr.length;i++){
    sum+=arr[i];
}console.log(sum);
```

## Output

```Javascript
208
```

## Example

```Javascript
//nested for
for(i=0;i<3;i++){
    for(j=0;j<3;j++){
        console.log(i,j);
    }
}
```

## Output

```Javascript
0 0
0 1
0 2
1 0
1 1
1 2
2 0
2 1
2 2
```

## Example

```Javascript
//continue
for(let i=0;i<8;i++){
    if(i==2)
    continue;
    console.log(i);
}
```

## Output

```Javascript
0
1
3
4
5
6
7
```

## Example

```Javascript
//break
for(let i=0;i<8;i++){
    if(i==4)
    break;
    console.log(i);
}
```

## Output

```Javascript
0
1
2
3
```

## Example

```Javascript
let a=0;
outer:for(i=0;i<5;i++){
    inner:for(j=0;j<5;j++){
        a++;
        if(i==2)
        break outer;
    }
}console.log(a);
```

## Output

```Javascript
11
```

## Example

```Javascript
let a=0;
outer:for(i=0;i<5;i++){
    inner:for(j=0;j<5;j++){
        a++;
        if(i==2)
        break inner;
    }
}console.log(a);
```

## Output

```Javascript
21
```

# While Loop

- A while loop will iterate for an indefinite number of times until the specified
  condition (there is only one) evaluates to false. At which point your loop will stop
  and execution flow will resume.

## Example

```Javascript
let a=0;
while(a<10){
    a++;
    if(a==3)
    break;
    console.log(a);
}
```

## Output

```Javascript
1
2
```

## For..Of

## Example

```Javascript
let a="ramkumar";
for(value of a)
console.log(value);

let b=[1,2,4,57];
for(value of b)
console.log(value);

let c={x:1,y:2,z:3};
for(key of Object.keys(c))
console.log(key);
for(value of Object.values(c))
console.log(value);
for(entry of Object.entries(c))
console.log(entry);

// for(value of c)
// console.log(value); //Error
```

## Output

```
r
a
m
k
u
m
a
r
1
2
4
57
x
y
z
1
2
3
[ 'x', 1 ]
[ 'y', 2 ]
[ 'z', 3 ]
```

## For...in

## Example

```Javascript
let c={x:1,y:2,z:3};
for(let value in c)
console.log(value,c[value]);
```

## Output

```Javascript
x 1
y 2
z 3
```

# Array

- Many of the Array.\* methods are iterators. Array methods are attached to Array.prototype property. This means you can execute them directly from array object like array.forEach() or directly from array’s literal value like: [1,2,3].forEach();

## array.prototype.sort()

- The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of values.

## Example

```Javascript
const array1 = [4,6,5,1,12,3];
//array1.sort();
array1.sort((a,b)=>a-b);
console.log(array1);
```

## Output

```Javascript
[ 1, 3, 4, 5, 6, 12 ]
```

## Example

```Javascript
let fruits=[{name:"banana",count:10},
{name:"orange",count:15},
{name:"apple",count:3},
{name:"grapes",count:56}];
let result=(a,b)=>a.count-b.count;
let endresult=fruits.sort(result)
console.log(endresult);
```

## Output

```Javascript
[
  { name: 'apple', count: 3 },
  { name: 'banana', count: 10 },
  { name: 'orange', count: 15 },
  { name: 'grapes', count: 56 }
]
```

## array.forEach

- The forEach method will execute a function for every item in the array. Each iteration step receives 3 arguments value, index, object.

```Javascript
let fruits=["banana","grapes","apple","orange"];
fruits.forEach(function(item,index,object){
    console.log(index,item,object);
});
```

## Output

```Javascript
0 banana [ 'banana', 'grapes', 'apple', 'orange' ]
1 grapes [ 'banana', 'grapes', 'apple', 'orange' ]
2 apple [ 'banana', 'grapes', 'apple', 'orange' ]
3 orange [ 'banana', 'grapes', 'apple', 'orange' ]
```

## array.filter

- The filter() method creates a new array with all elements that pass the test implemented by the provided function.
- filter() does not change the original array.

```Javascript
Return value : new array consisting only of items that passed a condition.
```

```Javascript
let a=[1,3,4,67,89,8];
let res=a.filter((value)=>value<10);
console.log(res);
```

## Output

```Javascript
[ 1, 3, 4, 8 ]
```

## array.map

- The map() method calls the provided function once for each element in an array, in order.
- map() does not change the original array.

```Javascript
Return value: a copy of the original array with modified values (if any.)
```

## Example

```Javascript
let a=[3,4,5,6,58,9];
let result=a.map((value)=>value+10);
console.log(result);
```

## Output

```Javascript
[ 13, 14, 15, 16, 68, 19 ]
```

## array.flat

- The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

```Javascript
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());

const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(3));                  //sub array count
```

## Output

```Javascript
[ 0, 1, 2, 3, 4 ]
[ 0, 1, 2, 3, 4 ]
```

# Objects
* In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.

```Javascript
const myCar=new Object();
myCar.make="ford";
myCar.model="mustang";
myCar.year=1990;
console.log(myCar);
```
## Output
```Javasript
{ make: 'ford', model: 'mustang', year: 1990 }
```
## Using a constructor function
* you can create an object with these two steps:

* Define the object type by writing a constructor function. There is a strong convention, with good reason, to use a capital initial letter.
* Create an instance of the object with new.
## Example1
```Javascript
function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  const benny = new Person("Benny", 33, 'M');
  const john = new Person("John", 39, 'M');
    console.log(benny);
```
## Output
```Javascript
Person { name: 'Benny', age: 33, sex: 'M' }
```
## Example2
```Javascript
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
  
```
## Output
```Javascript
Hello, my name is John
Hello, my name is Ben
```
## Example3
```Javascript
//deleting
const myobj = new Object();
myobj.a = 5;
myobj.b = 12;

delete myobj.a;
console.log ('a' in myobj);

```
## Output
```Javascript
false
```
## Example4
```Javascript
let school = {
  name: "Vivekananda School",
  location: "Delhi",
  established: "1971",
  displayInfo: function () {
    console.log(
      `${school.name} was established in ${school.established} at ${school.location}`
    );
  },
};
school.displayInfo();

```
## Output
```Javascript
Vivekananda School was established in 1971 at Delhi
```