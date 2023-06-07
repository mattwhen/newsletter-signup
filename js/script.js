const submitForm = document.getElementById('submit-form');
const emailEl = document.getElementById('input-email');

submitForm.addEventListener('click', (event) => {
    event.preventDefault(); // prevents the form from submitting by default, once the Subscribe button is clicked. 

    if(emailEl.value === '')  {
        showError();
    }  
    console.log(event.target);
});

const isEmailValid = (email) => {
    const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(email); // tests email validation
}

const showError = () => {
    alert('Field cannot be blank');
}