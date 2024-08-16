"use strict";
console.log("Namastey india");
var a = 10;
//if hm a me string store krenge to error bta dega
a = 20;
// array of number storing type 
let numbers = [24, 54, 97];
let alphabet = ["mohan", "sohan", "ramesh"];
alphabet.forEach((s) => s.toLocaleLowerCase());
let food = ["banana", 1];
// jiss index pr jo define hai sirf vhi store hoga 
food[0] = "Apple";
food[1] = 43;
// enum datatype
var Distance;
(function (Distance) {
    Distance[Distance["km"] = 1000] = "km";
    Distance[Distance["m"] = 1] = "m";
    Distance[Distance["cm"] = 0.01] = "cm";
})(Distance || (Distance = {}));
let myDistance = Distance.cm;
var shirSize;
(function (shirSize) {
    shirSize["l"] = "Large";
    shirSize["m"] = "medium";
    shirSize["xl"] = "Extra large";
    shirSize["s"] = "small";
})(shirSize || (shirSize = {}));
let myShirtSize = shirSize.xl;
function myNewFunction(text) {
    return text;
}
myNewFunction("Hello World!");
myNewFunction("43");
function myFunction(text) {
    if (text == "Hello world") {
        return 1;
    }
    else {
        return 0;
    }
}
let myText = myFunction("Hello world");
let friend = {
    name: "ankur",
    age: 21,
    school: "SMS"
};
console.log(friend.name);
