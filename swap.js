//Write a function to swap two numbers without temp variable
let temp;
let a = 10, b = 30;
temp = a;
a = b;
b = temp;
console.log("a is " + a, "b is" + b);

//second airthmatic operation
function swap(a, b) {
    console.log("brfore swaping ...." + a, b);

    a = a + b;
    b = a - b;
    a = a - b
    console.log("After swaping" + " " + a, b);


}
swap(23, 45)

//Destructuring.....
function desSwap(a, b) {
    console.log(a, b);

    [a, b] = [b, a];

    console.log(a, b);


}
desSwap(29, 10);

//xor
function xorSwap(a, b) {
    console.log(a, b);

    a = a ^ b;
    b = b ^ a;
    a = a ^ b;

    console.log(a, b);


}

xorSwap(30, 99)