const inputs = document.querySelectorAll('.userInput');
const triggerSubject = document.querySelector('.holder-container');

inputs.forEach(input => {
    input.addEventListener('click', () => {
        if (!triggerSubject.classList.contains('active')) {
            triggerSubject.classList.add('active');
        }

        if (input.classList.contains('error')) {
            input.classList.remove('error');
        }

        input.classList.add('active');
    });
});

inputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (triggerSubject.classList.contains('active')) {
            triggerSubject.classList.remove('active');
            input.classList.remove('active');
        }
    });
});
