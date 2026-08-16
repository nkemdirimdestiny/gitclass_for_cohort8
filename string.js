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

//padStart
let companysname = "bridal"
console.log(companysname.padStart(13,"destiny"));

//padEnd
let edittedname = "destiny"
console.log(edittedname.padEnd(13, "bridal"));
