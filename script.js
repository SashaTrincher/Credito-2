function generateRandomCardNumber() {
    const sections = Array.from({ length: 4 }, () => generateRandomCardSection());
    return sections.join('-');
}

function generateRandomCardSection() {
    return `${generateRandomCardDigit()}${generateRandomCardDigit()}${generateRandomCardDigit()}${generateRandomCardDigit()}`;
}

function generateRandomCardDigit() {
    return Math.floor(Math.random() * 10);
}

function generateRandomCvcSection() {
    return `${generateRandomCvcDigit()}${generateRandomCvcDigit()}${generateRandomCvcDigit()}`;
}

function generateRandomCvcDigit() {
    return Math.floor(Math.random() * 10);
}

function generateRandomCardDate() {
    const today = new Date();
    const futureDate = new Date(today.getFullYear() + 4, today.getMonth(), today.getDate());
    
    const lastTwoDigitsOfYear = futureDate.getFullYear() % 100;

    const formattedDate = `${futureDate.getMonth() + 1}/${lastTwoDigitsOfYear}`;
    return formattedDate;
}


function updateCardDetails() {
    
    const cardNumberElement = document.querySelector('.cardNumber');
    const randomCardNumber = generateRandomCardNumber();

    const cvcNumberElement = document.querySelector('.cardCvc');
    const cvcRandomNumber = generateRandomCvcSection();

    const cardDateElement = document.querySelector('.cardDate');
    const randomCardDate = generateRandomCardDate();

    cardNumberElement.textContent = randomCardNumber;
    cvcNumberElement.textContent = cvcRandomNumber;
    cardDateElement.textContent = randomCardDate;

}

function updateOutput() {

    const inputNameValue = document.querySelector('.userNameInput').value;
    document.querySelector('.userNameOutput').textContent = inputNameValue;

    const inputLastNameValue = document.querySelector('.userLastNameInput').value;
    document.querySelector('.userLastNameOutput').textContent = inputLastNameValue;
}

function submitForm(event) {

    event.preventDefault();

    const inputNameValue = document.querySelector('.userNameInput').value;
    const inputLastNameValue = document.querySelector('.userLastNameInput').value;
    const inputName = document.querySelector('.userNameInput');
    const inputLastName = document.querySelector('.userLastNameInput');
    const trigger = document.querySelector('.submit-button');

    if (inputNameValue.trim() !== '' && inputLastNameValue.trim() !== '' && isNaN(inputLastNameValue) && isNaN(inputNameValue)) {
        console.log('Correct');
        window.open('https://github.com/SashaTrincher')
    } else {
        if (inputNameValue.trim() === '' || !isNaN(inputNameValue)) {
            inputName.classList.add('error');
        }
        if (inputLastNameValue.trim() === '' || !isNaN(inputLastNameValue)) {
            inputLastName.classList.add('error');
        }
    }   
}

window.onload = function () {
    updateCardDetails();
};
