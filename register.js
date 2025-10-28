let fname=document.querySelector("#name");
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let cpassword=document.querySelector("#cpassword");

let nameError=document.querySelector("#nameError");
let emailError=document.querySelector("#emailError");
let passwordError=document.querySelector("#passwordError");
let cpasswordError=document.querySelector("#cpasswordError");
let btn=document.querySelector("#btn");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let isValid=true;
    if(fname.value.trim().length=="" || fname.value.trim().length<2){
        nameError.innerText="please enter a name with value greater than 2"
        isValid=false;

    }
    if(email.value.trim().length==""){
        emailError.innerText="please enter a email";
        isValid=false;
    }
    if(password.value.length=="" || password.value.length<=2){
        passwordError.innerText="password length is lesser than 2";
        isValid=false;
    }
    if(password.value.length==0||password.value.length<8){
        passwordError.innerText="password length must me greater than 8";
        isvalid=false;
    }
    else{
        let haslower=false;
        let hasupper=false;
        let hasnumber=false;
        let hasspecial=false;
        let password1=password.value;
        for(let i=0;i<password1.length;i++){
            let char=password1[i];
            if(char>='a' && char<='z'){
                haslower=true;
            }
            else if(char>='A' && char<='Z'){
                hasupper=true;
            }
            else if(char>='0' && char<='9'){
                hasnumber=true;
            }
            else{
                hasspecial=true
            }

        }
        if(!haslower || !hasupper || !hasnumber || !hasspecial){
            isvalid=false;
            passwordError.innerText="password is weak";
        }
        if(password.value!=cpassword.value){
        cpasswordError.innerText="password mismatch";
        isvalid=false;

    }

    }
    if(isValid){
        let users=JSON.parse(localStorage.getItem("register")) || []
        let payload={
            name:fname.value,
            email:email.value,
            password:password.value,
            confirmpassword:cpassword.value
        }
        users.push(payload);
        localStorage.setItem("register",JSON.stringify(users));
        alert("successfully register");
        window.location.href="./login.html";
        document.querySelector("#register").reset();

    }
   


})