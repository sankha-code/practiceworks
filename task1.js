let h1=document.querySelector("h1");
let inc=document.querySelector("#inc");
let reset=document.querySelector("#reset")
let decr=document.querySelector("#decr");

let counter=0;

inc.addEventListener("click",()=>{
    counter++;
    h1.innerText=counter;
})
reset.addEventListener("click",()=>{
    counter=0;
    h1.innerText=counter;
})
decr.addEventListener("click",()=>{
    counter--;
    h1.innerText=counter;
})