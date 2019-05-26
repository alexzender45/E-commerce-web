//import {practice} from '../login-page/login.js';

 const cards = document.querySelectorAll(".container .card");
 const img  = document.querySelectorAll(".container img");
 const latest = document.getElementById("latest");
 const hero = document.querySelector(".hero-text");
 const head = document.querySelector('.header');
 const nav = document.querySelector('ul');
 const con = document.querySelectorAll('.content h3');
 const man = document.querySelectorAll('.img');
 const num = document.querySelectorAll('.num');
 const show = document.getElementById("show").innerHTML = (JSON.parse(window.localStorage.getItem('user')));


 window.localStorage.clear();
 let content = [
    {
        image: "https://www.360nobs.com/wp-content/uploads/2015/07/Powder.png",
        price: "$40",
        name: "EyeLence"
    }
]

// assign to html
// for image
 man[0].src = content[0].image;
 man[1].src = content[0].image;
 man[2].src = content[0].image;
 man[3].src = content[0].image;



 // for price
num[0].innerHTML = content[0].price;
num[1].innerHTML = content[0].price;
num[2].innerHTML = content[0].price;
num[3].innerHTML = content[0].price;


// fro price
 con[0].innerHTML = content[0].name;
 con[1].innerHTML = content[0].name;
 con[2].innerHTML = content[0].name;
 con[3].innerHTML = content[0].name;

 
// loop for img
let check = [];
for(let i = 0; i < img.length; i++){
    check.push(img[i]);
}
check.forEach(checks =>{
checks.addEventListener('mouseover', () =>{
    checks.style.height = "110%";
    checks.style.width = "110%";
    

    checks.addEventListener('mouseout', () =>{
        checks.style.height = "85%";
        checks.style.width = "90%";

});
});
});
 
// loop for cards
let change = [];
for(let i = 0; i < cards.length; i++){
    change.push(cards[i]);
}
change.forEach(changes =>{
    changes.addEventListener('mouseover', () =>{
        changes.style.color = "deeppink";
    
        changes.addEventListener('mouseout', () =>{
            changes.style.color = "black";
          
    });
    });
    });
// latest

latest.addEventListener('mouseover', () =>{
    latest.style.color = "deeppink";
});

latest.addEventListener('mouseout', () =>{
    latest.style.color = "black";
});

// hero  
hero.addEventListener('mouseover', () =>{
    hero.innerHTML = "<h1>We Are Happy To See You Here</h1>";
});
hero.addEventListener('mouseout', () =>{
    hero.innerHTML = "<h1>We Give You The Best</h1>";
});



//head

head.addEventListener('mouseover', () =>{
    head.style.backgroundColor = "deeppink";
});

head.addEventListener('mouseout', () =>{
    head.style.backgroundColor = "skyblue";
})

// nav

nav.addEventListener('mouseover', () =>{
    nav.style.backgroundColor = "deeppink";
});

nav.addEventListener('mouseout', () =>{
    nav.style.backgroundColor = "skyblue";
});