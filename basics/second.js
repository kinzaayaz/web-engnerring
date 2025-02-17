//by index nmbr
var firstNamee="kinza"
thirdLetterOfFirstNamee=firstNamee[3]
console.log(thirdLetterOfFirstNamee)


//last letter of string if we don't know how many letters are there in our string
var firstName="kinza"
lastLetterOfFirstName=firstName[firstName.length-1]
console.log(lastLetterOfFirstName)

// var firstName="kinza"
// thirdLetterOfFirstName=firstName[firstName.length-3]
// console.log(thirdLetterOfFirstName)


// store multiple value with strings
var myArray=['kinza',10.9,7]
console.log(myArray)
console.log(myArray[0])


//access array data with index
var ourData=[0,10.7,8]
var data=ourData[1]
console.log(data)


//modify array data with indexes
var myIndex=[1,4,8]
myIndex[2]=6
console.log(myIndex)


//access multidimensional array with indexes
var array=[[0,1,0],[2,3,1],[[1,5,8],'kinza',7],4,7,0]
console.log(array[2][1])


//manipulate data with push           push for adding element to the ending of array
var myArray=[1,2,3]
myArray.push(['kinza','ayaz'])
console.log(myArray)


//manipulate array with pop               pop for removing last element of the arrray
var myArray=[1,2,3]
var removeFromMyArray=myArray.pop()
console.log(myArray)


//manipulate array with shift             shift for removing first element of an array
var myArray=[10,20,35]
var shiftFromMyArray=myArray.shift()
console.log(myArray)


//manipulate array with unshift             shift for  adding element in start of an array
var myArray=[10,20,35]
// myArray.shift()    //now array becomes [20,30]
myArray.unshift('happy')
console.log(myArray)


// write reusable code with functions
function myFunction(){
    console.log('hey world')
}
myFunction()



// passing values to function with parameters
function myNewFunction(a,b){
    console.log(a+b)
}
myNewFunction(1,9)


// global scope and function 
// can be access anywhere in the programm , and is declare outside the body of function


// local scope and function
// can be access nly inside function body


// local vs  global scope in function 
var outerWear='T-Shirt'
function dress(){
    var outerWear='sweaters'
    return outerWear      //when local and global variable are of same name local variable take precedence over global  variable
}
console.log(dress())
console.log(outerWear)


