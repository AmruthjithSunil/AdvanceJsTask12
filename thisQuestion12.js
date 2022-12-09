//this inside global scope
this.table = 'window table';
console.log(this.table);

//this inside a method
let john = {
    table: 'johns table',
    cleanTable(){
        console.log(`cleaning ${this.table}`)
    }
}
john.cleanTable();

//this inside a function
const cleanTable = () => console.log(`cleaning ${this.table}`);
cleanTable.call(this);

//this inside inner function
const outerFunction = () => {    
    const innerFunction = () => console.log(`cleaning ${this.table}`);
    innerFunction.call(this);
};
outerFunction.call(this);

//this inside constructor
const create = function(name) {
    this.table = `${name}s table`,
    this.cleanTable = () => console.log(`cleaning ${this.table}`);
};
const jill = new create('Jill');
jill.cleanTable();

//this inside class

class createClass{
    constructor(name){
        this.table = `${name}s table`;
    }
    cleanTable(){
        console.log(`cleaning ${this.table}`);
    }
}
const jacob = new createClass('Jacob');
jacob.cleanTable();