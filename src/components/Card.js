import PopoutWithImage from "./PopoutWithImage";

export default class Card {
  constructor(title, url, cardSelector) {
    this._title = title;
    this._url = url;
    this._cardSelector = cardSelector;
    this._zoomRender = new PopoutWithImage(".popout-image");
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardTemplate;
  }

  createCard() {
    this._cardElement = this._getTemplate();

    this._cardElement.querySelector(".card__title").textContent = this._title;
    this._cardElement.querySelector(".card__image").alt = this._title;
    this._cardElement.querySelector(".card__image").src = this._url;

    this._cardElement
      .querySelector(".card__button-like")
      .addEventListener("click", () => this._activeLike());

    this._cardElement
      .querySelector(".card__button-trash")
      .addEventListener("click", () => this._trashCard());

    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => this._zoomImage());

    document.addEventListener("click", (evt) =>
      this._zoomRender.setEventListeners(evt)
    );

    return this._cardElement;
  }

  _activeLike() {
    const buttonLike = this._cardElement.querySelector(".card__button-like");
    if (buttonLike.classList.contains("active")) {
      buttonLike.classList.remove("active");
    } else {
      buttonLike.classList.add("active");
    }
  }

  _trashCard() {
    this._buttonTrash = this._cardElement.querySelector("#button-trash");
    this._cardElement.remove(this._buttonTrash);
  }

  _zoomImage() {
    this._imagePopout = document.querySelector(".popout-image");
    this._overlayPopout = document.querySelector("#overlay");

    this._imagePopout.classList.add("active");
    this._overlayPopout.classList.add("active");

    document.querySelector(".popout-image__image").src =
      this._cardElement.querySelector(".card__image").src;
    document.querySelector(".popout-image__image").alt =
      this._cardElement.querySelector(".card__title").textContent;
    document.querySelector(".popout-image__title").textContent =
      this._cardElement.querySelector(".card__title").textContent;

    document.addEventListener("keydown", (evt) =>
      this._zoomRender._handleEscClose(evt)
    );

    return this._imagePopout;
  }
}
