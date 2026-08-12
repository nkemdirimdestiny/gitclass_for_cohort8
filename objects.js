const obj = {
    name: 'NKEMDIRIM DESTINY CHIDERA',
    gender: 'female',
    age: 16,
    complexion : 'fair',
};
console.log(obj);

//adding properties;
let phone = {
    brand: 'samsung',
    model: "galaxy s22",
    price: 350000,
};

phone.colour = "black";
console.log (phone);

let student= {
    name:"Efiong",
    regNo: "C8/001",
    course: "Backend developnment",
    year: 2026,
    friends: ["destiny", "chidera", "john"]
};

student.gender = "male";
console.log (student);
student.course = "node.js"
console.log(student);
delete student.year;
console.log(student);

//destructuring
let employee = {
    name:"LYNDA CHIOMA",
    role: "Backend developnment",
    salary: 500000,
    city:"Lagos",
};

const {name:username,role:job,salary, city} = employee;
let DNA= {
    gender: "female",
    complexion: "fair",
}

let offspring = {
    ...DNA,
    name: "NKEMDIRIM DESTINY CHIDERA",
    age: "16",
}
console.log ( offspring);

//iterating over objects
console.log (Object.keys(offspring));
console.log (Object.values(offspring));
console.log (Object.entries(offspring));