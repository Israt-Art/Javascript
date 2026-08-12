/**super keyword is used to call the constructor of its parent class to access the parent's properties and methods */

class Person{
    constructor(){
        console.log("enter child constructor");
        this.species="homo sapines";
    }

    eat(){
        console.log("eat");
    }
}

class Engineer extends Person{
    constructor(branch){
        console.log("enter child constructor");
        super();//invoke parent class constructor
        this.branch=branch;
        console.log("exit child constructor");

        
    }
    work(){
        console.log("solve problems,build something");
    }
}

let engObj=new Engineer("chemical engineer");