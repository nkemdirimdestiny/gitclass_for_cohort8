let name = "destiny"
console.log(name.toLowerCase());
console.log(name.toUpperCase());

function lowerMe(myname){
    return myname.toLowerCase()
}
console.log(lowerMe(name));

//trim
const trimexample = " destiny ";
console.log(trimexample.trim());
console.log(trimexample.trimStart())
console.log(trimexample.trimEnd());

//startswith & endswith
let filename = "return_final_2024_pdf";
console.log(filename.startsWith("return"));
console.log(filename.endsWith("you"));
console.log(filename.startsWith("final"));
console.log(filename.endsWith("pdf"));

//slice & substring
const myname = "destiny";
console.log(myname.slice(0 , 3));
console.log(myname.slice(3));
console.log(myname.slice(-3));
console.log(myname.substring(0 ,3));
console.log(myname.substring(3));
console.log(myname.substring(-3));

//replace and replaceAll
const stringtext = "Destiny is a fine girl, Destiny is so smart and cute and Destiny is a software developer"
//console.log(stringtext.replace("Destiny", "she"));
//console.log(stringtext.replaceAll("Destiny", "she"));

//split method
let splittedtext = stringtext.split(",")
console.log(splittedtext[0].replaceAll("Destiny", "she"));

//reverse method
let panlidrome = "madam"
let reverse = panlidrome.split("").reverse().join("")
console.log(reverse)

//checking panlidrome
function wordcheck(word){
   return word === word.split("").reverse().join("").toUpperCase()?"yes it is a panlidrome": "no it is not a panlindrome"
}

console.log(wordcheck("destiny"))

//padstart and padend
//padstart
const companyname = "Collection"
console.log(companyname.padStart(14, "dera"));