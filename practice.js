console.log("HELLO EVERYONE!");

//string
let name = "Destiny";
console.log(name);
console.log(typeof(name));

//number
let ageinteger = 17;
console.log(ageinteger);
console.log(typeof(ageinteger));

//boolean
let isstudentstatuscollege = true;
let isstudentstatusworking = false;
console.log(isstudentstatuscollege);
console.log(isstudentstatusworking);
console.log(typeof(isstudentstatuscollege));

//array
let shoppinglist = ["shoes", "bags", "necklace", "bracelets"];
console.log(shoppinglist);
console.log(typeof(shoppinglist))
//I noticed that the terminal displayed "object" as the datatype instead of "array"

//Arithmetic operators
let num1 = 30;
let num2 = 20;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

let x = 17;
let y = 5;
console.log(x % y);

let price = 1500;
let discount = 200;
console.log(price - discount);

//comparison operators
let a = 10;
let b = "10";
console.log(a==b);
console.log(a===b);
/**(==)-This means equal to, used for comparison to know if (a and b) are the same values,
 * that iswhy it came out as true in the terminal.
 * WHILE
 * (===)-This means strictly equal to,used for comparison based on all aspects of (a and
 *  b) not only the values,that is why it came out false in the terminal bacause a and b
 *  belongs to different datatypes
 */

let score = 75;
x = 50;
console.log(score >= x);

//logical operators
let hasticket = true;
let hasID = false;
console.log(hasticket && hasID);
console.log(hasticket || hasID);

//miniproject
let password = "1234";
let correctpassword = "1234";
console.log(password === correctpassword);

let budget = 5000;
let itemprice = 1200;
console.log(itemprice < budget);
console.log(budget > 0);
console.log((itemprice < budget) && (budget > 0));
/**The item is affordable because the item price is less than the budget,
 * this is comfirmed by the terminal saying "true".
 * and the buget ie definitely greater than 0
 * therefore the item is affordable and the budget is greater than 0.
 */
