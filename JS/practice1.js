/* 1.
console.log("Value of age is " + age);
var age = 12;
console.log("Value of age is " + age);*/

/* 2.
myFun();
var myFun = function () {
  console.log("First");
};
myFun();
function myFun() {
  console.log("Second");
}
myFun();*/

/* 3.
const a = {};
const b = {key:"b"};
const c = {key:"c"};
a[b] = 123;
a[c] = 456;
console.log(a[b]);*/
//When we are using b and c as the key they are converted to [Object Object] by toString method.
//So there is only one key in object a which is [Object Object] and the second assignment 456 overrides the first 123.
//a = {'[object object]' : 456}
