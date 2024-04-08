const content = document.querySelector(".body");

const addButton = content.querySelector(".profile__button-add");
const addFormPopout = content.querySelector(".popout-add");
const addCloseButton = content.querySelector(".popout-add__button-close");
const addFormElement = content.querySelector(".popout-add__form");
const addSaveButton = content.querySelector(".popout-add__button-save");

const editButton = content.querySelector(".profile__button-edit");
const editFormPopout = content.querySelector(".popout-edit");
const editCloseButton = content.querySelector(".popout-edit__button-close");
const editFormElement = content.querySelector(".popout-edit__form");
const editSaveButton = content.querySelector(".popout-edit__button-save");

const imagePopout = content.querySelector(".popout-image");
const imageCloseButton = content.querySelector(".popout-image__button-close");

const overlayPopout = content.querySelector("#overlay");

const cardTemplate = document.querySelector("#card").content;
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

function createCard(card) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  cardElement.querySelector(".card__image").src = card.link;
  cardElement.querySelector(".card__image").alt = card.name;
  cardElement.querySelector(".card__title").textContent = card.name;

  cardElement
    .querySelector(".card__button-like")
    .addEventListener("click", () => activeLike(cardElement));

  cardElement
    .querySelector(".card__button-trash")
    .addEventListener("click", () => trashCard(cardElement));

  cardElement
    .querySelector(".card__image")
    .addEventListener("click", () => zoomImage(cardElement));

  return cardElement;
}

initialCards.forEach((card) => {
  const cardElement = createCard(card);
  document.querySelector(".cards").append(cardElement);
});

function zoomImage(cardElement) {
  imagePopout.classList.add("active");
  overlayPopout.classList.add("active");

  document.querySelector(".popout-image__image").src =
    cardElement.querySelector(".card__image").src;
  document.querySelector(".popout-image__image").alt =
    cardElement.querySelector(".card__title").textContent;
  document.querySelector(".popout-image__title").textContent =
    cardElement.querySelector(".card__title").textContent;
}

function trashCard(cardElement) {
  const buttonTrash = cardElement.querySelector("#button-trash");
  cardElement.remove(buttonTrash);
}

function activeLike(cardElement) {
  const buttonLike = cardElement.querySelector(".card__button-like");
  if (buttonLike.classList.contains("active")) {
    buttonLike.classList.remove("active");
  } else {
    buttonLike.classList.add("active");
  }
}

function renderEdit() {
  editFormPopout.classList.add("active");
  overlayPopout.classList.add("active");
  document.addEventListener("keydown", (evt) => escapeKeyClose(evt));
}

function renderAdd() {
  addFormPopout.classList.add("active");
  overlayPopout.classList.add("active");
  document.addEventListener("keydown", (evt) => escapeKeyClose(evt));
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  const nameInput = editFormElement.querySelector(".popout-edit__form-name");
  const aboutInput = editFormElement.querySelector(".popout-edit__form-text");

  const profileName = document.querySelector(".profile__info-name");
  const profileSubtitle = document.querySelector(".profile__info-subtitle");

  profileName.textContent = nameInput.value;
  profileSubtitle.textContent = aboutInput.value;

  closePopout();
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const titleInput = addFormElement.querySelector(".popout-add__form-title");
  const urlInput = addFormElement.querySelector(".popout-add__form-url");

  card.name = titleInput.value;
  card.link = urlInput.value;

  const cardElement = createCard(card);
  document.querySelector(".cards").prepend(cardElement);

  closePopout();
}

function closePopout() {
  editFormPopout.classList.remove("active");
  addFormPopout.classList.remove("active");
  imagePopout.classList.remove("active");
  overlayPopout.classList.remove("active");
}

function escapeKeyClose(evt) {
  if (evt.key === "Escape") {
    closePopout();
  }
  document.removeEventListener("keydown", escapeKeyClose);
}

editButton.addEventListener("click", renderEdit);
editFormElement.addEventListener("submit", (evt) => handleEditFormSubmit(evt));
editCloseButton.addEventListener("click", closePopout);

addButton.addEventListener("click", renderAdd);
addFormElement.addEventListener("submit", (evt) => handleAddFormSubmit(evt));
addCloseButton.addEventListener("click", closePopout);

imageCloseButton.addEventListener("click", closePopout);

overlayPopout.addEventListener("click", closePopout);
