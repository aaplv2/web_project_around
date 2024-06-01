import api from "./Api";

export default class Card {
  constructor(
    title,
    url,
    owner,
    likes,
    cardId,
    userId,
    cardSelector,
    zoomCallback,
    deleteCallback
  ) {
    this._title = title;
    this._url = url;
    this._owner = owner;
    this._likes = likes;
    this._cardId = cardId;
    this._userId = userId;
    this._cardSelector = cardSelector;
    this._zoomCallback = zoomCallback;
    this._deleteCallback = deleteCallback;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._cardSelector)
      .cloneNode(true)
      .content.querySelector(".card");
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

    if (this._userId !== this._owner._id) {
      buttonTrash.remove();
    }

    cardTitle.textContent = this._title;
    cardImage.alt = this._title;
    cardImage.src = this._url;
    cardCounter.textContent = likesCount;

    buttonLike.addEventListener("click", () => {
      this._activeLike();
      this._counterLike();
      api.handleLike(this._cardId, buttonLike.classList.contains("active"));
    });

    cardImage.addEventListener("click", () => {
      this._zoomCallback(this._title, this._url);
    });

    this._likes.forEach((like) => {
      if (this._userId === like._id) {
        buttonLike.classList.add("active");
      }
    });

    buttonTrash.addEventListener("click", () =>
      this._deleteCallback(this._cardId, this._cardElement)
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

  _deleteCard() {
    this._buttonTrash = this._cardElement.querySelector("#button-trash");
    this._cardElement.remove(this._buttonTrash);
  }
}
