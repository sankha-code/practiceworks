function verify(e){
    e.preventDefault();
    let username=document.querySelector("#email");
    let password=document.querySelector("#password");
    let data=JSON.parse(localStorage.getItem("register"));
    data.map((x)=>{
        if(x.email==username && xpassword==password){
            window.location.href="home.html"
            alert("login successful");
        }
        else{
            document.querySelector("#error").innerText="error";

        }
    })
}
document.querySelector("#btn").addEventListener("click",verify());