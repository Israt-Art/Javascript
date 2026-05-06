/* [250,645,300,900,50]
all items have an offer of 10% off on them.
change array to store final price after offer */

let items=[250,645,300,900,50];


/*let i=0;
for(let val of items){
  
    console.log(`value at index ${i} is =${val}`);
    let offer=val/10;
    items[i]=items[i]-offer;
    console.log(`value after offer =${items[i]}`);
    i++;
}
*/

for(let i=0;i<items.length;i++){
    let offer=items[i]/10;
    items[i]-=offer;
}

console.log(items);
