/* create a H2 heading element with text - "Hello JavaScript".
Append "from Apna College students"
to this text using js */

let h2=document.querySelector("h2");
console.dir(h2.innerText); //html part text

h2.innerText+="  from Apna College students";//concate


/*querySelector->returns the first matching element,
querySelectorAll->returns all matching elements as a NodeList.*/



/* create 3 divs with common class name - "box".
Access them & add some unique text to each of them*/

let divs=document.querySelectorAll(".box");
console.log(divs[0]);
console.log(divs[1]);
console.log(divs[2]);

divs[0].innerText="new unique text 1";
divs[1].innerText="new unique text 2";
divs[2].innerText="new unique text 3";


for(div of divs){
    console.log(div.innerText);
}

let idx=1;
for(div of divs){
    div.innerText=`new unique value ${idx}`;
    idx++;
}