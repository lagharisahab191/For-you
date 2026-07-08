setTimeout(function(){

document.getElementById("loader").style.display="none";
document.getElementById("welcome").style.display="flex";

},4000);


const gift=document.getElementById("giftBox");

gift.onclick=function(){

gift.classList.add("shake");

setTimeout(function(){

gift.style.display="none";

document.getElementById("clickText").style.display="none";

document.getElementById("birthdayMessage").style.display="block";

},600);


for(let i=0;i<40;i++){

let c=document.createElement("div");

c.innerHTML="🎉";

c.className="confetti";

c.style.left=Math.random()*100+"vw";

c.style.animationDelay=Math.random()+"s";

document.body.appendChild(c);

}

};
const letterBtn=document.getElementById("letterBtn");

const letterBox=document.getElementById("letterBox");

letterBtn.onclick=function(){

letterBtn.style.display="none";

letterBox.style.display="block";

window.scrollTo({

top:document.body.scrollHeight,

behavior:"smooth"

});

};
const galleryBtn=document.getElementById("galleryBtn");
const gallery=document.getElementById("gallery");
const galleryImage=document.getElementById("galleryImage");

const images=[

"https://ibb.co/FL101gB7",

"https://ibb.co/NHQVtRQ",

"https://ibb.co/4ZxrpkJ8",

"https://ibb.co/MDWqMFw9",

"https://ibb.co/S7sSWQFd",

"	https://i.ibb.co/bMnmqV5r/79c7a11e-395d-4f13-8faa-61f815fa63d5.png"

];

let current=0;

galleryBtn.onclick=function(){

galleryBtn.style.display="none";

gallery.style.display="block";

galleryImage.src=images[current];

};

nextBtn.onclick=function(){

current++;

if(current>=images.length){

current=0;

}

galleryImage.src=images[current];

};

prevBtn.onclick=function(){

current--;

if(current<0){

current=images.length-1;

}

galleryImage.src=images[current];

};