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

/*function show(){
    {
        var x = 9;
        var y = 10;
    }
    console.log(x,y);
}
show();*/
//In this case value of x and y will be printed as both have function scope because of var but if we have to
//limit the scope between {} then simple way is to use let and the log statement will throw a reference err.
//Another way is to do this using IIFE so even with var scope of x and y will be bounded between {}

/*function show() {
  {
    (function () {
      var x = 9;
      var y = 10;
    })();
  }
  console.log(x, y);
}
show();*/

/* 4.How object literals and arrays behave with toString() method*/

/*const arr1 = [1, 2, 3];
const arr2 = [1, [2, 3], [4, 5, 6]];
const obj = {
  one: 1,
  two: 2,
};
console.log(arr1.toString());//1,2,3
console.log(arr2.toString());//1,2,3,4,5,6
console.log(obj.toString());//[object object]
*/
