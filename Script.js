// SignUp

function signUp() {
const form = document.getElementById("form").value;
let userName = document.getElementById("fullname").value;
let email = document.getElementById("signupEmail").value;
let password = document.getElementById("signupPassword");
let confirmPassword = document.getElementById("SignupPasswordCon");

let userSignUp = {
    userName: userName,
    email: email,
    password: password,
    confirmPassword: confirmPassword
}
console.log (userSignUp)

form.addEventListener('submit', e =>{
    e.preventDefault();
    validateInputs()
})

const errorMes = (element, message) =>{
    let inputControl = element.parentElement
    let errorDisplay = inputControl.querySelector ('.error');

    errorDisplay.innerText = message
    inputControl.classList.add('error')
    inputControl.classList.remove('Success')
}

const SuccessMes = element =>{
    let inputControl = element.parentElement
    let errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = "";
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


const validateInputs = () => {
 const userNameValue = userName.value.trim();
 const emailValue = email.value.trim();
 const passwordValue = password;
 const confirmPasswordValue = confirmPassword.value.trim();

    if (userNameValue === ""){
        setError(userName, "Full name can not be empty");
    } else {
        setSuccess (userName);
    }

}
}