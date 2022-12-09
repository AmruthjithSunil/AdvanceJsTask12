'use strict';
/* */
const getA = a => a;
const square = a => a*a;
const mult = (a,b) => a*b;

const x = function(){
    this.val = 1;
    setTimeout(() => {
        this.val++;
        console.log(this.val)
    }, 1)
};
var xx = new x()

const y = (...n) => {
    console.log(n[0]);
}
y(1,2,3);