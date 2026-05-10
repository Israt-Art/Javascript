let fooditems=["potato","apple","litchi","tomato"];

fooditems.push("chips","burger","paneer");

console.log(fooditems);

//pop

let deletedItem=fooditems.pop();
console.log("deleted:" +deletedItem);

//tostring

console.log("after tostring:" + fooditems.toString());

//concat

let marvel_heroes=["thor","spiderman","ironman"];
let dc_heroes=["superman","batman"];

let heroes=marvel_heroes.concat(dc_heroes);
console.log(heroes);

//unshift=push on first element

let Unshift=marvel_heroes.unshift("antman");
console.log("after unshift:" + Unshift); //to see result type marvel_heroes

//shift=pop on first element

let val=marvel_heroes.shift();
console.log("after shift:" +val);//thor deleted


//slice->did not change original array

let university=["uiu","du","buet","brac","nsu"];

console.log(university);

console.log(university.slice(1,4)); //1 include,4 exclude


//splice->change original array (starldx,delcount,newelement)

let arr=[1,2,3,4,5,6,7];

arr.splice(2,3,101,102,105); //(starldx,delcount,newelement)


//just add element using splice

let arr1=[1,2,3,4,5,6,7];
arr1.splice(2,0,109); //did not change anything just add 109


//just delete element using splice

let arr2=[1,2,3,4,5,6,7];
arr2.splice(2,3); //delete 3,4,5


//replace using splice
let arr3=[1,2,3,4,5,6,7];
arr3.splice(3,1,101);





