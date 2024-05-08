// import FormValidator from "./FormValidator.js";

// const content = document.querySelector(".body");

// const imagePopout = content.querySelector(".popout-image");
// const overlayPopout = content.querySelector("#overlay");

// const editFormPopout = content.querySelector(".popout-edit");
// const editFormElement = content.querySelector(".popout-edit__form");

// const addFormPopout = content.querySelector(".popout-add");
// const addFormElement = content.querySelector(".popout-add__form");

// export function renderEdit() {
//   editFormPopout.classList.add("active");
//   overlayPopout.classList.add("active");
//   content.addEventListener("keydown", (evt) => escapeKeyClose(evt));

//   const newValidation = new FormValidator(
//     {
//       formSelector: content.querySelector(".form"),
//       inputSelector: content.querySelectorAll(".form__input"),
//       submitButtonSelector: content.querySelector(".form__submit"),
//       inactiveButtonClass: content.querySelector(".form__submit_disabled"),
//       inputErrorClass: content.querySelector(".form__input_type_error"),
//       errorClass: content.querySelector(".form__input-error"),
//     },
//     editFormElement
//   );
//   newValidation.enableValidation();
// }

// export function renderAdd() {
//   addFormPopout.classList.add("active");
//   overlayPopout.classList.add("active");
//   content.addEventListener("keydown", (evt) => escapeKeyClose(evt));

//   const newValidation = new FormValidator(
//     {
//       formSelector: content.querySelector(".form"),
//       inputSelector: content.querySelectorAll(".form__input"),
//       submitButtonSelector: content.querySelector(".form__submit"),
//       inactiveButtonClass: content.querySelector(".form__submit_disabled"),
//       inputErrorClass: content.querySelector(".form__input_type_error"),
//       errorClass: content.querySelector(".form__input-error"),
//     },
//     addFormElement
//   );
//   newValidation.enableValidation();
// }

// export function closePopout() {
//   imagePopout.classList.remove("active");
//   overlayPopout.classList.remove("active");
//   editFormPopout.classList.remove("active");
//   addFormPopout.classList.remove("active");
// }

// export function escapeKeyClose(evt) {
//   if (evt.key === "Escape") {
//     closePopout();
//   }
//   content.removeEventListener("keydown", escapeKeyClose);
// }
