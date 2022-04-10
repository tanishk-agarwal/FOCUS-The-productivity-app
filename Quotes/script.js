let quote=document.getElementById("qoute");
let author=document.getElementById("author");
let btn =document.getElementById("btn");

const url="https://api.quotable.io/random";
let getQoute=()=>{
    fetch(url).then((data)=>data.json())
    .then((item)=>{
        console.log(item.content);
        console.log(item.author);
        quote.innerHTML=item.content;
        author.innerHTML=item.author;

    });
}

let image=document.getElementById("image");
let images= [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",

]
setInterval(function(){
    let random=Math.floor(Math.random()*images.length)
    image.src=images[random];

},1000);
window.addEventListener("load",getQoute);
btn.addEventListener("click",getQoute);
