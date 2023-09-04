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
/**-------------------TYPESCRIPT CLASSES----------- */
/**-------------------TYPE ASSERTION------------------------- */
/*Accessing Element*/
// 1:- const btn=document.getElementById("btn")!;
// const btn=<HTMLElement> document.getElementById("btn");
// const btn=document.getElementById("btn") as HTMLElement
// btn.onclick
/**Accessing Tag*/
// const myimg=document.getElementById("myimg") as HTMLImageElement ;
// myimg.src
/*const form=document.getElementById("myform") as HTMLFormElement
const input=document.getElementById("myinput") as HTMLInputElement

form.onsubmit=(e)=>{
   e.preventDefault();
   const ans=Number(input.value);
   const h2=document.createElement("h2");
   h2.textContent=String(ans+20);
   const body=document.querySelector("body") as HTMLBodyElement
   body.append(h2);
}*/
/*interface Person{
  name:string,
  email:string,
//   [key:string]:string //Dynamic Key
}*/
/*const personDetail:Person={
   name:"saksham",
   email:"sakshampardesi5831@gmail.com"
}*/
//Suppose we don't know the types comes from 3rd party Api then the syntax for accessing is 
/*let key="name"
personDetail[key as keyof typeof personDetail]*/
// const getName=():string=>{
//     return personDetail.name;
// }
// const getEmail=():string=>{
//    return personDetail.email
// }
// // const getPersonData=(key:"name"|"email")=>{
// //     return personDetail[key];
// // }
/*const getPersonData=(key:keyof Person)=>{
    return personDetail[key];
}
getPersonData("email")**/
/**----------------TYPESCRIPT UTILITY CLASSES--------------------------------------------- */
//Partial<User> this will give the optional property to every when is used to another type 
/*type User={
    name:string,
    email:string
}
type User2=Partial<User>*/
//Required<Type> -opposite to Partial 
/*type User={
    name:string,
    email:string
}

const Person1:Required<User>={
    name:"saksham",
    email:'sakshampardesi5831@gmail.com'
}*/
//<Readonly<User> -> makes every property readonly
/*type User={
    name:string,
    email:string
}
const Person1:Readonly<User>={
    name:"saksham",
    email:'sakshampardesi5831@gmail.com'
}*/
// Record<Key,type>
/*type User={
    name:string,
    email:string
}
type User2=Record<"name"|"email",string>*/
//EXAMPLE OF RECORD
/*interface UserInfo{
    age:number
}

type Person1 = "john" | "andrew" | "elon" | "jack"

const users:Record<Person1,UserInfo>={
    john:{age:34},
    andrew:{age:25},
    elon:{age:26},
    jack:{age:19}
}*/
//Pick<Type,Keys>
