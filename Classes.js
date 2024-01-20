console.log("Hi");

class Person {
    constructor(){
        console.log("Constructor is called");
        //state
        this.name='Name';
    }

    show(){
        console.log("Show is called");

        //will give an error
        //Coz in JS there is a global envornment => available to anyone
        //Out of scope => environment and scope is interchangeable

        //methods to surpass this=> apply, call, bind +++
        console.log(`My name is ${this.name}`);
    }
}

const ob1 = new Person();
ob1.show();

const ob2 = new Person();
ob1.show();

console.log(ob1);


//function pointer
const s = ob1.show;

//+++ call 
const obj = {name: 'Abc'};
s.call(obj);
s.call({name: 'Abc'});

//global variable
let name = 'Unique';
const s3 = ob1.show;
s3.call(ob1);


