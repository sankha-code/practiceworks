document.querySelector("#btn").addEventListener("click",()=>{
    let color="#";
    for(let i=0;i<6;i++){
        color=color+parseInt(Math.random()*10);

    }
    console.log(color);
document.querySelector("#box").style.backgroundColor=color;

})
let child=document.querySelector("#child")
child.addEventListener("hover",()=>{
    child.style.backgroundColor=red;
})