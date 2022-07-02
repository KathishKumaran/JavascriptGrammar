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
* JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. This model is quite different from models in other languages like C and Java.
## Stack
* Function calls form a stack of frames.
## Heap
* Objects are allocated in a heap which is just a name to denote a large (mostly unstructured) region of memory.
## Queue
* A JavaScript runtime uses a message queue, which is a list of messages to be processed. Each message has an associated function that gets called to handle the message.
* At some point during the event loop, the runtime starts handling the messages on the queue, starting with the oldest one. To do so, the message is removed from the queue and its corresponding function is called with the message as an input parameter. As always, calling a function creates a new stack frame for that function's use.
* The processing of functions continues until the stack is once again empty. Then, the event loop will process the next message in the queue (if there is one).

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