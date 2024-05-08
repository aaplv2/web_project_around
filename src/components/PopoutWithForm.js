import Popout from "./Popout";

export default class PopoutWithForm extends Popout {
  constructor(formSubmitHandler, popoutSelector) {
    super(popoutSelector);
    this._formSubmitHandler = formSubmitHandler;
    this._submitHandle = this.submitHandle.bind(this);
  }
  _getInputValues() {
    this._inputList = Array.from(
      this._popoutElement.querySelectorAll(".form__input")
    );
    this._inputValues = {};
    this._inputList.forEach((inputElement) => {
      this._inputValues[inputElement.name] = inputElement.value;
    });
    return this._inputValues;
  }
  submitHandle(evt) {
    evt.preventDefault();
    this._formSubmitHandler(this._getInputValues());
    this.close();
  }
  setEventListeners() {
    super.setEventListeners();
    this._popoutElement.addEventListener("submit", this._submitHandle);
  }
  open() {
    super.open();
  }
  close() {
    super.close();
    this._popoutElement.reset;
  }
}
