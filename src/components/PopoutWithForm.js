import Popout from "./Popout";

export default class PopoutWithForm extends Popout {
  constructor(formSubmitHandler, popoutSelector) {
    super(popoutSelector);
    this.close = this.close.bind(this);
    this._formSubmitHandler = formSubmitHandler;
    this._submitHandle = this.submitHandle.bind(this);
    this._buttonSubmit = this._popoutElement.querySelector(".form__submit");
    this._inputList = Array.from(
      this._popoutElement.querySelectorAll(".form__input")
    );
  }
  _getInputValues() {
    const inputObj = {};
    this._inputList.forEach((inputElement) => {
      inputObj[inputElement.name] = inputElement.value;
    });
    return inputObj;
  }
  submitHandle(evt) {
    evt.preventDefault();
    this._buttonSubmit.textContent = "Guardando...";
    this._formSubmitHandler(this._getInputValues());
    this.close();
    this._inputList.forEach((inputElement) => {
      inputElement.value = "";
    });
  }
  setEventListeners() {
    super.setEventListeners();
    this._popoutElement.addEventListener("submit", this._submitHandle);
  }
  open() {
    super.open();
    this._buttonSubmit.textContent = "Guardar";
  }
  close() {
    super.close();
    this._buttonList = document.querySelectorAll(".form__submit");
    this._buttonList.forEach((buttonElement) => {
      buttonElement.classList.add("form__submit_inactive");
      buttonElement.setAttribute("disabled", "true");
    });
  }
}
