
import { Calculator } from "./Calculator.js";
export class InteractWithCalculator {
  _gender;
  _height;
  _finalWeight;
  _minVolume;
  _maxVolume;
  calculator;
  _validGender = ["H", "F"];
  WEIGTH_TO_SUBS = 152.4;
  WEIGTH_TO_MUTIPLY = 0.91;
  MIN_VOLUME_MUTIPLY = 6.00;
  MAX_VOLUME_MUTIPLY = 8.00;

  constructor() {
    this.calculator = new Calculator();
  }

  init() {
    this.calculateHeight();
    this.getMinVolume();
    this.getMaxVolume();
    this.displayResult();
  }

  setHeight(height) {
    this._height = height;
  }

  setGender(gender) {
    this._gender = gender;
  }

  getMinVolume() {
    this._minVolume = Calculator.multiply(this._finalWeight, this.MIN_VOLUME_MUTIPLY);
  }

  getMaxVolume() {
    this._maxVolume = Calculator.multiply(this._finalWeight, this.MAX_VOLUME_MUTIPLY);
  }

  calculateHeight() {
    let newHeight = Calculator.substract(this._height, this.WEIGTH_TO_SUBS);
    let weight = Calculator.multiply(newHeight, this.WEIGTH_TO_MUTIPLY);

    if (this._gender == 'H') {
      this._finalWeight = Calculator.sum(weight, 50);
    } else {
      this._finalWeight = Calculator.sum(weight, 45);
    }
  }


  displayResult() {
    console.log(this._height);
    console.log(this._gender);
    console.log(this._finalWeight);
    console.log(this._minVolume);
    const titleResult = document.getElementById('titleResult');
    const subtitleResp = document.getElementById('subtitleResp');
    titleResult.innerHTML = "Le poids idéal en pour une personne de  <span class='data'>" +
      this._height +
      "cm </span> dont le sexe est <span class='data'>" +
      this._gender +
      "</span> est: <br><br> <span class='data'>" + Math.round(this._finalWeight, 2) + "</span>kg / <span class='data'>" + Math.round(this._finalWeight * 2.2, 2) + "</span> lbs";

    subtitleResp.innerHTML = "Le volume idéal est compris entre: <br><br> <span class='data'>" + Math.round(this._minVolume, 2) + "</span> - <span class='data'>" + Math.round(this._maxVolume, 2) + "</span> ml";
  }
}
