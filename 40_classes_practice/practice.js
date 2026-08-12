/**you are creating a website for your college. Create a class user with 2 properties,name & email. it also jas a method called viewData() that allows user to view website data */

let DATA="secret information";

class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("data =",DATA);
    }
}

let student1=new User("shradha","abc@email.com");
student1.viewData();//data = secret information
let student2=new User("israt","xyz@email.com");
student2.viewData();//data = secret information
let student3=new User("joire","ree@email.com");
student3.viewData();//data = secret information

/** create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data */
class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA="some new value";
    }
}

let admin1=new Admin("admin","ui2052@gmail.com");
admin1.viewData(); // data = secret information
admin1.editData();
admin1.viewData(); // data = some new value
