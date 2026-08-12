try {
    let result = 10/2;
    console.log(result);
}catch (error) {
    console.log("AN ERROR OCCURRED: " + error.message + error.name);
} 
console.log("the program continues");

function loaduserdata(userID) {
    console.log("starting to load data....")
    try {
        if (userID <= 0) {
            throw new Error( "user ID must be greater than 0");
        }
        console.log("Data loaded for user:" + userID);
    }catch(error){
        console.log("failed:" + error.message)
    }finally{
        console.log("Loading completed. closing connection...")
    }
}

loaduserdata(-3);

function registeredStudents(name, age){
    console.log("checking eligibility")
    try {
        if (!name){
            throw new Error("Name cannot be empty");
        }
        if(age<18 || age > 60){
            throw new Error("Age must be between 16 - 60. Got " + age)
        }
        console.log("Registered Successfully:" + name + ",Age:" + age)
    }catch(error){
        console.log("registrationfailed:" + error.message)
    }finally{
        console.log("NEXT CANDIDATE PLEASE !!!...")
    }
}

registeredStudents("destiny",12)