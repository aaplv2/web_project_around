import Popout from "./Popout";

export default class PopoutWithConfirmation extends Popout {
  constructor(popoutSelector, deleteCallback) {
    super(popoutSelector);
    this._deleteCallback = deleteCallback;
    this.submitHandle = this.submitHandle.bind(this);
    this._confirmButton = this._popoutElement.querySelector(
      ".popout-confirm__button"
    );
    this.setEventListeners();
  }
  open(cardId, cardElement) {
    this._cardId = cardId;
    this._cardElement = cardElement;
    super.open();
  }
  submitHandle() {
    evt.preventDefault();
    this._deleteCallback(this._cardId, this._cardElement);
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmButton.addEventListener("click", this.submitHandle);
  }
}
