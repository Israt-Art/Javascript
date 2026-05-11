/* a) remove the first company from the array
b)remove uber & add ola in its place
c)add amazom at the end
*/

let companies=["Bloomberg","Microsoft","uber","Google",
    "IBM","Netflix"];


//a)

let res1=companies.shift();

console.log("deleted company:"+res1);

//b)

let res2=companies.splice(2,1,"Ola");
console.log("updated companies:"+res2);

//c)

let res3=companies.push("Amazon");
console.log("after adding amazon:"+res3);
