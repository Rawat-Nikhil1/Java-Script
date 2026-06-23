class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username,email,password){
        super(username)
        this.email=  email
        this.password= password
    
    }
    addcourse(){
        console.log(`A new course was added by ${this.username}`);
    }

}
const a = new Teacher("Nikhil" ,"nik@gmail.com", "1234")
a.addcourse();
a.logMe();

const b = new User("Abhi")
b.logMe()

console.log( b instanceof Teacher)