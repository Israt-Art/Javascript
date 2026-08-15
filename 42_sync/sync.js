/**synchronous means the code runs in a particular sequence of instructions given the program. Each instruction waits for the previous instruction to complete its execution */

/**due to synchronous programming, sometimes imp instructions get blocked due to some previous instruction,which causes a delay in the ui. asynchronous code execution allows to execute next instrucitons immediately and does not block the flow */

function hello(){
    console.log("hello");
}

setTimeout(hello,2000);//4ms=4s takes to execute the hello funtion

/*another way using arrow function

setTimeout(()=>{
    console.log("hello");
    },2000);
    */

//lets see how setTimeout works in a asynchronous way

console.log("one");
console.log("two");

setTimeout(()=>{
    console.log("wanna see");
},4000);

console.log("three");
console.log("four");


/**final output
one
two
three
four
hello
wanna see
*/