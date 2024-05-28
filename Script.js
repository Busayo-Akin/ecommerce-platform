// SignUp

const form = document.getElementById("form")
const userName = document.getElementById("fullname")
const email = document.getElementById("signupEmail")
const password = document.getElementById("signupPassword")
const confirmPassword = document.getElementById("SignupPasswordCon")

form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs()
})

const error = (element, message) =>{
    let inputControl = element.parentElement
    let errorDisplay = inputControl.querySelector ('.error');

    errorDisplay.innerText = message
    inputControl.classList.add('error')
    inputControl.classList.remove('Success')
}

const Success = element =>{
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


function validateInputs() {
 const userNameValue = userName.value.trim();
 const emailValue = email.value.trim();
 const passwordValue = password.value.trim();
 const confirmPasswordValue = confirmPassword.value.trim();

    if (userName.value === ""){
        error (userName, "Full name can not be empty")
    }else{
        Success (userName)
    }

}