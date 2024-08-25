const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const lastname_input = document.getElementById('lastname-input')
const email_input = document.getElementById('email-input')
//const password_input = document.getElementById('password-input')
//const repeat_password_input = document.getElementById('repeat-password-input')
const error_message = document.getElementById('error-message')

form.addEventListener('submit',(e)=>{
    // e.preventDefault() Prevent Submit
    let errors = []
    if(firstname_input){
        // If we have a firstname input then we are in the signup page.
        errors = getSignupFormErrors(firstname_input.value,lastname_input.value,email_input.value,)
    }
    else{
        // If we don't have a firstname input then we are in the login page.
        errors = getLoginFormErrors(email_input.value, password_input.value)
    }

    if(errors.length > 0){
        // If there are any errors
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }
})

function getSignupFormErrors(firstname,lastname,email){
    let errors = []

    if(firstname=== '' || firstname== null){
        errors.push('FirstName is required.')
        firstname_input.parentElement.classList.add('incorrect')
    }
    if(lastname=== '' || lastname== null){
        errors.push('LastName is required.')
        lastname_input.parentElement.classList.add('incorrect')
    }if(email=== '' || email== null){
        errors.push('Email is required.')
        email_input.parentElement.classList.add('incorrect')
    //}if(password=== '' || password== null){
      //  errors.push('Password is required.')
        //password_input.parentElement.classList.add('incorrect')
    //}
    //if(password.length < 8){
      //  errors.push('Password must have 8 characters')
        //password_input.parentElement.classList.add('incorrect')
    //}
    //if(password !== repeatPassword){
      //  errors.push('Password does not match the repeated Password')
        //password_input.parentElement.classList.add('incorrect')
        //repeat_password_input.parentElement.classList.add('incorrect')
    }
    return errors;
}
function getLoginFormErrors(email, password){
    let errors = []
  
    if(email === '' || email == null){
      errors.push('Email is required')
      email_input.parentElement.classList.add('incorrect')
    }
    if(password === '' || password == null){
      errors.push('Password is required')
      password_input.parentElement.classList.add('incorrect')
    }
  
    return errors;
  }
const allInputs =  [firstname_input,lastname_input,email_input,password_input,repeat_password_input].filter(input => input != null)

allInputs.forEach(input =>{
    input.addEventListener('input',() =>{
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            error_message.innerText = ''
        }
    })
})