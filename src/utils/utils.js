const content = document.querySelector(".body");

const addButton = content.querySelector(".profile__button-add");
const addFormElement = content.querySelector(".popout-add__form");

const editButton = content.querySelector(".profile__button-edit");
const editFormElement = content.querySelector(".popout-edit__form");

const profileName = content.querySelector(".profile__info-name");
const profileAbout = content.querySelector(".profile__info-subtitle");
const profileImage = content.querySelector(".profile__image");
const profileImageHover = content.querySelector(".profile__image-hover");
const profileFormElement = content.querySelector(".popout-profile__form");

const popoutsConfig = [
  { formType: "edit", popoutSelector: ".popout-edit", openButton: editButton },
  { formType: "add", popoutSelector: ".popout-add", openButton: addButton },
  {
    formType: "profile",
    popoutSelector: ".popout-profile",
    openButton: profileImageHover,
  },
];

export {
  // addButton,
  addFormElement,
  // editButton,
  editFormElement,
  profileAbout,
  profileFormElement,
  profileImage,
  // profileImageHover,
  profileName,
  popoutsConfig,
};
