import Popout from "./Popout";

export default class PopoutWithForm extends Popout {
  constructor(formSubmitHandler, popoutSelector) {
    this._formSubmitHandler = formSubmitHandler;
    this._form = document.querySelector(".form");
    super(popoutSelector);
  }
  _getInputValues() {
    this._inputList = Array.from(
      popoutSelector.querySelectorAll(".form__input")
    );
    this._inputList.forEach((inputElement) => {
      this._inputValues = inputElement.value;
    });
    return this._inputValues;
  }
  handleSubmitEdit(evt) {
    evt.preventDefault();
    this._formSubmitHandler(this._getInputValues(), "edit");
    this.close();
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._formSubmitHandler);
  }
  open() {
    super.open();
  }
  close() {
    super.close();
    popoutSelector.reset();
  }
}
