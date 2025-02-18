// multiple identical options in switch statments 
function sequentialSize(val) {
    ans = ""
    switch (val) {
        case 1:
        case 2:
        case 3:
            ans = "low"
            break
        case 4:
        case 5:
        case 6:
            ans = "mid"
            break
        case 7:
        case 8:
        case 9:
            ans = "high"
            break

    }
    return ans
}
console.log(sequentialSize(4))


// replacing chain of if else with switch statments 

// function testSize(num){
//     if(num<5){
//         return "small"
//     }else if(num<10){
//         return "mtiny"
//     }else if(num<15){
//         return "medium"
//     }else if(num<20){
//         return "large"
//     }else{
//         return "huge"
//     }
// }
function chainToSwitch(val) {
    word = ""
    switch (val) {
        case 5:
            word= "small"
            break
        case 10:
            word= "tiny"
            break
        case 15:
            word= "medium"
            break
        case 20:
            word= "large"
            break
        default:
            word= "huge"

    }
    return word

}
console.log(chainToSwitch(4))


// returning boolean values from function 

// function isLess(a,b){
//     if(a<b){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isLess(9,2))
function isLess(a,b){
return a<b
}
console.log(isLess(9,2))


// returning early pattern from function 
 


// counting Cards 
