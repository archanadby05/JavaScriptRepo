console.log("Hello !!");

var name = "MyName";
let city="Nagpur";
const n=66;
console.log(name);
console.log(city);
console.log(n);

// A valid JS Object, but doesn't make sense
const myObj = {};


const Obj = {
    name: 'Archana',
    age:45,
    city: 'Nagpur',   // convention to add comma at last as well
}

console.log(Obj.name);    // we don't know the class of this object
console.log(Obj); 

const label = `This is a sample ${Obj.name}`;
console.log(label);