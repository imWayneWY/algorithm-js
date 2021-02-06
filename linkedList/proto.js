const obj = {};
const func = () => {};
const arr = [];

// implement an function of instanceOf
const instanceOf = (A, B) => {
    let p = A;
    while(p) {
        if (p === B.prototype) {
            return true;
        }
        p = p.__proto__;
    }
    return false;
}

// how prototype chain works
var foo = {},
    F = function () {};

Object.prototype.a = 'value a';
Function.prototype.b = 'value b';

console.log(foo.a);
console.log(foo.b);
console.log(F.a);
console.log(F.b);