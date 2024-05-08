import "../pages/index.css";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import Popout from "../components/Popout.js";
import PopoutWithForm from "../components/PopoutWithForm.js";
import PopoutWithImage from "../components/PopoutWithImage.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
// import renderEdit,
// renderAdd,
// closePopout,
// escapeKeyClose,
// "../components/utils.js";

const content = document.querySelector(".body");

const addButton = content.querySelector(".profile__button-add");
const addCloseButton = content.querySelector(".popout-add__button-close");
const addFormElement = content.querySelector(".popout-add__form");

const editButton = content.querySelector(".profile__button-edit");
const editCloseButton = content.querySelector(".popout-edit__button-close");
const editFormElement = content.querySelector(".popout-edit__form");

const imageCloseButton = content.querySelector(".popout-image__button-close");

const overlayPopout = content.querySelector("#overlay");

const nameInput = editFormElement.querySelector(".popout-edit__form-name");
const aboutInput = editFormElement.querySelector(".popout-edit__form-text");

const titleInput = addFormElement.querySelector(".popout-add__form-title");
const urlInput = addFormElement.querySelector(".popout-add__form-url");

const initialCards = [
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
];

const userInfo = new UserInfo({
  nameSelector: ".profile__info-name",
  aboutSelector: ".profile__info-subtitle",
});

const renderSection = new Section(
  {
    items: initialCards,
    renderer: (card) => {
      const newCard = new Card(card.name, card.link, "#card");
      const cardElement = newCard.createCard();
      renderSection.addItem(cardElement);
    },
  },
  ".cards"
);

renderSection.render();

function formTypeSelector(inputValues, formType) {
  if (formType === "edit") {
    userInfo.setUserInfo({ name: nameInput.value, about: aboutInput.value });
  } else if (formType === "add") {
    const newCard = new Card(titleInput.value, urlInput.value, "#card");
    const cardElement = newCard.createCard();
    renderSection.addItem(cardElement);
  }
}

const editPopout = new PopoutWithForm(
  (inputValues) => formTypeSelector(inputValues, "edit"),
  ".popout-edit"
);
editPopout.setEventListeners();

const addPopout = new PopoutWithForm(
  (inputValues) => formTypeSelector(inputValues, "add"),
  ".popout-add"
);
addPopout.setEventListeners();

editButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  editPopout.open();
});

addButton.addEventListener("click", addPopout.open);

// function handleEditFormSubmit(evt) {
//   evt.preventDefault();
//   const nameInput = editFormElement.querySelector(".popout-edit__form-name");
//   const aboutInput = editFormElement.querySelector(".popout-edit__form-text");

//   const profileName = document.querySelector(".profile__info-name");
//   const profileSubtitle = document.querySelector(".profile__info-subtitle");

//   profileName.textContent = nameInput.value;
//   profileSubtitle.textContent = aboutInput.value;

//   document.addEventListener("keydown", (evt) => escapeKeyClose(evt));

//   closePopout();

//   nameInput.value = "";
//   aboutInput.value = "";
// }

// function handleAddFormSubmit(evt) {
//   evt.preventDefault();
//   const titleInput = addFormElement.querySelector(".popout-add__form-title");
//   const urlInput = addFormElement.querySelector(".popout-add__form-url");

//   card.name = titleInput.value;
//   card.link = urlInput.value;

//   const newCard = new Card(card.name, card.link, "#card");
//   const cardElement = newCard.createCard();
//   document.querySelector(".cards").prepend(cardElement);

//   document.addEventListener("keydown", (evt) => escapeKeyClose(evt));

//   closePopout();

//   titleInput.value = "";
//   urlInput.value = "";
// }

// editFormElement.addEventListener("submit", (evt) => handleEditFormSubmit(evt));
// editCloseButton.addEventListener("click", closePopout);

// addFormElement.addEventListener("submit", (evt) => handleAddFormSubmit(evt));
// addCloseButton.addEventListener("click", closePopout);

// imageCloseButton.addEventListener("click", closePopout);

// overlayPopout.addEventListener("click", closePopout);
