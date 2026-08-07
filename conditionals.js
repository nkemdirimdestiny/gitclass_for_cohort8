//if/else
let age = 40;

if(age >= 18){
    console.log("you can vote")
}else{
    console.log("you cannot vote")
}

//
let gender = "female"

if( gender === "female"){
console.log("you are a female , use the ladies restroom ")
}else if( gender === "non binary"){
    console.log("use the non-binary room")
}else if ( gender === trans){
    console.log("use trans room")
}else{
    console.log("you are a male , use the men's restroom")
}

//loops

for( let i=0; i<12 ;i+=2){
    console.log(i)
}

let arrofnames = ["james", "john", "destiny", "micheal", "sandra"]
console.log(arrofnames.length)
for(let names = 0; names< arrofnames.length; names++){
    console.log(arrofnames[names] +  "is learning from techcrush")
}

for(let x=0; x<36; x++){
    console.log( x * 2)
}

for(let x=0; x<= 12; x++){
    console.log(x * 3)
}

//while
let loginAttempts = 0
while(loginAttempts < 3){
    console.log( `attempt number ${loginAttempts}`)
    loginAttempts++
}

let scores = [ 20 , 12 , 25 , 15];
for(let newscores = 0; newscores < scores.length; newscores++){
      console.log(scores[newscores] + 20)
}






