//revision file
console.log ("HELLO REVISION");
//strings
let food = "rice";
console.log(food);

//number
let age = 18;
console.log(age);
console.log(typeof(age));

//boolean
let isdestinyafemale = "true";
let isdestinyamale  = "false";
console.log(isdestinyafemale);
console.log(isdestinyamale);

//undefined
let people;
console.log(people);

//null
let item = null;
console.log(item)

//array
let shoppinglist = ["toothpaste", "toothbrush", "gown", "bracelets"];
console.log (shoppinglist);

//Arithematic operators
let number = 4
console.log(number * 2);
console.log (number + 3);
console.log(number - 1);
console.log (number / 2);
console.log(number % 2);

//comaprison operators
let num = "5";
console.log (num=== 5);
console.log (num!== "5");
console.log (num > 2);
console.log (num < 6);
console.log (num >= 5);
console.log (num <= 5);

//Logical operaotors
let hasadocument = "true";
let isupto18 = "true";
console.log( hasadocument && isupto18);
console.log( hasadocument || isupto18);
console.log ( !hasadocument );
console.log (!isupto18);

//assignment operators
let a = 10;
console.log( a += 5);
console.log (a -= 7);
console.log(a /= 2);
console.log (a *= 4);
console.log(a % 5);

//if/else
    let requiredage = 16
if(requiredage >=18){
    console.log("YOU CAN HAVE A MOBILE PHONE");
}else{
    console.log("NOPE, YOU ARE TOO SMALL TO MAKE USE OF A PHONE!!")
}

//elseif
let airoplanelevel = "firstclass";
if(airoplanelevel === "firstclass"){
    console.log("ENTER THE BUSINESSCLASS SIDE OF THE PLANE")
}else if(airoplanelevel ==="secondclass" ){
    console.log("ENTER THE MIDDLECLASS SIDE OF THE PLANE")
}else{
    console.log("YOU ARE A THIRDCLASS,ENTER THE LOW CLASS SIDE OF THE PLANE!!")
}

//loops
for(let a=2; a<=20;  a+=2){
    console.log(a % 2)
}

//while loop
let passwordattempt = 0;
while (passwordattempt <= 5){
    console.log(`attemptnumber ${passwordattempt}`)
    passwordattempt++
}

let scores=[ 20, 15 ,10, 15];
for(let newscores = 0; newscores < scores.length; newscores++){
    console.log(scores[newscores] + 20)
}

let namesofstudents =["destiny", "chidera", "esther", "efiong"];
for(let students = 0; students < namesofstudents.length; students++){
    console.log(namesofstudents[students] + "is studying in techcrush community");
}

//functions
//functions without parameters
function greetings(){
    console.log ("HELLO WORLD!!!")
}
greetings()

//funcions with parameters
function newname(name){
    console.log(`WELCOME TO TECHCRUSH ${name} `)
}
newname("destiny")

function correctID(IDdetails){
    if(IDdetails === "complete"){
        return"YOUR DETAILS IS COMPLETE,YOU CAN PASS"
    }else{
        return"INCOMPLETE DETAILS,YOU CANNOGT PASS"
    }
}
let details= correctID("incomplete")
console.log(details)

function classtype(age){
    if(age >=1 && age <=5){
        return"YOU ARE A CHILD,GO TO THE COURAGE CLASS DEPARTMENT"
    }else if(age >=6 && age <= 10){
        return"YOU ARE GROWING,GO TO THE WISDOM CLASS DEPARTMENT"
    }else if(age >= 10 && age <= 19){
        return"YOU ARE A TEENAGER,GO TO THE FAITH CLASS DEPARTMENT"
    }else{
        return"YOU ARE AN ADULT,TIME FOR YOU TO GRADUATE AND ENTER THE MAIN CHURCH"
    }
}
let personsage = classtype(30)
console.log(personsage)

//arrow function
let add = (x , y) =>{
    return x + y
}
let answer = add(6 ,7)
console.log(answer)

//name function
function minus (x , y){
    return x - y
}
let newnumber = minus(12 , 10)
console.log(newnumber)

//array
let schoolitems = ["book", "pen", "pencil", "eraser"];
console.log(schoolitems);
console.log(schoolitems.length);
console.log(schoolitems[3]);
schoolitems[3] = "sharpener"
console.log(schoolitems)

schoolitems.push("eraser")
console.log(schoolitems);

schoolitems.unshift("desk")
console.log(schoolitems)

schoolitems.pop()
console.log(schoolitems)

schoolitems.shift()
console.log(schoolitems)