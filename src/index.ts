let nambo=<string>"sak"
let surname:string | number

const func=(n:number,m:number):number=>{
     return n*m;
}
// console.log(func(6,10));
/*** Custom Datatype */
type Username=string | number
type CustomUser=(n:number,m:number)=>number
let a:Username=12
const func1:CustomUser=(n,m)=>{
    return n*m;
}
// console.log(func1(6,10));
/*Type Aliases*/
/**-------------------- */
/**----------------------------ARRAY IN TYPESCRIPT-------------------------- */
const arr:string[]=["asd","dfgf"];
const arr2:number[]=[1,2,36,];
const arr3:Array<string| number>=["asd"] //for both string and number in array only type declare 2 
// arr2.forEach((i)=>{
       
// })
//Tuple limit the array size as the Example it will not allow the element more than 3
const arr4:[number,number,number]=[12,10,12]
/**--------------------------OBJECT IN TYPESCRIPT------------------------------- */
//type => keyword for declare all the variable define in 1 place 
// In this there is a ? which is optional the value can be or cannot be there at moment 
type Obj={
    weight:number,
    height:number,
    gender?:boolean
}
const obj:Obj={
    weight:20,
    height:20,
}
const obj2:Obj={
    weight:15,
    height:12,
    gender:false
}
//Interface key this is below is its syntax is more similar to class syntax  
interface Obj1{
    weight:number,
    height:number,
    gender:boolean,
}
const user:Obj={
    weight:20,
    height:20,
    gender:false
}
//If you want add more properties to from same interface you can inherit the value 
//In this we inherit and for using the function we pre declare the type of parameter and the return type
interface NewObj extends Obj{
    func:(n:number,m:number)=>number
}
const user2:NewObj={
    weight:20,
    height:23,
    gender:false,
    func(n, m) {
        return n*m
    },
}
// console.log(user2.func(20,30));
/**----------------------------Functions in Typescript----------------------------------------------- */
/**OPTIONAL PARAMETER*/
type FuncType =(n:number,m:number,l?:number)=>number

const values2:FuncType=(n,m,l)=>{
    if(typeof l==="undefined"){
        return n*m
    }
    return n*m*l;
}
// console.log(values2(12,25));

/**DEFAULT PARAMETER*/
const funcValues=(n:number,m:number,l:number=20)=>{
    return m*n*l
}
/**REST OPERATOR */
type ResFuncType=(...m:number[])=>number[]
const restValues:ResFuncType=(...m)=>{
   return m
}
// console.log(restValues(12,12,12,24,36,89,46));
/**-------------------------------------FUNCTION WITH OBJECT---------------------------------------- */

interface ProductType{
    proname:string,
    stock:number,
    price:number,
    photo:string
}

type GetDataType=(product:ProductType)=>void
const getData:GetDataType=(product):void=>{
   console.log(product)
}
let product1:ProductType={
    proname:"MacBook",
    stock:46,
    price:144444,
    photo:"sampleUrl"
}
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
interface UserInfo{
    age:number
}

type Person1 = "john" | "andrew" | "elon" | "jack"

const users:Record<Person1,UserInfo>={
    john:{age:34},
    andrew:{age:25},
    elon:{age:26},
    jack:{age:19}
}