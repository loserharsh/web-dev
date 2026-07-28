console.log("Hello, World!");

for (let i = 1; i <= 5; i++) {
    // console.log(i);
}

string = "JavaScript";

let object = {
    name: "John",
    age: 30,
    city: "New York"
};

object.country = "USA";
for (const key in object) {
    // console.log(key + ": " + object[key]);
}

for (let char of string){
    // console.log(char)
}

let array = [1, 2, 3, 4, 5];
for (let num of array) {
   // console.log(num);
}

let fwhile = 0;
while (fwhile < 5) {
    // console.log(fwhile);
    fwhile++;
}
let hs = 10;
do{
    // console.log(hs);
    hs++;
}while(hs < 5);