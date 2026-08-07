//declare
//functions without parameters
function greeting(){
    console.log("HELLO WORLD")
}
greeting()


//function with parameters
function welcome(name){
    console.log(`welcome to class MR/MISS/MRS ${name}`)
}

welcome("destiny")

function add(){
    let x=10
    let y=20
    return x + y
}
console.log(add())

function addition(x , y){
    return x + y
}
console.log(addition( 9, 1))

function agecheck(age){
    if(age <= 18){
        return "PLEASE GET OUT.....YOU ARE NOT OF AGE"
    }else{
        return "GIVE HER ONE ONE BOTTLE OF BEER !!!"
    }
        
}

let destinyage = agecheck(15)
console.log(destinyage)

function luckynumber(number){
    if(number === 4){
        return"CONGRATULATION YOU WON"
    }else{
        return"OPPS...TRY AGAIN NEXT TIME"
    }
}

let number = luckynumber(4)
console.log(number)

//scope
//globalscope
//localscope

function gradingtype(grade){
    if(grade >=70 && grade<=100){
        return "A";
    }else if(grade >=50 && grade<=69) {
        return"B"
    } else {
        return"F"
    }
}
let grade =gradingtype(3)
console.log(grade)

//ARROW FUNCTION
const minus = (num)=>{
    return num - 50
}
let answer=minus(100)
















































