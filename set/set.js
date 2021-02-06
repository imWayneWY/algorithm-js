let mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add(5);
// the size will be 2
mySet.add('some text');
let o = { a: 1, b:2 };
mySet.add(o);
mySet.add({a: 1, b: 2});
//the size  will be 4


const has1 = mySet.has(1); //true;
const has2 = mySet.has('some text'); //true;
const has3 = mySet.has(o);

mySet.delete(5);

for(let item of mySet) console.log(item);
// key and value are the same thing in set
for(let item of mySet.keys()) console.log(item);
for(let item of mySet.values()) console.log(item);

const myArr = [...mySet];
const myArr2 = Array.from(mySet);

const mySet2 = new Set([1,2,3,4]);

const intersection = new Set([...mySet].filter(x => mySet2.has(x)));  // 1
const difference = new Set([...mySet].filter(x => !mySet2.has(x)));