import Popout from "./Popout";

export default class PopoutWithForm extends Popout {
  constructor(formSubmitHandler, popoutSelector) {
    super(popoutSelector);
    this._formSubmitHandler = formSubmitHandler;
    this._submitHandle = this.submitHandle.bind(this);
    this._form = this._popoutElement.querySelector(".form");
  }
  _getInputValues() {
    this._inputList = Array.from(
      this._popoutElement.querySelectorAll(".form__input")
    );
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
    this._form.reset();
    this._buttonList = document.querySelectorAll(".form__submit");
    this._buttonList.forEach((buttonElement) => {
      buttonElement.classList.add("form__submit_inactive");
      buttonElement.setAttribute("disabled", "true");
    });
  }
}
