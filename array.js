let students = ["desiny" , "precious", "sara", "ada"]
console.log(students[0])
console.log(students.length)
students[2]= "favour"
console.log(students)

//adding element to an array
students.push("efiong")
console.log(students)

students.unshift("chidera")
console.log(students)

//removing element
students.pop()
console.log(students)
students.shift()
console.log(students)

//includes , indexof
console.log(students.includes("desiny"))
console.log(students.indexOf("desiny"))

//reverse , sort , slice, splice
students.reverse()
console.log(students)
students.sort()
console.log(students)

console.log(students.slice(1 , 3))
console.log(students.splice(1, 2 ,"mohh", "esther"))
console.log(students)

//higher other array method
//map , filter, reduce, foreach, find, findindex, some, every

//map method
const numbers = [1 ,2, 3, 4, 5, 6, 7 , 8 , 9 ,10]

const doublednumbers = numbers.map((num) => num * 2)
console.log(doublednumbers)

const marketlist = ["rice", "garri", "beans", "yam", "plaintain"]
const addedprefix = marketlist.map((item) => "i want to buy" + item)
console.log(addedprefix)
//const double = numers.map((num) => {
//    return num * 2;
// })  (use if multiple operations are to be done)

//filter method
const evennumbers = numbers.filter((num) => num % 2 === 0)
console.log(evennumbers)

const complexion = ["dark", "fair", "medium", "dark", "fair"]
const darkcomplexion = complexion.filter((complexion) => complexion === "dark")
console.log(darkcomplexion)

//find method
const findfirstdark = complexion.find((complexion) => complexion === "dark")
console.log(findfirstdark);

//findindex
const findIndexitem = complexion.findIndex((complexion) => complexion === "dark")
console.log(findIndexitem)

//reduce
const num = [700, 300, 400 , 500, 200];
const addallnumbers = num.reduce((accumulator , currentvalue)=> accumulator +currentvalue, 0)
console.log(addallnumbers)

const names = ["esther", "destiny", "chidera"] 
const addnames = names.reduce((acc, cur) => acc + cur)
console.log(addnames);

const multiply = num.reduce((acc , cur) => acc  * cur, 1)
console.log(multiply);




