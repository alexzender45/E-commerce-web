 
 
 let users = [
   { 
        username: "samuel",
        password: "alex1"
    },
    {
        username: "mary",
        password: "sam45"
    },
    {
        username: "bobby",
        password: "man56"
    }
]
 
let person = [];
const user = document.getElementById('username');
const pass = document.getElementById('password');
hero = document.querySelector(".hero-text");
console.log(hero);
 function practice(){
if(user.value === users[0].username  && pass.value === users[0].password){
valid();
}else if(user.value === users[1].username  && pass.value === users[1].password){
    valid();
}else if(user.value === users[2].username  && pass.value === users[2].password){
    valid();
}else{
    document.getElementById('error').innerHTML = "<h3>Please your username or password is incorrect</h3>"; 
}
}

  function valid(){
    if(Object.values(users).indexOf(person)){
        person.push(user.value);
        person.push(pass.value);
        window.localStorage.setItem('user', JSON.stringify(person[0]));
        window.location.assign("../landing-page/landing.html");
         return false;
    }
}
