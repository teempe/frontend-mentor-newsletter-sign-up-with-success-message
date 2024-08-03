const signupCard = document.querySelector(".card--signup");
const signupForm = signupCard.querySelector(".signup-form");
const emailInput = signupForm.querySelector("input[type='email']");
const successCard = document.querySelector(".card--success");
const dismissBtn = successCard.querySelector("button");
const emailTxt = successCard.querySelector(".text-content__email");


const validateEmail = email => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
    return emailPattern.test(email);
}

const toggleShowSuccessCard = (email="ash@loremcompany.com") => {
    emailTxt.innerText = email;
    signupCard.classList.toggle("card--hidden");
    successCard.classList.toggle("card--hidden");
}

const renderInputError = () => {
    signupForm.querySelector(".form-input").classList.add("form-input--error");
}

const clearInputError = () => {
    signupForm.querySelector(".form-input").classList.remove("form-input--error");
}

const clearInputValue = () => {
    emailInput.value = "";
}

const handleFormSubmit = event => {
    event.preventDefault();

    const email = emailInput.value.trim();
    if (validateEmail(email)) {        
        toggleShowSuccessCard(email);
    } else {
        renderInputError();
    }
}

const handleDismissMessage = event => {
    toggleShowSuccessCard();
    clearInputValue();
    clearInputError();
}

const handleKeyPress = event => {
    // Escape clean up form (even if form is not focused)
    if (event.key === 'Escape') {
        clearInputValue();
        clearInputError();
        return;
    }
}

signupForm.addEventListener("submit", handleFormSubmit);
dismissBtn.addEventListener("click", handleDismissMessage);
document.body.addEventListener('keydown', handleKeyPress);
