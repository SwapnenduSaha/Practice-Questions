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

/*5.array is mutable but string is immutable*/
/*let arr = [0,1,2];
arr[0] = 5;
console.log(arr[0]);//5
let str = "abcd";
str[0] = "b";
console.log(str[0]);//a
str = "b" + str.slice(1,4);
console.log(str);//bbcd
*/

/*delete oprator in JS used to remove properties from an object
It returns true after successful deletion and returns true even if property doesn't exist
It does not work on variables and returns false on attempt of deletion
In case of array it creates an empty slot after deletion from specified index
*/
const obj = {
  a: "hello",
  b: "world",
};
const arr = [1, 2, 3, 4, 5];
console.log(delete obj.a);
console.log(obj);
console.log(delete obj.c);
console.log(delete arr[2]);//true
console.log(arr);//[ 1, 2, <1 empty item>, 4, 5 ]

