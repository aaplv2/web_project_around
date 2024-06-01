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
  // addButton,
  addFormElement,
  // editButton,
  editFormElement,
  profileFormElement,
  profileImage,
  // profileImageHover,
  profileName,
  popoutsConfig,
} from "../utils/utils.js";

const zoomRender = new PopoutWithImage(".popout-image");

const deleteConfirmation = new PopoutWithConfirmation(
  ".popout-confirm",
  (cardId, cardElement) => {
    confirmationSubmit(cardId, cardElement);
  }
);

let userInfo = new UserInfo({
  nameSelector: ".profile__info-name",
  aboutSelector: ".profile__info-subtitle",
  avatarSelector: ".profile__image",
});

new FormValidator(editFormElement);
new FormValidator(addFormElement);
new FormValidator(profileFormElement);

let renderSection;

api
  .getUserInfo()
  .then((user) => {
    userInfo.setUserInfo(user);
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
              generateCardInstance(
                card.name,
                card.link,
                card.owner,
                card.likes,
                card._id,
                userId,
                "#card",
                zoomRender.open,
                deleteConfirmation.open
              );
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
      generateCardInstance(
        inputValues.cardTitle,
        inputValues.cardUrl,
        card.owner,
        card.likes,
        card._id,
        profileName.id,
        "#card",
        zoomRender.open,
        deleteConfirmation.open
      );
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

function generateCardInstance(
  title,
  url,
  owner,
  likes,
  cardId,
  userId,
  selector,
  handleCardClick,
  handleDeleteClick
) {
  const newCard = new Card(
    title,
    url,
    owner,
    likes,
    cardId,
    userId,
    selector,
    handleCardClick,
    handleDeleteClick
  );
  const cardElement = newCard.createCard();
  renderSection.addItem(cardElement);
}
popoutsConfig.forEach((popoutType) => {
  const popOut = new PopoutWithForm(
    (inputValues) => formTypeSelector(inputValues, popoutType.formType),
    popoutType.popoutSelector
  );
  popoutType.openButton.addEventListener("click", popOut.open);
});
