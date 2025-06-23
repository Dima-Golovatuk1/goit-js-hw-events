const input = document.getElementById('validation-input');


function onValidationInput(){
    const expectedLength = Number(input.dataset.length);
    const actualLength = input.value.length;

    input.classList.remove('valid', 'invalid');

    if (actualLength === expectedLength) {
        input.classList.add('valid');
    } else {
        input.classList.add('invalid');
    }
}


input.addEventListener('blur', onValidationInput);



