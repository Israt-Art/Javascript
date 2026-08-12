/**class is a program code template for creating objects
 * 
 * those objects will have some state(variable) & some behaviour(functions) inside it
 * 
 */
class Toyotacar{
    constructor(brand,mileage){
        console.log("creating new object");
        this.brand=brand;
        this.mileage=mileage;
    }

      start (){
        console.log("start");
      }
      stop(){
        console.log("stop");
      }

      setBrand(brand){
        this.brandName=brand;
      }
}

let fortuner=new Toyotacar("fortuner",10);//everything will be stored in fortuner
console.log(fortuner);
let lexus=new Toyotacar("lexus",20);
console.log(lexus);
//two times will be construction print line will be print

//write fortuner for output
