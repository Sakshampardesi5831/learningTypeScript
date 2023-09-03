"use strict";
let nambo = "sak";
let surname;
const func = (n, m) => {
    return n * m;
};
let a = 12;
const func1 = (n, m) => {
    return n * m;
};
// console.log(func1(6,10));
/*Type Aliases*/
/**-------------------- */
/**----------------------------ARRAY IN TYPESCRIPT-------------------------- */
const arr = ["asd", "dfgf"];
const arr2 = [1, 2, 36,];
const arr3 = ["asd"]; //for both string and number in array only type declare 2 
// arr2.forEach((i)=>{
// })
//Tuple limit the array size as the Example it will not allow the element more than 3
const arr4 = [12, 10, 12];
const obj = {
    weight: 20,
    height: 20,
};
const obj2 = {
    weight: 15,
    height: 12,
    gender: false
};
const user = {
    weight: 20,
    height: 20,
    gender: false
};
const user2 = {
    weight: 20,
    height: 23,
    gender: false,
    func(n, m) {
        return n * m;
    },
};
const values2 = (n, m, l) => {
    if (typeof l === "undefined") {
        return n * m;
    }
    return n * m * l;
};
// console.log(values2(12,25));
/**DEFAULT PARAMETER*/
const funcValues = (n, m, l = 20) => {
    return m * n * l;
};
const restValues = (...m) => {
    return m;
};
const getData = (product) => {
    console.log(product);
};
let product1 = {
    proname: "MacBook",
    stock: 46,
    price: 144444,
    photo: "sampleUrl"
};
console.log(getData(product1));
const users = {
    john: { age: 34 },
    andrew: { age: 25 },
    elon: { age: 26 },
    jack: { age: 19 }
};
