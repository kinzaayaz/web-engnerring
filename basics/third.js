//return a value from function with return
function minusSeven(num){
    return num-7;
}
console.log(minusSeven(10))

function timesFive(num){
    return num*7;
}
console.log(timesFive(10))

//understanding undefined value return from functionn
var sum=0
function addThree(val){
    sum+=3
    return "kinza"

}
let result=addThree()
console.log(result)

//assignment with return value
var processed=0
function passArg(num){
    return(num+3)/4
}
processed=passArg(7)
console.log(processed)

//stand inline


//boolean value
// function boolean(isItTrue){
    

// }


// use conditional logic with if statment
// let age=7
// if(age>18){
//     console.log('you r adult')
// }else{
//     console.log('u r not adult')
// }


// function getDetail(age){
//     if(age>18){
//         console.log('you r adult')
//     }else{
//         console.log('u r not adult')
//     }
//     }
//     getDetail(50)
//     getDetail(60)
//     getDetail(7)
//     getDetail(10)


function trueOrFalse(wasThatTrue){
    if(wasThatTrue){
        return "yes,it's true"
    }
    return "no,that was false"
}
console.log(trueOrFalse(true))
console.log(trueOrFalse(false))
console.log(trueOrFalse(true))
console.log(trueOrFalse(false))


//comparison with equality operator
function testValue(num){
    if(num==12){
        return "Equal"
    }
    return "not equal"
}
console.log(testValue(12))



//=== strict equality operator
function compareEquality(a,b){
    if(a===b){
        return "Equal"
    }
    return"not equal"
}
console.log(compareEquality(10,'10'))


// not equality operator
function notEquality(num){
    if(num!=100){
        return "not equal"
    }
    return "equal"
}
console.log(notEquality(100))

// compare with strict not equality operator
function notEqualityy(num){
    if(num !== 3 ){
        return "not equalll"
    }
    return "equalll"
}
console.log(notEqualityy("3"))


// compraison with logiacl AND operator
function testGreaterThan(val){
    if(val>100){
        return "over 100"
    }if(val>10){
        return "over 10"
    }
    return "10 or under"
}
console.log(testGreaterThan(10))

// comparison with greater than or equal to operator
function testGreaterThanOrEqualTo(val){
    if(val>=20){
        return "20 or over"
    }if(val>=10){
        return "10 or over"
    }
    return "less than 10"
}
console.log(testGreaterThanOrEqualTo(5))


// comparison with less than operator 
function testLessThan(val){
    if(val<20){
        return "less than 20"
    }if(val<50){
        return "less than 50"
    }
    return " over 50"
}
console.log(testLessThan(59))

// comarison with less than  or equal to operator
function testLessThanOrEqualTo(val){
    if(val<=12){
        return "smaller than or equal to 12"
    }if(val<=24){
        return "smaller than or equal to 24"
    }
    return " more than 24"
}
console.log(testLessThanOrEqualTo(20))

// comparison with logcal AND operator
function testLogicalAndOperator(val){
    if(val<=50 && val>=25){
        return "yes"
    }
    return "no"
}
console.log(testLogicalAndOperator(100))


// comparison with logical or operator 
function testLogicalOrOperator(val){
    if(val<10 || val>20){
        return "Outside"
    }
    return "inside"
}
console.log(testLogicalOrOperator(15))

 //else statment
 function testElse(val){
    if(val>5){
        return "greater than 5"
    }else{
        return " less tha 5"
    }
 }
console.log(testElse(80))

// else if statments
function testElseIf(val){
    if(val >10){
        return "greater than 10"
    }else if(val<5){
        return "less thann 50"
    }else{
        return "between 5 and 10"
    }
}
console.log(testElseIf(8))


// local order in else if statment 
function OrderMyLogic(val){
    if(val <5){
        return "less than 5"
    }else if(val<10){
        return "less thann 10"
    }else{
        return "greater than or equal to 10"
    }
}
console.log(OrderMyLogic(18))


// chaining if else statemnts
function testSize(num){
    if(num<5){
        return "small"
    }else if(num<10){
        return "mtiny"
    }else if(num<15){
        return "medium"
    }else if(num<20){
        return "large"
    }else{
        return "huge"
    }
}
console.log(testSize(15))


// golf Code 


// switch statments
function caseInSwitch(val){
    var ans=""
    switch(val){
        case 1:
            ans="alpha"
            break
        case 2:
            ans="beta"
            break
        case 3:
            ans="gamma"
            break
        case 3:
             ans="gamma"
            break
    }
    return ans
}
console.log(caseInSwitch(2))


// default opetion on switch statment 
function defaultOption(val){
    var answer=""
    switch(val){
        case "a":
            answer="apple"
            break
        case "b":
            answer="bird"
            break
        case "c":
            answer="cat"
            break
        default:
            answer="stuff"
            break
    }
    return answer
}
console.log(defaultOption(5))
