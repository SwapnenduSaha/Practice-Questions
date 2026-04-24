/*1.
var x = 10;
console.log(x);
function x(){
    console.log(20);
}
x();*/
/*At creation phase x was initialized with undefined but during execution phase x was not a function anymore it's value became 10.
So that will give a TypeError*/

/*2.
let x = 10;
console.log(x);
function x(){
    console.log(20);
}
x();*/
/*This code will give a syntax error because we used 'let' keyword to declare the variable x so x can't be used to define a function*/

/*3.
console.log(num);
func();
var num = 5;
function func() {
  console.log("This is function");
}*/
/*During creation phase num was initialized with undefined so during creation phase it prints undefined because 5 was not assigned till then*/

/*4.
console.log(num);
var num = 5;
console.log(num);
var num = () => {
    console.log("This is function");
}
console.log(num);*/
/*Variables declared with var can be redecleard and reassigned*/

/*5
let num = 5;
console.log(y);
var y = num;
console.log(y);
y = 2;
console.log(y);
var y = function(){
    console.log("This is function");
}
console.log(y);*/


