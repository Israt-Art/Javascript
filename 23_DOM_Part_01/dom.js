//console log and console dir

/*Use console.log() → for normal debugging/output.
Use console.dir() → when you want to inspect object properties deeply, especially DOM elements*/




console.log("hello");
alert("welcome to apna college");


//window object->

/*window object represents an open window in a browser.
It is browser's object(not javascript's) & is automatiacally
created by browser.

it is a global object with lots of properties and methods.
*/

console.log(window); //output a show korbey
window.console.log("hello2");

console.dir(document);// it will show the propertise of document object
//or 
console.log(window.document);

console.dir(document.body); //it will show the propertise of body object

console.log(document.body);

console.dir(document.body.childNodes[1]);//it will show the propertise of body object first child node



//DOM MANIPULATION

//Selecting with id

let heading=document.getElementById("heading");
console.log(heading);

//Selecting with class
let para=document.getElementsByClassName("para");
console.log(para);
console.dir(para);

//selecting with tag

let h1=document.getElementsByTagName("h1");
console.log(h1);


//query selector->return first element

let elements=document.querySelector("p");
console.dir(elements);


//query selector all->return all Nodelist

let elements2=document.querySelectorAll("#heading");
console.log(elements2);


let firstEl=document.querySelector("#myId");
console.dir(firstEl);