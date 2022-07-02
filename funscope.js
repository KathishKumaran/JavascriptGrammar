function foo() {
  var x = 1;
  console.log("inside function: ", x);
}

foo(); // Inside function: 1
console.log(x); // Error: x is not defined
