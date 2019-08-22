/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. outside of constructor functions this keyword is used to refer to execution context. mostly global context. that is window object.
* 2. when a function is initiated the function object is represented this
* 3. when bind is called the returned function should have the context of object passed to bind
* 4. Explicit binding when a context is passed as an argument using call() or apply()
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var name = "varun"
function get() {
    console.log(`${this.name} is calm`)
}

// Principle 2
// code example for Implicit Binding
class Hero {
    constructor(arg) {
        this.name = arg.name;
    }
}

let varun = new Hero({ name: 'varun' })
// Principle 3

// code example for New Binding

function x() {
    console.log(this.name)
}

let obj = { name: 'varun' }

x.bind(obj);// New binding

// Principle 4

// code example for Explicit Binding

function fruit(type) {
    this.type = type;

}

fruit.prototype.quality = function () {
    console.log(`${this.type} is so sweet`)
}
let sapota = { type: 'sapota' }
fruit.prototype.quality.call(sapota);
