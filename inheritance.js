class User{
    constructor(username){
        this.username=username;
    }
    loggIn(){
        console.log(`${this.username} has logged in`);
    }
}

class Teacher extends User{
    constructor(username,subject){
        super(username);
        this.subject=subject;
    }
    addCourse(){
        console.log(`${this.subject} has added to your course`);
    }
    static createdAt(){
        return "132";
    }
}

const amit=new Teacher("Amit063","history");
amit.addCourse();
amit.loggIn();
// amit.createdAt(); //  not accessible
const rudra=new User("Rudra");
// rudra.addCourse();   // not possible
rudra.loggIn();
