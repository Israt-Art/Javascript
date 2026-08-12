//node.addEvenListener(event,callback)
//node.removeEventListener(event,callback)

let btn1=document.querySelector("#btn1");

btn1.addEventListener("click", (evt) =>{ //click->built in function
    console.log("button 1 was clicked - handler1");
    console.log(evt);
    console.log(evt.type);
});


btn1.addEventListener("click", () =>{ //click->built in function
    console.log("button 1 was clicked - handler2");
});

//both line will print after click on button

//evt->argument


const handler3 =() =>{
    console.log("button 1 was clicked - handler3");
};

btn1.addEventListener("click",handler3);


btn1.addEventListener("click", () =>{ //click->built in function
    console.log("button 1 was clicked - handler4");
});


//remove

btn1.removeEventListener("click",handler3);