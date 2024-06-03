export default class Popout {
  constructor(popoutSelector) {
    this._popoutElement = document.querySelector(popoutSelector);
    this.overlay = document.querySelector("#overlay");
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleTargetClose = this._handleTargetClose.bind(this);
  }
  open() {
    this._popoutElement.classList.add("active");
    document.querySelector("#overlay").classList.add("active");
    document.addEventListener("keydown", this._handleEscClose);
    this.setEventListeners();
  }
  close() {
    this._popoutElement.classList.remove("active");
    document.querySelector("#overlay").classList.remove("active");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  _handleTargetClose(evt) {
    if (evt.target.classList.contains("close")) {
      this.close();
    }
  }
  setEventListeners() {
    this._popoutElement.addEventListener("click", this._handleTargetClose);
    this.overlay.addEventListener("click", this.close);
  }
}
