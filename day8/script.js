let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr.length);
arr[0] = 10;
// console.log(arr[0]);
// console.log(arr[4]);

// console.log(arr.toString())
// console.log(arr.join(' '))

let newarr = [1,2,3,4,5,6,7,8,9,10];

// console.log(newarr.pop());
// console.log(newarr.pop());
newarr.push(11);
// console.log(newarr.toString());

let a1 = [1,9,3,7,5];
let a2 = ['a','b','c','d','e'];

let c1 = a1.concat(a2);
// console.log(c1.join(' '));

// a1.forEach((val, index, arr) => {
//     console.log(val, index, arr);
// }); 

// forin loop
for (let index in a1) {
    // console.log(a1[index]);
}

// for of loop
for (let val of a1) {
    // console.log(val);
}   

let a = [1,4,2,5,2];
let b = [];
for (let i = 0; i < a.length; i++) {
    let ele = a[i];
    b.push(ele * 2);
};
console.log(b);

let c = a.map(w => {
    return w * 2;
});
console.log(c);