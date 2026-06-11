// const instaUser = {} // non singleton object
const instaUser = new Object() // singleton object
instaUser.id = "nikhil.rawatt"
instaUser.name = "Nikhil"
instaUser.isLoggedIn = true

// console.log(instaUser);

const regularUser = {
    email: "nk@gmail.com",
    userName: {
        fullName: {
            firstName: "Nikhil",
            lastNAme: "Rawat"
        }

    }
}

//console.log(regularUser.userName.fullName.firstName)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = {obj1,obj2} // object ke andr object asssign krdega
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = { ...obj1, ...obj2 } // using spread operator
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(instaUser);


// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty('isLoggedIn'));


// ++++++++++++++++++  object de-structure  +++++++++++++++++++++++++++++++

const course = {
    couseName : "B.tech",
    courseDuration : "4",
    courseInstructor : "Nikhil"
}

//console.log(course.courseInstructor);

const{courseInstructor : a} = course
// console.log(courseInstructor);
console.log(a);
