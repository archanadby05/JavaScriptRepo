//function acting like a constructor here
function Person(name) {
    this.name = name;
    this.show = function () {
        console.log(this.name);
    }
}
//name is not private here
const ob = new Person('Amit');
ob.show();
console.log(ob.name);

function doThis() {
    console.log(`doThis`);
}
//calling it
doThis();


//IIFI - Immediately Invoked Function Expression
//defining and calling at the same time
(function() {
    console.log(`doThis`);
})();

//defining and calling at the same time but giving it a name
//but because we are calling immmediately we don't need a name
//cpz we are not reusing it
//Anonymous function



(function doThis() {
    console.log(`doThis`);
})();


//the outre most () is the function defn
//and ('Sumit) is calling it
(function(name) {
    console.log(`Name is ${name}`);
})('Sumit');

//removed even the function keyword
((name)=> {
    console.log(`Name is ${name}`);
})('Sumit');

//first (): definition
//second (): calling
const pers = ( () => { //this brace is a closure for the function
    let MyName = '';
    return {
        getName: () => { return MyName;},
        setName: (name) => { MyName = name }
    };
})();

console.log(pers);
pers.setName =('Amitabh');
console.log(pers.getName());



//{
//     getName: () => { return MyName;},
//     setName: (name) => { MyName = name }
// }

// => is the object 

//being called by the function and immediately called


//MyName is now private => you cannot have pers.MyName