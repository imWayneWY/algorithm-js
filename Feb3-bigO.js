/**
 * Time Complexity
 */

// O(1)
let i = 0;
i += 1;


// O(n)
for (let i=0; i<n; i++) {
    console.log(i);
}

// O(1)+O(n) = O(n)
// 1 is too small to ignore
let i=0;
i += 1;
for (let j=0; j<n; j++) {
    console.log(j);
}

// O(n) * O(n) = O(n^2)
for (let i=0; i<0; i++) {
    for (let j=0; j<n; j++) {
        console.log(i, j);
    }
}

// O(logN)
let i=1;
while(i < n) {
    console.log(i);
    i *= 2;
}

/**
 * Space Complexity
 */

// O(1)
let i = 0;
i += 1;
 
// O(n)
const list = [];
for (let i=0; i<n; i++) {
    list.push(i);
}

// O(n^2)
const matrix = [];
for (let i=0; i<n; i++) {
    matrix.push([]);
    for (let j=0; j<n; j++) {
        matrix[i].push(j);
    }
}