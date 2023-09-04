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
//Pick<Type,Keys> -> Pick used getting special Values 
/*interface OrderInfo{
    readonly id:string,
    user:string,
    city:string,
    country:string,
    status:string,
}
type ShippingInfo=Pick<OrderInfo,"city" | "country" |"user">
//Omit<Type,keys> -> inverse of pick Enter the interface in which values are declare and remove it for next interface
type Random=Omit<OrderInfo,"city">*/
//Exclude<Type,ExcludedUnion> -> It will remove the type  which is not needed
/*type MyUnion=string|number|boolean
type Random=Exclude<MyUnion,boolean>*/
//Extract<Type,Union> -> It will include the only property which is needed which is enter 
/*type MyUnion=string|number|boolean
type Random=Extract<MyUnion,boolean>*/
//NonNullableType<Type> -> It will remove null and undefined from the type
/*type MyUnion=string|number|boolean|null|undefined
type Random=NonNullable<MyUnion>*/
// Parameters<Type> ->It will define the Function parameters
/*const myfunc=(a:number,b:number)=>{
   console.log(a+b);
}
type Random =Parameters<typeof myfunc> //=> when we hover it will give parameter info in array form */
// ConstructorParameters<Type> => it is similar Parameters difference is it will show constructor parameter
/*class SampleClass{
    constructor(public s:string,public t:string){}
}
type Random=ConstructorParameters<typeof SampleClass>*/
// ReturnType<Type> => it will tell the Return type of the function which will import from another components
/*const myfunc=(a:number,b:number)=>{
    return a+b
 }
 type MyFunc=ReturnType<typeof myfunc>*/
// InstanceType<Type> -> it is similar to constructor parameter 
/*class SampleClass{
    constructor(public s:string,public t:string){}
}
type Random =InstanceType<typeof SampleClass>

const instanceUsers:Random={
    s:"4441",
    t:"23"
}*/
/**----------------------------------TYPESCRIPT GENERICS-----------------------------------------------*/
// BASIC SYNTAX ->It's Link a placeholder in which will detect the what value is return and it will set accoding to that  
/*const Gfunc= <CustomType>(n:CustomType):CustomType=>{
   return n;
}
let ans=Gfunc(20);
let ans2=Gfunc("20");*/
// USING OBJECT 
/*type Person={
    name:string,
    age:number
}
const person1:Person={
    name:"saksham",
    age:24
}
const Gfunc= <CustomType>(n:CustomType):CustomType=>{
    return n;
 }
const ans=Gfunc(person1)
//Hover over function and is you want set the hard coded value  as per below Syntax we hard Coded to tell that custom type is Object
 const ans1=Gfunc<Person>(person1)*/
//We Can Also use Multiple Generics function below
const M_Gfunc = (n, o) => {
    return { n, o };
};
const ans = M_Gfunc(20, "Lol");
const users = [
    {
        name: "saksham",
        age: 24,
    },
    {
        name: "levi",
        age: 56
    },
    {
        name: "john",
        age: 40
    }
];
const filterByPeople = (arr, property, value) => {
    return arr.filter((item) => item[property] === value);
};
const filterByName = filterByPeople(users, "name", "saksham");
const filterByAge = filterByPeople(users, "age", 56);
console.log(filterByAge);
