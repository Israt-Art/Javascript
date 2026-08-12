/*create a  toggle button that changes the screen to
dark-mode when clicked & light-mode when clicked again */

let modeBtn=document.querySelector("#mode");
let curMode="light";

modeBtn.addEventListener("click",() =>{
    console.log("you are trying to change mode");
});

modeBtn.addEventListener("click",() =>{
    if(curMode === "light"){
        curMode="dark";
        document.querySelector("body").style.backgroundColor="black";   
    }



    else{
        curMode="light";
        document.querySelector("body").style.backgroundColor="white";
    }

    console.log(curMode);
});

/**👉 document accesses the webpage, querySelector("body") selects the body tag, .style accesses CSS styles, .backgroundColor changes the background color, and ="white" sets it to white. */


/**but if you wanna exccess its from css then have to white
 * document.querySelector("body").classList.add("dark");
 */
