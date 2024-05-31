import "../pages/index.css";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopoutWithForm from "../components/PopoutWithForm.js";
import PopoutWithImage from "../components/PopoutWithImage.js";
import PopoutWithConfirmation from "../components/PopoutWithConfirmation.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import api from "../components/Api.js";
import {
  addButton,
  addFormElement,
  editButton,
  editFormElement,
  profileAbout,
  profileFormElement,
  profileImage,
  profileImageHover,
  profileName,
} from "../utils/utils.js";

const zoomRender = new PopoutWithImage(".popout-image");

const deleteConfirmation = new PopoutWithConfirmation(
  ".popout-confirm",
  (cardId, cardElement) => {
    confirmationSubmit(cardId, cardElement);
  }
);
deleteConfirmation.setEventListeners();

function confirmationSubmit(cardId, cardElement) {
  api
    .deleteCard(cardId)
    .then(() => {
      const deleteButton = cardElement.querySelector("#button-trash");
      cardElement.remove(deleteButton);
      deleteConfirmation.close();
    })
    .catch((err) => {
      console.log(err);
    });
}

let userInfo = new UserInfo({
  nameSelector: ".profile__info-name",
  aboutSelector: ".profile__info-subtitle",
  avatarSelector: ".profile__image",
});

let renderSection;

api
  .getUserInfo()
  .then((user) => {
    profileName.textContent = user.name;
    profileAbout.textContent = user.about;
    profileName.id = user._id;
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
                card._id,
                userId,
                "#card",
                () => {
                  zoomRender.open(card.name, card.link);
                },
                deleteConfirmation.open
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

const editPopout = new PopoutWithForm(
  (inputValues) => formTypeSelector(inputValues, "edit"),
  ".popout-edit"
);
editPopout.setEventListeners();

const newEditValidation = new FormValidator(editFormElement);
newEditValidation.enableValidation();

const addPopout = new PopoutWithForm(
  (inputValues) => formTypeSelector(inputValues, "add"),
  ".popout-add"
);
addPopout.setEventListeners();

const newAddValidation = new FormValidator(addFormElement);
newAddValidation.enableValidation();

const profilePopout = new PopoutWithForm(
  (inputValues) => formTypeSelector(inputValues, "profile"),
  ".popout-profile"
);
profilePopout.setEventListeners();

const newProfileValidation = new FormValidator(profileFormElement);
newProfileValidation.enableValidation();

function editSubmit(inputValues) {
  api
    .updateUserInfo(inputValues.profileName, inputValues.profileAbout)
    .then(
      userInfo.setUserInfo({
        name: inputValues.profileName,
        about: inputValues.profileAbout,
      })
    )
    .catch((err) => {
      console.log(err);
    });
}

function addSubmit(inputValues) {
  api
    .addCard(inputValues.cardTitle, inputValues.cardUrl)
    .then((card) => {
      const newCard = new Card(
        inputValues.cardTitle,
        inputValues.cardUrl,
        card.owner,
        card.likes,
        card._id,
        profileName.id,
        "#card",
        () => {
          zoomRender.open(card.name, card.link);
        },
        deleteConfirmation.open
      );
      const cardElement = newCard.createCard();
      renderSection.addItem(cardElement);
    })
    .catch((err) => {
      console.log(err);
    });
}

function profileSubmit(inputValues) {
  api
    .updateAvatar(inputValues.avatarUrl)
    .then(userInfo.setUserAvatar({ avatar: inputValues.avatarUrl }))
    .catch((err) => {
      console.log(err);
    });
}

function formTypeSelector(inputValues, formType) {
  if (formType === "edit") {
    editSubmit(inputValues);
  } else if (formType === "add") {
    addSubmit(inputValues);
  } else if (formType === "profile") {
    profileSubmit(inputValues);
  }
}

editButton.addEventListener("click", editPopout.open);
addButton.addEventListener("click", addPopout.open);
profileImageHover.addEventListener("click", profilePopout.open);
