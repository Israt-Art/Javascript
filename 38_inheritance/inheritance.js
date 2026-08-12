/**inheritance is passing down properties & method from present class to child class */

/**method overriding->if child & parent have same method,child object will be used */

class Parent{
    hello(){
        console.log("hello");
    }
}

class Child extends Parent{}
    let obj=new Child();

    class Person{
        constructor(){
            this.species="homo sapines";
        }
        eat(){
            console.log("eat");
        }
        sleep(){
            console.log("sleep");
        }
        work(){
            console.log("do nothing");//overrride
        }
    }

    class Engineer extends Person{
        work(){
            //write this->shradhaObj.work() to get output
            console.log("solve problems,build something");
        }
    }

        class Doctor extends Person{
        work(){
            console.log("treat patients");
        }
    }

    let shradhaObj=new Engineer();