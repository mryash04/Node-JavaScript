"use strict";

const array1 = ["Mark", "Williamsoeseseses", "Well", "Done"];

const array2 = array1.splice(2, 2, "Man");

console.log(array1);

const array3 = [2, 3, 6, 10, 15, 20];

const array4 = array3.find(value => value > 6);

console.log(array4);

const array5 = array3.filter(value => value > 10);

console.log(array5);

let x;

console.log(x);
console.log(typeof(x));

let a = null;

console.log(a);
const data = (null == undefined);

console.log(data);

const data1 = 1e5;

console.log(data1);

 function arrayFind(){
     for(let i = 0; i < array3.length; i++){
     console.log(array3[i]);
}
};

arrayFind();

for(let i in array3){
    console.log(array3);
}

const array6 = array3.find(value => console.log(value));

const array7 = array3.reduce((accum, curValue) =>{
    return `${accum} * ${curValue}`;
});

console.log(array7);

console.log(Array.isArray(array3));