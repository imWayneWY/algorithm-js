// array vs linkedList
// linkedList is easier when need to delete or add element in the middle

const a = { val: 'a' };
const b = { val: 'b' };
const c = { val: 'c' };
const d = { val: 'd' };

a.next = b;
b.next = c;
c.next = d;

// traverse all the elements
let p = a;
while(p) {
    console.log(p.val);
    p = p.next;
}

// insert
const e = { val: 'e'};
c.next = e;
e.next = d;

// delete
c.next = d;
