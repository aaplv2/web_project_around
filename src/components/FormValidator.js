export default class FormValidator {
  constructor(formType) {
    this._formType = formType;
    this.enableValidation();
  }

  _showInputError = (formElement, inputElement, errorMessage) => {
    this._errorElement = formElement.querySelector(
      `.${inputElement.dataset.error}-error`
    );
    inputElement.classList.add("form__input_type_error");
    this._errorElement.classList.add("form__input-error_active");
    this._errorElement.textContent = errorMessage;
  };

  _hideInputError = (formElement, inputElement) => {
    this._errorElement = formElement.querySelector(
      `.${inputElement.dataset.error}-error`
    );
    inputElement.classList.remove("form__input_type_error");
    this._errorElement.classList.remove("form__input-error_active");
    this._errorElement.textContent = "";
  };

  _checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(formElement, inputElement);
    }
  };

  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState = (inputList, buttonElement) => {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add("form__submit_inactive");
      buttonElement.setAttribute("disabled", "true");
    } else {
      buttonElement.classList.remove("form__submit_inactive");
      buttonElement.removeAttribute("disabled");
    }
  };

  _setEventListener = (formElement) => {
    this._inputList = Array.from(formElement.querySelectorAll(".form__input"));
    this._buttonElement = formElement.querySelector(".form__submit");
    this._toggleButtonState(this._inputList, this._buttonElement);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._toggleButtonState(this._inputList, this._buttonElement);
        this._checkInputValidity(formElement, inputElement);
      });
    });
  };

  enableValidation = () => {
    this._formType.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListener(this._formType);
  };
}
