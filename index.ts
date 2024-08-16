console.log("Namastey india");

var a:number = 10;

//if hm a me string store krenge to error bta dega
a=20;

// array of number storing type 
let numbers:number[]=[24,54,97];

let alphabet:string[] =["mohan","sohan","ramesh"];
alphabet.forEach((s)=>s.toLocaleLowerCase()); 

let food:[string,number]=["banana",1];
// jiss index pr jo define hai sirf vhi store hoga 
food[0]="Apple";
food[1]=43;

// enum datatype
enum Distance {
    km=1000,
    m=1,
    cm=0.01
}
let myDistance:Distance=Distance.cm;

enum shirSize {
    l="Large",
    m="medium",
    xl="Extra large",
    s="small"
}
let myShirtSize:shirSize=shirSize.xl;

function myNewFunction(text:string)
{
    return text;
}
myNewFunction("Hello World!");
myNewFunction("43");

function myFunction(text:string):number
{
    if(text=="Hello world")
         {
            return 1;
         }
   else {
    return 0;
   }
}

let myText:number = myFunction("Hello world");

type Friend = {
   name:string;
   age:number;
   school:string;    
};

let friend:Friend = {
    name:"ankur",
    age:21,
    school:"SMS"
}
console.log(friend.name);