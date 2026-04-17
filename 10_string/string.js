let str="isratKhan";
let str2="Shradha";
console.log(str);
console.log(str[5]);


let obj={
    item:"pen",
    price:10,
};
let output='the cost of ${obj.item} id ${obj.price} rupees';
console.log(output);




//template literal


let specialString1=`this is a template literal ${1+2+3}`;
console.log(specialString1);


//escape character
console.log("apna \n college");
console.log("apna \t college");

let str1="apna\tcollege";//(\t)=1 char
console.log(str1.length);


//string method
let str3="ApnaCollege";
let newStr=str3.toUpperCase();
console.log(str3);
console.log(newStr);

let str4="   apna    college   js";
console.log(str4.trim());