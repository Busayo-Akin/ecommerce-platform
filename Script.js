// SignUp

let userName = document.getElementById("fullname")
let email = document.getElementById("signupEmail")
let password = document.getElementById("signupPassword")
let ConfirmPassword = document.getElementById("SignupPasswordCon")

function validateInput(){
//  check if username is empty
if (userName.value.trim()===""){
    let parent =userName.parentElement;
    let errorMes = parent.querySelector('p');
    errorMes.style.visibility="visible";
    errorMes.innerText="Full Name Cannot be empty⚠️"
}else{
    let parent =userName.parentElement;
    let errorMes = parent.querySelector('p');
    errorMes.style.visibility="Hidden";
    errorMes.innerText=""
} 
if (email.value.trim()===""){
    let parent =email.parentElement;
    let errorMes = parent.querySelector('p');
    errorMes.style.visibility="visible";
    errorMes.innerText="Email Cannot be empty⚠️" 
}
}