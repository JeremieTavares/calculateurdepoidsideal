import {InteractWithCalculator} from "./Class/IntereractCalculator.js";
let calculator = new InteractWithCalculator();

const displayValue = () => {
  const genderChoice = document.querySelectorAll("input[type='radio']");
  const heightChoice = document.querySelector("input[type='number']");
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

      if (heightChoice.value != '') {
        console.log("allo");
        calculator.init();
      }
    })
  })

  heightChoice.addEventListener('input', () => {
    calculator.setHeight(heightChoice.value);

    if (genderChoice[0].checked || genderChoice[1].checked) {
      calculator.init();
    }
  })
}

displayValue();