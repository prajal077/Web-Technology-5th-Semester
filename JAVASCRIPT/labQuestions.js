//welcome to js
console.log("welcome to JS");

// question 2
let num = 10;
let name = "prajal";
var n = 12;
let bool = false;
let und = undefined;  // Use `undefined` instead of an empty string
let nulla = null;

console.log(typeof num);
console.log(typeof name);
console.log(typeof n);
console.log(typeof bool);
console.log(typeof und);
console.log(typeof nulla);

//Question 3
if (true) {
    let nu = 20;  //only block scope
    console.log(nu);
}
//console.log(nu); since let is block scope, it is not executed

if (true) {
    var v = 30;  //global scope
    console.log(v);
}
console.log(v); //since var is global scope, this is also executed

if (true) {
    const c = 55;  //block scope
    console.log(c);
}
//console.log(c); since const is also block scope, this is not executed

//Question 4

let n1 = 10;
let n2 = 20;

console.log(n1+n2);
console.log(n1-n2);
console.log(n1/n2);
console.log(n1*n2);
console.log(n1%n2);