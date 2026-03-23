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

/*4.
function show() {
  {
    var x = 9;
    var y = 10;
  }
  console.log(x, y);
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

/* 5.How object literals and arrays behave with toString() method*/

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

/*6.array is mutable but string is immutable*/
/*let arr = [0,1,2];
arr[0] = 5;
console.log(arr[0]);//5
let str = "abcd";
str[0] = "b";
console.log(str[0]);//a
str = "b" + str.slice(1,4);
console.log(str);//bbcd
*/

/*7.delete oprator in JS used to remove properties from an object
It returns true after successful deletion and returns true even if property doesn't exist
It does not work on variables and returns false on attempt of deletion
In case of array it creates an empty slot after deletion from specified index
*/
/*const obj = {
  a: "hello",
  b: "world",
};
const arr = [1, 2, 3, 4, 5];
console.log(delete obj.a);
console.log(obj);
console.log(delete obj.c);
console.log(delete arr[2]);//true
console.log(arr);//[ 1, 2, <1 empty item>, 4, 5 ]*/

/*8.What should be the value of a so that following condition fulfills*/
/*const a = {
  val: 1,
  toString: function () {
    return this.val++;
  },
};
if (a == 1 && a == 2 && a == 3) {
  console.log("Condition matched");
}*/

/*9.
let a = Number();
let b = Number(undefined);
let c = Number(null);
let d = Number("a");
let e = Number(true);
let f = Number(false);
let g = Number("abc");
let h = Number(NaN);
console.log({ a, b, c, d, e, f, g ,h});*/

/*10.
function sum(a = 10, b = 10) {
  return a + b;
}
console.log(sum());
console.log(sum(5, null));//While addition between two different data types JS prefer number conversion
console.log(sum(5, undefined));//Default value of b is used
*/

/*11. Returns true if every person is male */
/*let objArr = [
  { name: "Ayush", gender: "Male" },
  { name: "Priya", gender: "Female" },
  { name: "Raj", gender: "Male" },
];
let ans = objArr.every((person) => person.gender === "Male");
console.log(ans);*/

/*12. Sort method*/
/*If nothing is passed then all array elements are converted into string and sorted lexicographically*/
/*const nums = [10, 2, 5, 31, 13];
const objs = [{name:"Anuj",age:23},{name:"Kajal",age:19},{name:"Suman",age:21}];
// nums.sort();
// nums.sort((a, b) => a - b);Will be sorted in ascending order
// nums.sort((a, b) => b - a);Will be sorted in descending order
// console.log(nums);
// objs.sort((a,b) => b.age - a.age);
// console.log(objs);
//If the subtraction is +ve then swapping will happen
*/

/*13. How Object.keys() orders the keys while printing
/*const obj1 = {
  3:"Three",
  1:"One",
  2:"Two",
  10:"Ten"
};
console.log(Object.keys(obj1));//If keys are integer then they are printed in ascending order
const obj2 = {
  "c":1,
  "d":2,
  "e":3,
  "a":4
};
console.log(Object.keys(obj2));//If keys are string then they are printed in the order they were added
let obj3 = {
  3: "three",
  name: "Swap",
  1: "one",
  age: 20,
};
console.log(Object.keys(obj3));*/

/*14. Rest and Spread operator*/
/*const nums1 = [1, 2, 3, 4, 5, 6];
const obj1 = { name: "Aman", age: 21 };
const nums2 = [...nums1, 10, 12];
const obj2 = { ...obj1, city: "Mumbai", country: "India" };
console.log(nums2);
console.log(obj2);*/

/*const [first, ...nums] = [1, 2, 3, 4, 5, 6, 7, 8];
const obj1 = { name: "Aman", age: 21 };
const { name, ...others } = obj1;
console.log(first);
console.log(nums);
console.log(name);
console.log(others);*/
/*Spread → Break it apart
Rest → Gather it together
Rest must be last parameter
*/
