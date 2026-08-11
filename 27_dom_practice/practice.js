/* Create a new buttton element. Give it a text "click me",
background color of red and text color of white */

//insert buttton as the first element inside the body tag

let newBtn=document.createElement("button");
newBtn.innerText="click me!";

newBtn.style.color="white";
newBtn.style.backgroundColor="red";

document.querySelector("body").prepend(newBtn);



/*Create a <p> tag in html,give it a class & some styling
now create a new class in css and try to append this
class to the <p> element.

did you notice, how you overwrite the class name
when you add a new one?
solve this problem using classList. */


//select para

let para=document.querySelector("p");

para.classList.add("newClass"); // just add hobe. previous jinis affect hobe na



//wrong way (overwrites old class)
// para.setAttribute("class", "newClass");