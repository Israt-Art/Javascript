for(let num=0;num<=100;num++){
    if(num%2==0){
        console.log("num=",num);
    }
}

/* create a game where you start with any random
game number.Ask the user to keep guessing the game number until the user enters correct value */

let gameNum=25;
let userNum=prompt("Guess the game number: ");

while(userNum!=gameNum){
    userNum =prompt("you entered wrong number. Guess again : ");

}

console.log("congratulations,you entered the right number");