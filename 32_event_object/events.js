/*it is a special object that has details about the event*/

/*all event handelers have access to the event object's
properties and methods */


let btn1 = document.querySelector("#btn1");

btn1.onclick = (evt) => {

    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clickX,evt.clickY);
};

let div=document.querySelector("div");
div.onmouseover = (evt) =>{

    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clickX,evt.clickY);

}
//after click on div it wil active
