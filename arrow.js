
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