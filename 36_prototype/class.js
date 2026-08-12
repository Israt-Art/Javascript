/** prototypes -> a js object is an entity having
 * state and behavior (properties and methods)
 * js objects have a special property called prototype
 * we can set prototype using __proto__
 * 
 * if object & prototype have same method,
 * object's method will be used
 */

const student = {
    fullName: "shraddha khapra",
    marks: 94.4,

    printMarks: function () {
        console.log("marks = ", this.marks);
    },
};

const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
};

const karanArjun = {
    salary: 50000,
    calcTax(){
        console.log("tax rate is 20%");//write it in output karanArjun.calcTax()
    }
};

// setting prototype
karanArjun.__proto__ = employee;//write karanArjun then you will see output

// calling prototype method
karanArjun.calcTax();