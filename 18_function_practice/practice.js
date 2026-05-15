/* create a function using the "function" keyword that
takes a string as an argument and returns the number of
vowels in the string */

function countVowels(str){
    
    let count=0;
    for(const char of str){
        if(char==="a"||
            char==="e"||
            char==="i"||
            char==="o"||
            char==="u"){
            count++;
        }
    
}
console.log(count); //type output countVowels("asdi")
}


//create an arrow function to perform the same task

const countVow=(str)=>{
    let countVowels=0;
    for(const char of str){
        if(char==="a"||
            char==="e"||
            char==="i"||
            char==="o"||
            char==="u"){
            countVowels++;
        }
    }
    return countVowels;
}














