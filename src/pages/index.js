import "../pages/index.css";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import Popout from "../components/Popout.js";
import PopoutWithForm from "../components/PopoutWithForm.js";
import PopoutWithImage from "../components/PopoutWithImage.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import api from "../components/Api.js";
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

const profileName = content.querySelector(".profile__info-name");
const profileAbout = content.querySelector(".profile__info-subtitle");
const profileImage = content.querySelector(".profile__image");
const profileImageHover = content.querySelector(".profile__image-hover");
const profileFormElement = content.querySelector(".popout-profile__form");

// const initialCards = [
//   {
//     name: "Lago di Braies",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
//   },
//   {
//     name: "Parque Nacional de la Vanoise",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
//   },
//   {
//     name: "Latemar",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
//   },
//   {
//     name: "Montañas Calvas",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
//   },
//   {
//     name: "Lago Louise",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
//   },
//   {
//     name: "Valle de Yosemite",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
//   },
// ];

let userInfo = new UserInfo({
  nameSelector: ".profile__info-name",
  aboutSelector: ".profile__info-subtitle",
  avatarSelector: ".profile__image",
});

api
  .getUserInfo()
  .then((user) => {
    profileName.textContent = user.name;
    profileAbout.textContent = user.about;
    profileImage.src = user.avatar;
    profileImage.alt = user.name;
    const userId = user._id;
    api
      .getInitialCards()
      .then((cards) => {
        renderSection = new Section(
          {
            items: cards,
            renderer: (card) => {
              const newCard = new Card(
                card.name,
                card.link,
                card.owner,
                card.likes,
                userId,
                "#card"
              );
              const cardElement = newCard.createCard();
              renderSection.addItem(cardElement);
            },
          },
          ".cards"
        );
      })
      .finally(() => {
        renderSection.render();
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

let renderSection;

// api
//   .getInitialCards()
//   .then((cards) => {
//     renderSection = new Section(
//       {
//         items: cards,
//         renderer: (card) => {
//           const newCard = new Card(
//             card.name,
//             card.link,
//             card.owner,
//             card.likes,
//             card._id,
//             userId,
//             "#card"
//           );
//           const cardElement = newCard.createCard();
//           renderSection.addItem(cardElement);
//         },
//       },
//       ".cards"
//     );
//   })
//   .finally(() => {
//     renderSection.render();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

function formTypeSelector(inputValues, formType) {
  if (formType === "edit") {
    api
      .updateUserInfo(nameInput.value, aboutInput.value, profileImage.src)
      .catch((err) => {
        console.log(err);
      });
    userInfo.setUserInfo({ name: nameInput.value, about: aboutInput.value });
  } else if (formType === "add") {
    api.addCard(titleInput.value, urlInput.value).catch((err) => {
      console.log(err);
    });
    const newCard = new Card(titleInput.value, urlInput.value, "#card");
    const cardElement = newCard.createCard();
    renderSection.addItem(cardElement);
  } else if (formType === "profile") {
    api.updateAvatar(profileImage.src).catch((err) => {
      console.log(err);
    });
    userInfo.setUserAvatar({ avatar: profileImage.src });
  }
}

const editPopout = new PopoutWithForm(
  (inputValues) => formTypeSelector(inputValues, "edit"),
  ".popout-edit"
);
editPopout.setEventListeners();

const newEditValidation = new FormValidator(
  {
    formSelector: content.querySelector(".form"),
    inputSelector: content.querySelectorAll(".form__input"),
    submitButtonSelector: content.querySelector(".form__submit"),
    inactiveButtonClass: content.querySelector(".form__submit_disabled"),
    inputErrorClass: content.querySelector(".form__input_type_error"),
    errorClass: content.querySelector(".form__input-error"),
  },
  editFormElement
);
newEditValidation.enableValidation();

const addPopout = new PopoutWithForm(
  (inputValues) => formTypeSelector(inputValues, "add"),
  ".popout-add"
);
addPopout.setEventListeners();

const newAddValidation = new FormValidator(
  {
    formSelector: content.querySelector(".form"),
    inputSelector: content.querySelectorAll(".form__input"),
    submitButtonSelector: content.querySelector(".form__submit"),
    inactiveButtonClass: content.querySelector(".form__submit_disabled"),
    inputErrorClass: content.querySelector(".form__input_type_error"),
    errorClass: content.querySelector(".form__input-error"),
  },
  addFormElement
);
newAddValidation.enableValidation();

const profilePopout = new PopoutWithForm(
  (inputValues) => formTypeSelector(inputValues, "profile"),
  ".popout-profile"
);
profilePopout.setEventListeners();

editButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  editPopout.open();
});
const newProfileValidation = new FormValidator(
  {
    formSelector: content.querySelector(".form"),
    inputSelector: content.querySelectorAll(".form__input"),
    submitButtonSelector: content.querySelector(".form__submit"),
    inactiveButtonClass: content.querySelector(".form__submit_disabled"),
    inputErrorClass: content.querySelector(".form__input_type_error"),
    errorClass: content.querySelector(".form__input-error"),
  },
  profileFormElement
);
newProfileValidation.enableValidation();

addButton.addEventListener("click", addPopout.open);

profileImageHover.addEventListener("click", profilePopout.open);
