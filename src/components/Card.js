import PopoutWithImage from "./PopoutWithImage";
import PopoutWithForm from "./PopoutWithForm";
import api from "./Api";

export default class Card {
  constructor(title, url, owner, likes, userId, cardSelector) {
    this._title = title;
    this._url = url;
    this._owner = owner;
    this._likes = likes;
    this._userId = userId;
    this._cardSelector = cardSelector;
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

    const likesCount = this._likes.length;
    const buttonLike = this._cardElement.querySelector(".card__button-like");
    const buttonTrash = this._cardElement.querySelector(".card__button-trash");
    const cardImage = this._cardElement.querySelector(".card__image");
    const cardTitle = this._cardElement.querySelector(".card__title");
    const cardCounter = this._cardElement.querySelector(
      ".card__button-counter"
    );

    cardTitle.textContent = this._title;
    cardImage.alt = this._title;
    cardImage.src = this._url;
    cardCounter.textContent = likesCount;

    this._zoomRender = new PopoutWithImage(".popout-image");

    buttonLike.addEventListener("click", () => {
      this._activeLike();
      this._counterLike();
      api.handleLike(this._userId, buttonLike.classList.contains("active"));
    });

    buttonTrash.addEventListener("click", () => this._trashCard());

    cardImage.addEventListener("click", () => this._zoomImage());

    document.addEventListener("click", (evt) =>
      this._zoomRender.setEventListeners(evt)
    );

    this._likes.forEach((like) => {
      if (this._userId === like._id) {
        buttonLike.classList.add("active");
      }
    });

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

  _counterLike() {
    const buttonLike = this._cardElement.querySelector(".card__button-like");
    const buttonCounter = this._cardElement.querySelector(
      ".card__button-counter"
    );
    if (buttonLike.classList.contains("active")) {
      buttonCounter.textContent = Number(buttonCounter.textContent) + 1;
    } else {
      buttonCounter.textContent = Number(buttonCounter.textContent) - 1;
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
