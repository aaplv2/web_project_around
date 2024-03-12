let content = document.querySelector(".body");
let editPopout = content.querySelector(".popout__edit");
let overlayPopout = content.querySelector("#overlay");
let editButton = content.querySelector(".profile__button-edit");
let closeButton = content.querySelector(".popout__button-close");
let formElement = content.querySelector(".popout__form");
let saveButton = content.querySelector(".popout__button-save");

function renderEdit() {
  editPopout.classList.add("active");
  overlayPopout.classList.add("active");
}

function closeEdit() {
  editPopout.classList.remove("active");
  overlayPopout.classList.remove("active");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  let nameInput = formElement.querySelector(".popout__form-name");
  let aboutInput = formElement.querySelector(".popout__form-about");

  const profileName = document.querySelector(".profile__info-name");
  const profileSubtitle = document.querySelector(".profile__info-subtitle");

  profileName.textContent = nameInput.value;
  profileSubtitle.textContent = aboutInput.value;

  saveButton.addEventListener("click", closeEdit);
}

editButton.addEventListener("click", renderEdit);
closeButton.addEventListener("click", closeEdit);
formElement.addEventListener("submit", handleProfileFormSubmit);
saveButton.addEventListener("click", closeEdit);
