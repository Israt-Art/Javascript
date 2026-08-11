let div = document.querySelector("div");
console.log(div);

// ---------- Attributes ----------
let id = div.getAttribute("id");
console.log("id:", id);

let name = div.getAttribute("name");
console.log("name:", name);

let para = document.querySelector("p");
console.log("class:", para.getAttribute("class"));

// ---------- Change class ----------
para.setAttribute("class", "newClass");

// ---------- CSS changes ----------
div.style.backgroundColor = "green";
div.style.fontSize = "26px";



// ---------- Create button ----------
let newBtn = document.createElement("button");
newBtn.innerText = "Click me";


//append->adds at the end of the node(inside)
// add button without removing existing content
div.append(newBtn);


//prepend->adds at the start of the node(inside)
let div2=document.querySelector("div");
div.prepend("IJS");


let newHeading=document.createElement("h1");
newHeading.innerHTML="<i> HI, i am heading</i>";

document.querySelector("body").prepend(newHeading);

//before->adds before the node(outside)

let newBtn2=document.createElement("button");
newBtn2.innerText="Click me too";
div.before(newBtn2);

//after->adds after the node(outside)
let newBtn3=document.createElement("button");
newBtn3.innerText="Click me three";
div.after(newBtn3);


//remove->removes the node

let para2=document.querySelector("p");
para2.remove();

newHeading.remove();