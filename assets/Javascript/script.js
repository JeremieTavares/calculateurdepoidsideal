import { InteractWithCalculator } from "./Class/IntereractCalculator.js";
let calculator = new InteractWithCalculator();

const displayValue = () => {
    const genderChoice = document.querySelectorAll("input[type='radio']");
    const heightChoice = document.querySelector("input[type='text']");
    const HEIGHT_REGEX = /^[1-9]*\.?[0-9]{0,2}$/;
    genderChoice.forEach(radio => {
        radio.addEventListener('click', (e) => {
            switch (e.target.id) {
                case 'homme':
                    genderChoice[1].parentElement.classList.add('unchecked')
                    genderChoice[0].parentElement.classList.remove('unchecked')
                    calculator.setGender('H');
                    break;
                case 'femme':
                    genderChoice[0].parentElement.classList.add('unchecked')
                    genderChoice[1].parentElement.classList.remove('unchecked')
                    calculator.setGender('F');
                    break;
            }

            if (heightChoice.value != '' && heightChoice.value.match(HEIGHT_REGEX)) {
                calculator.init();
            }

        })
    })

    heightChoice.addEventListener('input', () => {

        if (!heightChoice.value.match(HEIGHT_REGEX)) {
            heightChoice.classList.add("is-invalid");
        } else {
            heightChoice.classList.remove("is-invalid");
        }

        calculator.setHeight(heightChoice.value);

        if ((genderChoice[0].checked || genderChoice[1].checked) && heightChoice.value.match(HEIGHT_REGEX)) {
            calculator.init();
        }
    })
}

displayValue();