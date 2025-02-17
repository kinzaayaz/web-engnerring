// Declare a variable name and assign your name to it. Print it to the console.
var name = "kinza"
console.log(name)

// Create two variables a and b and store numbers in them. Print their sum.
var a = 10
var b = 20
sum = a + b
console.log(sum)

// Convert a string "123" into a number and add 10 to it.
let num = Number("123");
console.log(num + 10);


// Write a program that takes two numbers as input and prints whether the first is greater than the second.
const num1 = 10
const num2 = 20
if (num1 > num2) {
    console.log("num1 is greater")
} else {
    console.log("num2 is greater")
}


// Use the modulus operator to check if a number is even or odd.
const number1 = 7
const number2 = 4
if (number1 % 2 == 0) {
    console.log("the num is even")
} else {
    console.log("the num is odd")
}

// Write a program that checks if a number is positive, negative, or zero.
const no1 = -3
if (no1 > 0) {
    console.log("number is positive")
} else if (no1 < 0) {
    console.log("number is negative")
} else {
    console.log("number is zero")
}


// Create a simple grading system using if-else. (e.g., A for 90+, B for 80-89, etc.)
let score = 78
if (score >= 90) {
    console.log("A+")
} else if (score >= 80) {
    console.log("A")
} else if (score >= 70) {
    console.log("B+")
} else if (score >= 60) {
    console.log("B")
} else if (score >= 50) {
    console.log("C")
}

// Print numbers from 1 to 10 using a for loop.
for (let i = 0; i < 11; i++) {
    console.log(i)
}


// Write a function that takes a name as input and prints "Hello, [name]!".
function myName(name) {
    console.log("Hello", name)
}
myName("kinza")


// Write a function that takes two numbers and returns their product.
function twoNum(num1, num2) {
    product = num1 * num2
    console.log(product)
}
twoNum(10, 10)


// Create an array of five numbers and find their sum.
let array = [0, 1, 2, 3, 4]
let result = 0
for (let i = 0; i < array.length; i++) {
    result += array[i]

}
console.log(result)


// Given an array arr = [1, 2, 3, 4, 5], remove the last element using JavaScript methods.
let arr = [1, 2, 3, 4, 5]
arr.pop()
console.log(arr)


// Write a function that returns the factorial of a number.
function factorial(n) {
    if (n == 0 || n == 1) {
        return 1
    }
    return n*factorial(n-1)
}
console.log(factorial(5))