const form = document.querySelector('form');
const email = form.querySelector('input');
let errorText = form.querySelector('.error-text');

function onSubmit(e) {
    e.preventDefault();
    let emailValue = email.value;
    if(emailValue == ''){
    form.classList.add('error')
    errorText.textContent = 'Email cannot be empty'
    }
    else {
        form.classList.add('error')
        errorText.textContent = 'Please enter a valid email';
        if(validateEmail(emailValue)){
            form.classList.remove('error')
            }
        } 
}

form.addEventListener('submit', onSubmit);



const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };