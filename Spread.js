//spread operator

const numberList = [1, 2, 3, 4];
const largeList = [numberList, 20, 30];

console.log(numberList);
console.log(largeList);

// [ [ 1, 2, 3, 4 ], 20, 30 ] => heterogeneous arrays

const SlargeList = [...numberList, 20, 30];
console.log("Again: ");
console.log(SlargeList);


//addThem was expecting 4 arguments
//array elements were spread and used as individual arguments
function addThem(n1,n2, n3, n4){
    return n1+n2+n3+n4;
}
console.log(addThem(...numberList));


//Example
const cities = ['Nagpur', 'Mumbai'];
const villages = ['Ramtek', 'Umred'];

const allList = [...cities, ...villages];
console.group(allList);


//Opposite of Spread is => Rest 

//Normal way
function sumList(numArray){
    let sum = 0;
    
    for( let num of numArray){
        sum = sum + num;
    }
    return sum;
}

console.log(sumList([1,2,3]));

//Rest operator
function sumList2(...numArray){
    let sum = 0;
    
    for( let num of numArray){
        sum = sum + num;
    }
    return sum;
}

console.log("Allows both");
console.log(sumList([1,2,3]));
console.log(sumList2(1,2,3));

//more than two variables is mandatory and can have as many as we want
//they'll be clubbed together in an array
function something(num1, num2, ...restNumbers){

}