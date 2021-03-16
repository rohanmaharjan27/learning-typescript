export {}

// let message = "Hello World!";

// console.log(message);

// let isBeginner:boolean=true;
// let age:number=23;

// let name:string="Rohan";

// let value : string | boolean = true;

// let list1: number[]=[1,2,3];
// let list2:Array<number>=[1,2,3];

// // {0,1,2};
// enum Color {Red,Green,Blue};
// // {5,6,7}
// enum Color2 {Red=5,Green,Blue};

// let c: Color= Color.Green;
// let c2: Color2= Color2.Green;

// console.log(c,c2);

// let randomValue:any=10;
// randomValue=true;
// randomValue="Rohan";

// let myVariable:unknown=10;

// function hasName(obj:any):obj is {name:string}{
//     return !!obj && typeof obj==="object" && "name" in obj
// }

// if (hasName(myVariable)){
// console.log(myVariable.name)
// }

// // (myVariable as string).toUpperCase();

// // order has to match and can only have fixed number of values
// let person1: [string,number]=['Chris',22];

// let sentence:string=`My name is ${name}
// My age is ${age}
// I am a beginner in TypeScript`;

// // required parameters always first in order
// function add (num1:number,num2?:number):number{
//     return num2 ? num1+num2: num1;
// }

// function add2 (num1:number,num2:number=10):number{
//     return num2 ? num1+num2: num1;
// }

// interface person {
//     firstName:string,
//     middleName?:string,
//     lastName:string
// }
// function fullName(person:person){
//     console.log(`${person.firstName} ${person.lastName}`)
// }

// fullName({firstName:"Rohan",lastName:"Maharjan"});

// class Employee{
//     public employeeName:string;

//     constructor(name:string){
//         this.employeeName=name;
//     }
    
//     greet(){
//         console.log(`Good Morning ${this.employeeName}`);
//     }
// }

// let emp1=new Employee("Rohan");

// console.log(emp1.employeeName);
// emp1.greet();

// class Manager extends Employee{
//     constructor(managerName:string){
//         super(managerName);
//     }

//     delegateWork(){
//         // if employeeName is protected it can be used here.
//         console.log(`Manager delegating tasks ${this.employeeName}`);
//     }
// }

// let m1= new Manager("Maharjan");

// m1.delegateWork();
// m1.greet();

// console.log(m1.employeeName);
// console.log(add(5,10));
// console.log(add2(5));

// console.log(sentence);