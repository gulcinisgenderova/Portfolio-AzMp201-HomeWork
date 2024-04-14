class Human{
    constructor(name,surname,age,gender,nationality){
     this.name=name;
     this.surname=surname;
     this.age=age;
     this.gender=gender;
     this.nationality=nationality;
    }
    getFullName() {
        console.log(`${this.name} ${this.surname}`);
     }

    getBirthYear(){
        const d = new Date();
let currentYear=d.getFullYear()
        console.log(`${currentYear-this.age} `);
    }
}


class User extends Human {
    constructor(name, surname, age, gender, nationality, username, email, isAdmin, isLogged, password, bio) {
        super(name, surname, age, gender, nationality);

        this.username = username;
        this.email = email;
        this.bio = bio;
        if (typeof password !== 'string' || password.length < 6) {
            console.error('Invalid password. Password must be a string and at least 6 characters long.');
        }

        this.password = password;

        if (typeof isAdmin !== "boolean" ) {
            console.error('Dogru deyer girin');
        }
    
        this.isAdmin =isAdmin;

        if (typeof isLogged !== "boolean" ) {
            console.error('Dogru deyer girin');
        }
    
        this.isLogged =isLogged;

        if (typeof bio !== 'string' || password.length >30) {
            console.error('Bio length max 30 character');
        }

        this.bio = bio;
    }
    
  
  changePassword(currentPassword,newPassword){
       if (newPassword==currentPassword) {
        console.error("New password and current password is the same");
        return

       } else if(currentPassword== this.password) {
        if (typeof newPassword !== 'string' || newPassword.length < 6) {
            console.error('Invalid password. Password must be a string and at least 6 characters long.');
            return
        }
        this.password=newPassword;
        return

       }
       else {
        console.log( alert("Password was not updated "));
       }
  }
 

}

let user1= new User("Gulchin","Isgandarova", 19, "Female","Azerbaijan","gulcinis77","gulcinis77@gmail.com",true,false,"1h21212121","loresjshnbjfrhnblerkfbrjrjrjrjjrjrjjjg")
let user2= new User("Ali","Ashraf",22,"Male","Azerbaijan","aliashraf","ali@ashr",false,true,"12sajsajsja","biiobiobiobio")
let user3= new User("Veli","Ashraf",22,"Male","Azerbaijan","beliiiiii","ali@ashr",false,true,"12sajsajsja","biiobiobiobio")

console.log(user2);
console.log(user1);
user2.changePassword("12sajsajsja","12");
console.log(user2);
 let users=[]
 users.push(user1,user2,user3)
 console.log(users);
users.sort((a,b) => {
    let name1= a.username.toLowerCase();
    let name2 = b.username.toLowerCase();

    if (name1 < name2) {
        return -1; 
    }
    if (name1 > name2) {
        return 1; 
    }
    return 0; 

} );

console.log(users);


// let il=user1.getBirthYear()
// const filterByBirthYear = users.filter((il) => getBirthYear > 2006)
// console.log(filterByBirthYear);

function filterByBirthYear(arr,year){
    const b = new Date();
    let currentYear=b.getFullYear()
    let filterAge= `${currentYear-year} `
    const filteredarr = arr.filter(user => user.age <=filterAge )
    console.log(filteredarr);
}


filterByBirthYear(users,2004);

function Login(username,password) {
    
    
}Login(users)

function login(users, username, password) {
    const foundUser = users.find(user => user.username === username);

    if (!foundUser) {
        console.error('User not found!');
        return;
    }

    if (foundUser.password !== password) {
        console.error('Incorrect username or password.');
        return;
    }

    if (foundUser.isLogged) {
        console.error('Another user currently logged in.');
        return;
    }

    foundUser.isLogged = true;
    console.log('Successfully logged in.');
    alert('Successfully logged in.');
}


// login(users, 'gulcinis77', '1h21212121'); 
// login(users, 'aliashraf', 'abc456'); 

function CreateUser(userss, newUser) {
    if (!(newUser instanceof User)) {
        throw new Error('Invalid user object. Expected instance of User.');
    }

    userss.push(newUser);
    console.log('User added successfully.');
}


let userss = [];

let user4 = new User("Xadija", "Madnayeva", 21, "Female", "French", "m.xadija", "m.xadijja@gmail.com", true, false, "xedice1", "loresjshnbjfrhnblerkfbrjrjrjrjjrjrjjjg");

CreateUser(userss, user4);

console.log(userss);


function DeleteUser(users, username) {
    const index = users.findIndex(user => user.username === username);

    if (index !== -1) {
        users.splice(index, 1);
        console.log(`User '${username}' has been deleted.`);
    } else {
        console.error(`User '${username}' not found.`);
    }
}
console.log("Before deletion:");
console.log(users);

DeleteUser(users, "aliashraf"); 
DeleteUser(users, "bilinmir"); 

console.log("After deletion:");
console.log(users);