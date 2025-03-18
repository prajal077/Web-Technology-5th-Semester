//creating objects in js

const person = {
    name : "prajal", 
    age : 20
};

console.log(person)

// or we can also do in single line

const std = { name : "aalu", age : 22}
console.log(std);

// accessing the value of abjects

console.log(std.age)
console.log(person.name)

// passing the value in the existing objects

std.class = "bachelor"
console.log(std)

// modifying the values of or in the object

// 1. replacing the value of existing key

let obj = {
    name : "object", 
    age : "2 seconds", 
    hobby : "singing"
};

console.log(obj)

obj.hobby = "dancing";
console.log(obj)

// 2. deleting the key of object

delete obj.age
console.log(obj)