//function creation without class
const show = function(num){
    console.log("Show is called");
    console.log(`Number is ${num}`);

    return num+2;
}

//Closure 
//addMe will return a function

const addMe = function(num){
    return function(num2){
        return num+num2;
    }
}

show(5); // whatever is inside the {} is now the environment

const num2 = show(5);
console.log(`Number is now ${num2}`);

//num is now fixed
//np one has accessed to it
//some part of the environment is fixed
const addOne = addMe(1);

const numb1=addOne(6);
console.log("Closure example (+1): ");
console.log(numb1);

//again
const addTwo = addMe(2);

const numb2=addTwo(6);
console.log("Closure example (+2): ");
console.log(numb2);

//normal way
const addThem=function(num1, num2){
    return num1+num2;
}

//addOne and addTwo are two different functuion sbecause of different closures

//cryptic - peculiar way 
//Currying
console.log("Currying example:");
console.log(addMe(1)(2));
// [addMe(1)] => addOne(2)
// Will be used in Redux React

//for addOne num1 is a priavte variable