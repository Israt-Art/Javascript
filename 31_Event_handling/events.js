let btn1=document.querySelector("#btn1");

btn1.onclick=()=>{


    console.log("btn1 was clicked");
    let a=25;
    a++;

   
    console.log(a); //26
};


//jotobar hover totobar count
let div=document.querySelector("div");
div.onmouseover=()=>{
    console.log("you are inside div");//ei likha tah israt div a click korar por output a asbe

};



// (javascript->priority than inline,if u have both javascript will execute inline will not execute)