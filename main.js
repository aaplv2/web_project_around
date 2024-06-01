/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Api = /*#__PURE__*/function () {
  function Api(baseUrl, headers) {
    _classCallCheck(this, Api);
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  return _createClass(Api, [{
    key: "handleRes",
    value: function handleRes(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject("Error: ".concat(res.status));
    }
  }, {
    key: "getInitialCards",
    value: function getInitialCards() {
      return fetch("".concat(this._baseUrl, "/cards"), {
        method: "GET",
        headers: {
          authorization: this._headers,
          "Content-Type": "application/json"
        }
      }).then(this.handleRes);
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return fetch("".concat(this._baseUrl, "/users/me"), {
        method: "GET",
        headers: {
          authorization: this._headers,
          "Content-Type": "application/json"
        }
      }).then(this.handleRes);
    }
  }, {
    key: "updateUserInfo",
    value: function updateUserInfo(name, about) {
      return fetch("".concat(this._baseUrl, "/users/me"), {
        method: "PATCH",
        headers: {
          authorization: this._headers,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          about: about
        })
      }).then(this.handleRes);
    }
  }, {
    key: "addCard",
    value: function addCard(name, link) {
      return fetch("".concat(this._baseUrl, "/cards"), {
        method: "POST",
        headers: {
          authorization: this._headers,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          link: link
        })
      }).then(this.handleRes);
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(cardId) {
      return fetch("".concat(this._baseUrl, "/cards/").concat(cardId), {
        method: "DELETE",
        headers: {
          authorization: this._headers,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          cardId: cardId
        })
      }).then(this.handleRes);
    }
  }, {
    key: "handleLike",
    value: function handleLike(id, isLiked) {
      if (isLiked) {
        return this.addLike(id);
      }
      return this.removeLike(id);
    }
  }, {
    key: "addLike",
    value: function addLike(id) {
      return fetch("".concat(this._baseUrl, "/cards/likes/").concat(id), {
        method: "PUT",
        headers: {
          authorization: this._headers,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: id
        })
      }).then(this.handleRes);
    }
  }, {
    key: "removeLike",
    value: function removeLike(id) {
      return fetch("".concat(this._baseUrl, "/cards/likes/").concat(id), {
        method: "DELETE",
        headers: {
          authorization: this._headers,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: id
        })
      }).then(this.handleRes);
    }
  }, {
    key: "updateAvatar",
    value: function updateAvatar(avatar) {
      return fetch("".concat(this._baseUrl, "/users/me/avatar"), {
        method: "PATCH",
        headers: {
          authorization: this._headers,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          avatar: avatar
        })
      }).then(this.handleRes);
    }
  }]);
}();
var api = new Api("https://around.nomoreparties.co/v1/web_es_10", "bf26d6eb-e32a-4dfe-be0d-af6eb19b0a81");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);

/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./src/components/Api.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Card = /*#__PURE__*/function () {
  function Card(title, url, owner, likes, cardId, userId, cardSelector, zoomCallback, deleteCallback) {
    _classCallCheck(this, Card);
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
  return _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardTemplate = document.querySelector(this._cardSelector).cloneNode(true).content.querySelector(".card");
      return cardTemplate;
    }
  }, {
    key: "createCard",
    value: function createCard() {
      var _this = this;
      this._cardElement = this._getTemplate();
      var likesCount = this._likes.length;
      var buttonLike = this._cardElement.querySelector(".card__button-like");
      var buttonTrash = this._cardElement.querySelector(".card__button-trash");
      var cardImage = this._cardElement.querySelector(".card__image");
      var cardTitle = this._cardElement.querySelector(".card__title");
      var cardCounter = this._cardElement.querySelector(".card__button-counter");
      if (this._userId !== this._owner._id) {
        buttonTrash.remove();
      }
      cardTitle.textContent = this._title;
      cardImage.alt = this._title;
      cardImage.src = this._url;
      cardCounter.textContent = likesCount;
      buttonLike.addEventListener("click", function () {
        _this._activeLike();
        _this._counterLike();
        _Api__WEBPACK_IMPORTED_MODULE_0__["default"].handleLike(_this._cardId, buttonLike.classList.contains("active"));
      });
      cardImage.addEventListener("click", function () {
        _this._zoomCallback(_this._title, _this._url);
      });
      this._likes.forEach(function (like) {
        if (_this._userId === like._id) {
          buttonLike.classList.add("active");
        }
      });
      buttonTrash.addEventListener("click", function () {
        return _this._deleteCallback(_this._cardId, _this._cardElement);
      });
      return this._cardElement;
    }
  }, {
    key: "_activeLike",
    value: function _activeLike() {
      var buttonLike = this._cardElement.querySelector(".card__button-like");
      if (buttonLike.classList.contains("active")) {
        buttonLike.classList.remove("active");
      } else {
        buttonLike.classList.add("active");
      }
    }
  }, {
    key: "_counterLike",
    value: function _counterLike() {
      var buttonLike = this._cardElement.querySelector(".card__button-like");
      var buttonCounter = this._cardElement.querySelector(".card__button-counter");
      if (buttonLike.classList.contains("active")) {
        buttonCounter.textContent = Number(buttonCounter.textContent) + 1;
      } else {
        buttonCounter.textContent = Number(buttonCounter.textContent) - 1;
      }
    }
  }, {
    key: "_deleteCard",
    value: function _deleteCard() {
      this._buttonTrash = this._cardElement.querySelector("#button-trash");
      this._cardElement.remove(this._buttonTrash);
    }
  }]);
}();


/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormValidator)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var FormValidator = /*#__PURE__*/_createClass(function FormValidator(formType) {
  var _this = this;
  _classCallCheck(this, FormValidator);
  _defineProperty(this, "_showInputError", function (formElement, inputElement, errorMessage) {
    _this._errorElement = formElement.querySelector(".".concat(inputElement.dataset.error, "-error"));
    inputElement.classList.add("form__input_type_error");
    _this._errorElement.classList.add("form__input-error_active");
    _this._errorElement.textContent = errorMessage;
  });
  _defineProperty(this, "_hideInputError", function (formElement, inputElement) {
    _this._errorElement = formElement.querySelector(".".concat(inputElement.dataset.error, "-error"));
    inputElement.classList.remove("form__input_type_error");
    _this._errorElement.classList.remove("form__input-error_active");
    _this._errorElement.textContent = "";
  });
  _defineProperty(this, "_checkInputValidity", function (formElement, inputElement) {
    if (!inputElement.validity.valid) {
      _this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      _this._hideInputError(formElement, inputElement);
    }
  });
  _defineProperty(this, "_hasInvalidInput", function (inputList) {
    return inputList.some(function (inputElement) {
      return !inputElement.validity.valid;
    });
  });
  _defineProperty(this, "_toggleButtonState", function (inputList, buttonElement) {
    if (_this._hasInvalidInput(inputList)) {
      buttonElement.classList.add("form__submit_inactive");
      buttonElement.setAttribute("disabled", "true");
    } else {
      buttonElement.classList.remove("form__submit_inactive");
      buttonElement.removeAttribute("disabled");
    }
  });
  _defineProperty(this, "_setEventListener", function (formElement) {
    _this._inputList = Array.from(formElement.querySelectorAll(".form__input"));
    _this._buttonElement = formElement.querySelector(".form__submit");
    _this._toggleButtonState(_this._inputList, _this._buttonElement);
    _this._inputList.forEach(function (inputElement) {
      inputElement.addEventListener("input", function () {
        _this._toggleButtonState(_this._inputList, _this._buttonElement);
        _this._checkInputValidity(formElement, inputElement);
      });
    });
  });
  _defineProperty(this, "enableValidation", function () {
    _this._formType.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    _this._setEventListener(_this._formType);
  });
  this._formType = formType;
  this.enableValidation();
});


/***/ }),

/***/ "./src/components/Popout.js":
/*!**********************************!*\
  !*** ./src/components/Popout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popout)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Popout = /*#__PURE__*/function () {
  function Popout(popoutSelector) {
    _classCallCheck(this, Popout);
    this._popoutElement = document.querySelector(popoutSelector);
    this.overlay = document.querySelector("#overlay");
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleTargetClose = this._handleTargetClose.bind(this);
  }
  return _createClass(Popout, [{
    key: "open",
    value: function open() {
      this._popoutElement.classList.add("active");
      document.querySelector("#overlay").classList.add("active");
      document.addEventListener("keydown", this._handleEscClose);
      this.setEventListeners();
    }
  }, {
    key: "close",
    value: function close() {
      this._popoutElement.classList.remove("active");
      document.querySelector("#overlay").classList.remove("active");
      document.removeEventListener("keydown", this._handleEscClose);
    }
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(evt) {
      if (evt.key === "Escape") {
        this.close();
      }
    }
  }, {
    key: "_handleTargetClose",
    value: function _handleTargetClose(evt) {
      if (evt.target.classList.contains("close")) {
        this.close();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      this._popoutElement.addEventListener("click", this._handleTargetClose);
      this.overlay.addEventListener("click", this.close);
    }
  }]);
}();


/***/ }),

/***/ "./src/components/PopoutWithConfirmation.js":
/*!**************************************************!*\
  !*** ./src/components/PopoutWithConfirmation.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopoutWithConfirmation)
/* harmony export */ });
/* harmony import */ var _Popout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popout */ "./src/components/Popout.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PopoutWithConfirmation = /*#__PURE__*/function (_Popout) {
  function PopoutWithConfirmation(popoutSelector, deleteCallback) {
    var _this;
    _classCallCheck(this, PopoutWithConfirmation);
    _this = _callSuper(this, PopoutWithConfirmation, [popoutSelector]);
    _this._deleteCallback = deleteCallback;
    _this.submitHandle = _this.submitHandle.bind(_this);
    _this._confirmButton = _this._popoutElement.querySelector(".popout-confirm__button");
    _this.setEventListeners();
    return _this;
  }
  _inherits(PopoutWithConfirmation, _Popout);
  return _createClass(PopoutWithConfirmation, [{
    key: "open",
    value: function open(cardId, cardElement) {
      this._cardId = cardId;
      this._cardElement = cardElement;
      _get(_getPrototypeOf(PopoutWithConfirmation.prototype), "open", this).call(this);
    }
  }, {
    key: "submitHandle",
    value: function submitHandle(evt) {
      evt.preventDefault();
      this._deleteCallback(this._cardId, this._cardElement);
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      _get(_getPrototypeOf(PopoutWithConfirmation.prototype), "setEventListeners", this).call(this);
      this._confirmButton.addEventListener("click", this.submitHandle);
    }
  }]);
}(_Popout__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/PopoutWithForm.js":
/*!******************************************!*\
  !*** ./src/components/PopoutWithForm.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopoutWithForm)
/* harmony export */ });
/* harmony import */ var _Popout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popout */ "./src/components/Popout.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PopoutWithForm = /*#__PURE__*/function (_Popout) {
  function PopoutWithForm(formSubmitHandler, popoutSelector) {
    var _this;
    _classCallCheck(this, PopoutWithForm);
    _this = _callSuper(this, PopoutWithForm, [popoutSelector]);
    _this.close = _this.close.bind(_this);
    _this._formSubmitHandler = formSubmitHandler;
    _this._submitHandle = _this.submitHandle.bind(_this);
    _this._buttonSubmit = _this._popoutElement.querySelector(".form__submit");
    _this._inputList = Array.from(_this._popoutElement.querySelectorAll(".form__input"));
    _this.setEventListeners();
    return _this;
  }
  _inherits(PopoutWithForm, _Popout);
  return _createClass(PopoutWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var inputObj = {};
      this._inputList.forEach(function (inputElement) {
        inputObj[inputElement.name] = inputElement.value;
      });
      return inputObj;
    }
  }, {
    key: "submitHandle",
    value: function submitHandle(evt) {
      evt.preventDefault();
      this._buttonSubmit.textContent = "Guardando...";
      this._formSubmitHandler(this._getInputValues());
      this.close();
      this._inputList.forEach(function (inputElement) {
        inputElement.value = "";
      });
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      _get(_getPrototypeOf(PopoutWithForm.prototype), "setEventListeners", this).call(this);
      this._popoutElement.addEventListener("submit", this._submitHandle);
    }
  }, {
    key: "open",
    value: function open() {
      _get(_getPrototypeOf(PopoutWithForm.prototype), "open", this).call(this);
      this._buttonSubmit.textContent = "Guardar";
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopoutWithForm.prototype), "close", this).call(this);
      this._buttonList = document.querySelectorAll(".form__submit");
      this._buttonList.forEach(function (buttonElement) {
        buttonElement.classList.add("form__submit_inactive");
        buttonElement.setAttribute("disabled", "true");
      });
    }
  }]);
}(_Popout__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/PopoutWithImage.js":
/*!*******************************************!*\
  !*** ./src/components/PopoutWithImage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopoutWithImage)
/* harmony export */ });
/* harmony import */ var _Popout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popout */ "./src/components/Popout.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PopoutWithImage = /*#__PURE__*/function (_Popout) {
  function PopoutWithImage(popoutSelector) {
    _classCallCheck(this, PopoutWithImage);
    return _callSuper(this, PopoutWithImage, [popoutSelector]);
  }
  _inherits(PopoutWithImage, _Popout);
  return _createClass(PopoutWithImage, [{
    key: "open",
    value: function open(title, link) {
      _get(_getPrototypeOf(PopoutWithImage.prototype), "open", this).call(this);
      var imagePopout = document.querySelector(".popout-image");
      var imagePopoutTitle = imagePopout.querySelector(".popout-image__title");
      var imagePopoutImage = imagePopout.querySelector(".popout-image__image");
      imagePopoutTitle.textContent = title;
      imagePopoutImage.src = link;
      imagePopoutImage.alt = title;
    }
  }]);
}(_Popout__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Section = /*#__PURE__*/function () {
  function Section(_ref, cssSelector) {
    var items = _ref.items,
      renderer = _ref.renderer;
    _classCallCheck(this, Section);
    this._items = items;
    this._renderer = renderer;
    this._cssElement = document.querySelector(cssSelector);
  }
  return _createClass(Section, [{
    key: "render",
    value: function render() {
      this._items.forEach(this._renderer);
    }
  }, {
    key: "addItem",
    value: function addItem(element) {
      this._cssElement.prepend(element);
    }
  }]);
}();


/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInfo)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var nameSelector = _ref.nameSelector,
      aboutSelector = _ref.aboutSelector,
      avatarSelector = _ref.avatarSelector;
    _classCallCheck(this, UserInfo);
    this._nameElement = document.querySelector(nameSelector);
    this._aboutElement = document.querySelector(aboutSelector);
    this._avatarSelector = document.querySelector(avatarSelector);
  }
  return _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this._nameElement.textContent,
        about: this._aboutElement.textContent
      };
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref2) {
      var name = _ref2.name,
        about = _ref2.about;
      this._nameElement.textContent = name;
      this._aboutElement.textContent = about;
    }
  }, {
    key: "setUserAvatar",
    value: function setUserAvatar(_ref3) {
      var avatar = _ref3.avatar;
      this._avatarSelector.src = avatar;
    }
  }]);
}();


/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addFormElement: () => (/* binding */ addFormElement),
/* harmony export */   editFormElement: () => (/* binding */ editFormElement),
/* harmony export */   popoutsConfig: () => (/* binding */ popoutsConfig),
/* harmony export */   profileAbout: () => (/* binding */ profileAbout),
/* harmony export */   profileFormElement: () => (/* binding */ profileFormElement),
/* harmony export */   profileImage: () => (/* binding */ profileImage),
/* harmony export */   profileName: () => (/* binding */ profileName)
/* harmony export */ });
var content = document.querySelector(".body");
var addButton = content.querySelector(".profile__button-add");
var addFormElement = content.querySelector(".popout-add__form");
var editButton = content.querySelector(".profile__button-edit");
var editFormElement = content.querySelector(".popout-edit__form");
var profileName = content.querySelector(".profile__info-name");
var profileAbout = content.querySelector(".profile__info-subtitle");
var profileImage = content.querySelector(".profile__image");
var profileImageHover = content.querySelector(".profile__image-hover");
var profileFormElement = content.querySelector(".popout-profile__form");
var popoutsConfig = [{
  formType: "edit",
  popoutSelector: ".popout-edit",
  openButton: editButton
}, {
  formType: "add",
  popoutSelector: ".popout-add",
  openButton: addButton
}, {
  formType: "profile",
  popoutSelector: ".popout-profile",
  openButton: profileImageHover
}];


/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.css */ "./src/pages/index.css");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopoutWithForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PopoutWithForm.js */ "./src/components/PopoutWithForm.js");
/* harmony import */ var _components_PopoutWithImage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PopoutWithImage.js */ "./src/components/PopoutWithImage.js");
/* harmony import */ var _components_PopoutWithConfirmation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopoutWithConfirmation.js */ "./src/components/PopoutWithConfirmation.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");










var zoomRender = new _components_PopoutWithImage_js__WEBPACK_IMPORTED_MODULE_4__["default"](".popout-image");
var deleteConfirmation = new _components_PopoutWithConfirmation_js__WEBPACK_IMPORTED_MODULE_5__["default"](".popout-confirm", function (cardId, cardElement) {
  confirmationSubmit(cardId, cardElement);
});
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
  nameSelector: ".profile__info-name",
  aboutSelector: ".profile__info-subtitle",
  avatarSelector: ".profile__image"
});
new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_7__["default"](_utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.editFormElement);
new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_7__["default"](_utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.addFormElement);
new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_7__["default"](_utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.profileFormElement);
var renderSection;
_components_Api_js__WEBPACK_IMPORTED_MODULE_8__["default"].getUserInfo().then(function (user) {
  userInfo.setUserInfo(user);
  _utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.profileName.id = user._id;
  _utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.profileImage.src = user.avatar;
  _utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.profileImage.alt = user.name;
  var userId = user._id;
  _components_Api_js__WEBPACK_IMPORTED_MODULE_8__["default"].getInitialCards().then(function (cards) {
    renderSection = new _components_Section_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
      items: cards,
      renderer: function renderer(card) {
        generateCardInstance(card.name, card.link, card.owner, card.likes, card._id, userId, "#card", zoomRender.open, deleteConfirmation.open);
      }
    }, ".cards");
  }).finally(function () {
    renderSection.render();
  }).catch(function (err) {
    console.log(err);
  });
}).catch(function (err) {
  console.log(err);
});
function editSubmit(inputValues) {
  _components_Api_js__WEBPACK_IMPORTED_MODULE_8__["default"].updateUserInfo(inputValues.profileName, inputValues.profileAbout).then(userInfo.setUserInfo({
    name: inputValues.profileName,
    about: inputValues.profileAbout
  })).catch(function (err) {
    console.log(err);
  });
}
function addSubmit(inputValues) {
  _components_Api_js__WEBPACK_IMPORTED_MODULE_8__["default"].addCard(inputValues.cardTitle, inputValues.cardUrl).then(function (card) {
    generateCardInstance(inputValues.cardTitle, inputValues.cardUrl, card.owner, card.likes, card._id, _utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.profileName.id, "#card", zoomRender.open, deleteConfirmation.open);
  }).catch(function (err) {
    console.log(err);
  });
}
function profileSubmit(inputValues) {
  _components_Api_js__WEBPACK_IMPORTED_MODULE_8__["default"].updateAvatar(inputValues.avatarUrl).then(userInfo.setUserAvatar({
    avatar: inputValues.avatarUrl
  })).catch(function (err) {
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
  _components_Api_js__WEBPACK_IMPORTED_MODULE_8__["default"].deleteCard(cardId).then(function () {
    var deleteButton = cardElement.querySelector("#button-trash");
    cardElement.remove(deleteButton);
    deleteConfirmation.close();
  }).catch(function (err) {
    console.log(err);
  });
}
function generateCardInstance(title, url, owner, likes, cardId, userId, selector, handleCardClick, handleDeleteClick) {
  var newCard = new _components_Card_js__WEBPACK_IMPORTED_MODULE_1__["default"](title, url, owner, likes, cardId, userId, selector, handleCardClick, handleDeleteClick);
  var cardElement = newCard.createCard();
  renderSection.addItem(cardElement);
}
_utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.popoutsConfig.forEach(function (popoutType) {
  var popOut = new _components_PopoutWithForm_js__WEBPACK_IMPORTED_MODULE_3__["default"](function (inputValues) {
    return formTypeSelector(inputValues, popoutType.formType);
  }, popoutType.popoutSelector);
  popoutType.openButton.addEventListener("click", popOut.open);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9jb21wb25lbnRzL1BvcG91dC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9zcmMvY29tcG9uZW50cy9Qb3BvdXRXaXRoQ29uZmlybWF0aW9uLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9jb21wb25lbnRzL1BvcG91dFdpdGhGb3JtLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9jb21wb25lbnRzL1BvcG91dFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcGkge1xyXG4gIGNvbnN0cnVjdG9yKGJhc2VVcmwsIGhlYWRlcnMpIHtcclxuICAgIHRoaXMuX2Jhc2VVcmwgPSBiYXNlVXJsO1xyXG4gICAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVSZXMocmVzKSB7XHJcbiAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGBFcnJvcjogJHtyZXMuc3RhdHVzfWApO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5pdGlhbENhcmRzKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzYCwge1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhdXRob3JpemF0aW9uOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgfSkudGhlbih0aGlzLmhhbmRsZVJlcyk7XHJcbiAgfVxyXG4gIGdldFVzZXJJbmZvKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L3VzZXJzL21lYCwge1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhdXRob3JpemF0aW9uOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgfSkudGhlbih0aGlzLmhhbmRsZVJlcyk7XHJcbiAgfVxyXG4gIHVwZGF0ZVVzZXJJbmZvKG5hbWUsIGFib3V0KSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWVgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXV0aG9yaXphdGlvbjogdGhpcy5faGVhZGVycyxcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgYWJvdXQsXHJcbiAgICAgIH0pLFxyXG4gICAgfSkudGhlbih0aGlzLmhhbmRsZVJlcyk7XHJcbiAgfVxyXG4gIGFkZENhcmQobmFtZSwgbGluaykge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzYCwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXV0aG9yaXphdGlvbjogdGhpcy5faGVhZGVycyxcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgbGluayxcclxuICAgICAgfSksXHJcbiAgICB9KS50aGVuKHRoaXMuaGFuZGxlUmVzKTtcclxuICB9XHJcbiAgZGVsZXRlQ2FyZChjYXJkSWQpIHtcclxuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS9jYXJkcy8ke2NhcmRJZH1gLCB7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGF1dGhvcml6YXRpb246IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBjYXJkSWQsXHJcbiAgICAgIH0pLFxyXG4gICAgfSkudGhlbih0aGlzLmhhbmRsZVJlcyk7XHJcbiAgfVxyXG4gIGhhbmRsZUxpa2UoaWQsIGlzTGlrZWQpIHtcclxuICAgIGlmIChpc0xpa2VkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmFkZExpa2UoaWQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucmVtb3ZlTGlrZShpZCk7XHJcbiAgfVxyXG4gIGFkZExpa2UoaWQpIHtcclxuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS9jYXJkcy9saWtlcy8ke2lkfWAsIHtcclxuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXV0aG9yaXphdGlvbjogdGhpcy5faGVhZGVycyxcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGlkLFxyXG4gICAgICB9KSxcclxuICAgIH0pLnRoZW4odGhpcy5oYW5kbGVSZXMpO1xyXG4gIH1cclxuICByZW1vdmVMaWtlKGlkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHMvbGlrZXMvJHtpZH1gLCB7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGF1dGhvcml6YXRpb246IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBpZCxcclxuICAgICAgfSksXHJcbiAgICB9KS50aGVuKHRoaXMuaGFuZGxlUmVzKTtcclxuICB9XHJcbiAgdXBkYXRlQXZhdGFyKGF2YXRhcikge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L3VzZXJzL21lL2F2YXRhcmAsIHtcclxuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhdXRob3JpemF0aW9uOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgYXZhdGFyLFxyXG4gICAgICB9KSxcclxuICAgIH0pLnRoZW4odGhpcy5oYW5kbGVSZXMpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgYXBpID0gbmV3IEFwaShcclxuICBgaHR0cHM6Ly9hcm91bmQubm9tb3JlcGFydGllcy5jby92MS93ZWJfZXNfMTBgLFxyXG4gIFwiYmYyNmQ2ZWItZTMyYS00ZGZlLWJlMGQtYWY2ZWIxOWIwYTgxXCJcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaTtcclxuIiwiaW1wb3J0IGFwaSBmcm9tIFwiLi9BcGlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgdGl0bGUsXHJcbiAgICB1cmwsXHJcbiAgICBvd25lcixcclxuICAgIGxpa2VzLFxyXG4gICAgY2FyZElkLFxyXG4gICAgdXNlcklkLFxyXG4gICAgY2FyZFNlbGVjdG9yLFxyXG4gICAgem9vbUNhbGxiYWNrLFxyXG4gICAgZGVsZXRlQ2FsbGJhY2tcclxuICApIHtcclxuICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLl91cmwgPSB1cmw7XHJcbiAgICB0aGlzLl9vd25lciA9IG93bmVyO1xyXG4gICAgdGhpcy5fbGlrZXMgPSBsaWtlcztcclxuICAgIHRoaXMuX2NhcmRJZCA9IGNhcmRJZDtcclxuICAgIHRoaXMuX3VzZXJJZCA9IHVzZXJJZDtcclxuICAgIHRoaXMuX2NhcmRTZWxlY3RvciA9IGNhcmRTZWxlY3RvcjtcclxuICAgIHRoaXMuX3pvb21DYWxsYmFjayA9IHpvb21DYWxsYmFjaztcclxuICAgIHRoaXMuX2RlbGV0ZUNhbGxiYWNrID0gZGVsZXRlQ2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICBfZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICBjb25zdCBjYXJkVGVtcGxhdGUgPSBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl9jYXJkU2VsZWN0b3IpXHJcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSlcclxuICAgICAgLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkXCIpO1xyXG4gICAgcmV0dXJuIGNhcmRUZW1wbGF0ZTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNhcmQoKSB7XHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XHJcblxyXG4gICAgY29uc3QgbGlrZXNDb3VudCA9IHRoaXMuX2xpa2VzLmxlbmd0aDtcclxuICAgIGNvbnN0IGJ1dHRvbkxpa2UgPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2J1dHRvbi1saWtlXCIpO1xyXG4gICAgY29uc3QgYnV0dG9uVHJhc2ggPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2J1dHRvbi10cmFzaFwiKTtcclxuICAgIGNvbnN0IGNhcmRJbWFnZSA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1hZ2VcIik7XHJcbiAgICBjb25zdCBjYXJkVGl0bGUgPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3RpdGxlXCIpO1xyXG4gICAgY29uc3QgY2FyZENvdW50ZXIgPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5jYXJkX19idXR0b24tY291bnRlclwiXHJcbiAgICApO1xyXG5cclxuICAgIGlmICh0aGlzLl91c2VySWQgIT09IHRoaXMuX293bmVyLl9pZCkge1xyXG4gICAgICBidXR0b25UcmFzaC5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLl90aXRsZTtcclxuICAgIGNhcmRJbWFnZS5hbHQgPSB0aGlzLl90aXRsZTtcclxuICAgIGNhcmRJbWFnZS5zcmMgPSB0aGlzLl91cmw7XHJcbiAgICBjYXJkQ291bnRlci50ZXh0Q29udGVudCA9IGxpa2VzQ291bnQ7XHJcblxyXG4gICAgYnV0dG9uTGlrZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9hY3RpdmVMaWtlKCk7XHJcbiAgICAgIHRoaXMuX2NvdW50ZXJMaWtlKCk7XHJcbiAgICAgIGFwaS5oYW5kbGVMaWtlKHRoaXMuX2NhcmRJZCwgYnV0dG9uTGlrZS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2FyZEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX3pvb21DYWxsYmFjayh0aGlzLl90aXRsZSwgdGhpcy5fdXJsKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2xpa2VzLmZvckVhY2goKGxpa2UpID0+IHtcclxuICAgICAgaWYgKHRoaXMuX3VzZXJJZCA9PT0gbGlrZS5faWQpIHtcclxuICAgICAgICBidXR0b25MaWtlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGJ1dHRvblRyYXNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxyXG4gICAgICB0aGlzLl9kZWxldGVDYWxsYmFjayh0aGlzLl9jYXJkSWQsIHRoaXMuX2NhcmRFbGVtZW50KVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fY2FyZEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBfYWN0aXZlTGlrZSgpIHtcclxuICAgIGNvbnN0IGJ1dHRvbkxpa2UgPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2J1dHRvbi1saWtlXCIpO1xyXG4gICAgaWYgKGJ1dHRvbkxpa2UuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgIGJ1dHRvbkxpa2UuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJ1dHRvbkxpa2UuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9jb3VudGVyTGlrZSgpIHtcclxuICAgIGNvbnN0IGJ1dHRvbkxpa2UgPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2J1dHRvbi1saWtlXCIpO1xyXG4gICAgY29uc3QgYnV0dG9uQ291bnRlciA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiLmNhcmRfX2J1dHRvbi1jb3VudGVyXCJcclxuICAgICk7XHJcbiAgICBpZiAoYnV0dG9uTGlrZS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgICAgYnV0dG9uQ291bnRlci50ZXh0Q29udGVudCA9IE51bWJlcihidXR0b25Db3VudGVyLnRleHRDb250ZW50KSArIDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBidXR0b25Db3VudGVyLnRleHRDb250ZW50ID0gTnVtYmVyKGJ1dHRvbkNvdW50ZXIudGV4dENvbnRlbnQpIC0gMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9kZWxldGVDYXJkKCkge1xyXG4gICAgdGhpcy5fYnV0dG9uVHJhc2ggPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1dHRvbi10cmFzaFwiKTtcclxuICAgIHRoaXMuX2NhcmRFbGVtZW50LnJlbW92ZSh0aGlzLl9idXR0b25UcmFzaCk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKGZvcm1UeXBlKSB7XHJcbiAgICB0aGlzLl9mb3JtVHlwZSA9IGZvcm1UeXBlO1xyXG4gICAgdGhpcy5lbmFibGVWYWxpZGF0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBfc2hvd0lucHV0RXJyb3IgPSAoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCwgZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICB0aGlzLl9lcnJvckVsZW1lbnQgPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgLiR7aW5wdXRFbGVtZW50LmRhdGFzZXQuZXJyb3J9LWVycm9yYFxyXG4gICAgKTtcclxuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9faW5wdXRfdHlwZV9lcnJvclwiKTtcclxuICAgIHRoaXMuX2Vycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9faW5wdXQtZXJyb3JfYWN0aXZlXCIpO1xyXG4gICAgdGhpcy5fZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gZXJyb3JNZXNzYWdlO1xyXG4gIH07XHJcblxyXG4gIF9oaWRlSW5wdXRFcnJvciA9IChmb3JtRWxlbWVudCwgaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICB0aGlzLl9lcnJvckVsZW1lbnQgPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgLiR7aW5wdXRFbGVtZW50LmRhdGFzZXQuZXJyb3J9LWVycm9yYFxyXG4gICAgKTtcclxuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybV9faW5wdXRfdHlwZV9lcnJvclwiKTtcclxuICAgIHRoaXMuX2Vycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybV9faW5wdXQtZXJyb3JfYWN0aXZlXCIpO1xyXG4gICAgdGhpcy5fZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICB9O1xyXG5cclxuICBfY2hlY2tJbnB1dFZhbGlkaXR5ID0gKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgIGlmICghaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKFxyXG4gICAgICAgIGZvcm1FbGVtZW50LFxyXG4gICAgICAgIGlucHV0RWxlbWVudCxcclxuICAgICAgICBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2VcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIF9oYXNJbnZhbGlkSW5wdXQgPSAoaW5wdXRMaXN0KSA9PiB7XHJcbiAgICByZXR1cm4gaW5wdXRMaXN0LnNvbWUoKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICByZXR1cm4gIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZDtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIF90b2dnbGVCdXR0b25TdGF0ZSA9IChpbnB1dExpc3QsIGJ1dHRvbkVsZW1lbnQpID0+IHtcclxuICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXQoaW5wdXRMaXN0KSkge1xyXG4gICAgICBidXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmb3JtX19zdWJtaXRfaW5hY3RpdmVcIik7XHJcbiAgICAgIGJ1dHRvbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybV9fc3VibWl0X2luYWN0aXZlXCIpO1xyXG4gICAgICBidXR0b25FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVyID0gKGZvcm1FbGVtZW50KSA9PiB7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QgPSBBcnJheS5mcm9tKGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybV9faW5wdXRcIikpO1xyXG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9fc3VibWl0XCIpO1xyXG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUodGhpcy5faW5wdXRMaXN0LCB0aGlzLl9idXR0b25FbGVtZW50KTtcclxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUodGhpcy5faW5wdXRMaXN0LCB0aGlzLl9idXR0b25FbGVtZW50KTtcclxuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZW5hYmxlVmFsaWRhdGlvbiA9ICgpID0+IHtcclxuICAgIHRoaXMuX2Zvcm1UeXBlLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcih0aGlzLl9mb3JtVHlwZSk7XHJcbiAgfTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3BvdXQge1xyXG4gIGNvbnN0cnVjdG9yKHBvcG91dFNlbGVjdG9yKSB7XHJcbiAgICB0aGlzLl9wb3BvdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3BvdXRTZWxlY3Rvcik7XHJcbiAgICB0aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJsYXlcIik7XHJcbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLl9oYW5kbGVFc2NDbG9zZSA9IHRoaXMuX2hhbmRsZUVzY0Nsb3NlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLl9oYW5kbGVUYXJnZXRDbG9zZSA9IHRoaXMuX2hhbmRsZVRhcmdldENsb3NlLmJpbmQodGhpcyk7XHJcbiAgfVxyXG4gIG9wZW4oKSB7XHJcbiAgICB0aGlzLl9wb3BvdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJsYXlcIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLl9wb3BvdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJsYXlcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICB9XHJcbiAgX2hhbmRsZUVzY0Nsb3NlKGV2dCkge1xyXG4gICAgaWYgKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBfaGFuZGxlVGFyZ2V0Q2xvc2UoZXZ0KSB7XHJcbiAgICBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjbG9zZVwiKSkge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5fcG9wb3V0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5faGFuZGxlVGFyZ2V0Q2xvc2UpO1xyXG4gICAgdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNsb3NlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBvcG91dCBmcm9tIFwiLi9Qb3BvdXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcG91dFdpdGhDb25maXJtYXRpb24gZXh0ZW5kcyBQb3BvdXQge1xyXG4gIGNvbnN0cnVjdG9yKHBvcG91dFNlbGVjdG9yLCBkZWxldGVDYWxsYmFjaykge1xyXG4gICAgc3VwZXIocG9wb3V0U2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fZGVsZXRlQ2FsbGJhY2sgPSBkZWxldGVDYWxsYmFjaztcclxuICAgIHRoaXMuc3VibWl0SGFuZGxlID0gdGhpcy5zdWJtaXRIYW5kbGUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuX2NvbmZpcm1CdXR0b24gPSB0aGlzLl9wb3BvdXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiLnBvcG91dC1jb25maXJtX19idXR0b25cIlxyXG4gICAgKTtcclxuICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcbiAgb3BlbihjYXJkSWQsIGNhcmRFbGVtZW50KSB7XHJcbiAgICB0aGlzLl9jYXJkSWQgPSBjYXJkSWQ7XHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudCA9IGNhcmRFbGVtZW50O1xyXG4gICAgc3VwZXIub3BlbigpO1xyXG4gIH1cclxuICBzdWJtaXRIYW5kbGUoZXZ0KSB7XHJcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuX2RlbGV0ZUNhbGxiYWNrKHRoaXMuX2NhcmRJZCwgdGhpcy5fY2FyZEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5fY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5zdWJtaXRIYW5kbGUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUG9wb3V0IGZyb20gXCIuL1BvcG91dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wb3V0V2l0aEZvcm0gZXh0ZW5kcyBQb3BvdXQge1xyXG4gIGNvbnN0cnVjdG9yKGZvcm1TdWJtaXRIYW5kbGVyLCBwb3BvdXRTZWxlY3Rvcikge1xyXG4gICAgc3VwZXIocG9wb3V0U2VsZWN0b3IpO1xyXG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuX2Zvcm1TdWJtaXRIYW5kbGVyID0gZm9ybVN1Ym1pdEhhbmRsZXI7XHJcbiAgICB0aGlzLl9zdWJtaXRIYW5kbGUgPSB0aGlzLnN1Ym1pdEhhbmRsZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5fYnV0dG9uU3VibWl0ID0gdGhpcy5fcG9wb3V0RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX3N1Ym1pdFwiKTtcclxuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20oXHJcbiAgICAgIHRoaXMuX3BvcG91dEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtX19pbnB1dFwiKVxyXG4gICAgKTtcclxuICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcbiAgX2dldElucHV0VmFsdWVzKCkge1xyXG4gICAgY29uc3QgaW5wdXRPYmogPSB7fTtcclxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgaW5wdXRPYmpbaW5wdXRFbGVtZW50Lm5hbWVdID0gaW5wdXRFbGVtZW50LnZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gaW5wdXRPYmo7XHJcbiAgfVxyXG4gIHN1Ym1pdEhhbmRsZShldnQpIHtcclxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5fYnV0dG9uU3VibWl0LnRleHRDb250ZW50ID0gXCJHdWFyZGFuZG8uLi5cIjtcclxuICAgIHRoaXMuX2Zvcm1TdWJtaXRIYW5kbGVyKHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xyXG4gICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSBcIlwiO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMuX3BvcG91dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLl9zdWJtaXRIYW5kbGUpO1xyXG4gIH1cclxuICBvcGVuKCkge1xyXG4gICAgc3VwZXIub3BlbigpO1xyXG4gICAgdGhpcy5fYnV0dG9uU3VibWl0LnRleHRDb250ZW50ID0gXCJHdWFyZGFyXCI7XHJcbiAgfVxyXG4gIGNsb3NlKCkge1xyXG4gICAgc3VwZXIuY2xvc2UoKTtcclxuICAgIHRoaXMuX2J1dHRvbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm1fX3N1Ym1pdFwiKTtcclxuICAgIHRoaXMuX2J1dHRvbkxpc3QuZm9yRWFjaCgoYnV0dG9uRWxlbWVudCkgPT4ge1xyXG4gICAgICBidXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmb3JtX19zdWJtaXRfaW5hY3RpdmVcIik7XHJcbiAgICAgIGJ1dHRvbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQb3BvdXQgZnJvbSBcIi4vUG9wb3V0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3BvdXRXaXRoSW1hZ2UgZXh0ZW5kcyBQb3BvdXQge1xyXG4gIGNvbnN0cnVjdG9yKHBvcG91dFNlbGVjdG9yKSB7XHJcbiAgICBzdXBlcihwb3BvdXRTZWxlY3Rvcik7XHJcbiAgfVxyXG4gIG9wZW4odGl0bGUsIGxpbmspIHtcclxuICAgIHN1cGVyLm9wZW4oKTtcclxuXHJcbiAgICBjb25zdCBpbWFnZVBvcG91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wb3V0LWltYWdlXCIpO1xyXG4gICAgY29uc3QgaW1hZ2VQb3BvdXRUaXRsZSA9IGltYWdlUG9wb3V0LnF1ZXJ5U2VsZWN0b3IoXCIucG9wb3V0LWltYWdlX190aXRsZVwiKTtcclxuICAgIGNvbnN0IGltYWdlUG9wb3V0SW1hZ2UgPSBpbWFnZVBvcG91dC5xdWVyeVNlbGVjdG9yKFwiLnBvcG91dC1pbWFnZV9faW1hZ2VcIik7XHJcblxyXG4gICAgaW1hZ2VQb3BvdXRUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgaW1hZ2VQb3BvdXRJbWFnZS5zcmMgPSBsaW5rO1xyXG4gICAgaW1hZ2VQb3BvdXRJbWFnZS5hbHQgPSB0aXRsZTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgY3NzU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XHJcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgdGhpcy5fY3NzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY3NzU2VsZWN0b3IpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKHRoaXMuX3JlbmRlcmVyKTtcclxuICB9XHJcbiAgYWRkSXRlbShlbGVtZW50KSB7XHJcbiAgICB0aGlzLl9jc3NFbGVtZW50LnByZXBlbmQoZWxlbWVudCk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcclxuICBjb25zdHJ1Y3Rvcih7IG5hbWVTZWxlY3RvciwgYWJvdXRTZWxlY3RvciwgYXZhdGFyU2VsZWN0b3IgfSkge1xyXG4gICAgdGhpcy5fbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hbWVTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9hYm91dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGFib3V0U2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fYXZhdGFyU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGF2YXRhclNlbGVjdG9yKTtcclxuICB9XHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lOiB0aGlzLl9uYW1lRWxlbWVudC50ZXh0Q29udGVudCxcclxuICAgICAgYWJvdXQ6IHRoaXMuX2Fib3V0RWxlbWVudC50ZXh0Q29udGVudCxcclxuICAgIH07XHJcbiAgfVxyXG4gIHNldFVzZXJJbmZvKHsgbmFtZSwgYWJvdXQgfSkge1xyXG4gICAgdGhpcy5fbmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgdGhpcy5fYWJvdXRFbGVtZW50LnRleHRDb250ZW50ID0gYWJvdXQ7XHJcbiAgfVxyXG4gIHNldFVzZXJBdmF0YXIoeyBhdmF0YXIgfSkge1xyXG4gICAgdGhpcy5fYXZhdGFyU2VsZWN0b3Iuc3JjID0gYXZhdGFyO1xyXG4gIH1cclxufVxyXG4iLCJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2R5XCIpO1xyXG5cclxuY29uc3QgYWRkQnV0dG9uID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2J1dHRvbi1hZGRcIik7XHJcbmNvbnN0IGFkZEZvcm1FbGVtZW50ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcG91dC1hZGRfX2Zvcm1cIik7XHJcblxyXG5jb25zdCBlZGl0QnV0dG9uID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2J1dHRvbi1lZGl0XCIpO1xyXG5jb25zdCBlZGl0Rm9ybUVsZW1lbnQgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wb3V0LWVkaXRfX2Zvcm1cIik7XHJcblxyXG5jb25zdCBwcm9maWxlTmFtZSA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19pbmZvLW5hbWVcIik7XHJcbmNvbnN0IHByb2ZpbGVBYm91dCA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19pbmZvLXN1YnRpdGxlXCIpO1xyXG5jb25zdCBwcm9maWxlSW1hZ2UgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9faW1hZ2VcIik7XHJcbmNvbnN0IHByb2ZpbGVJbWFnZUhvdmVyID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2ltYWdlLWhvdmVyXCIpO1xyXG5jb25zdCBwcm9maWxlRm9ybUVsZW1lbnQgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wb3V0LXByb2ZpbGVfX2Zvcm1cIik7XHJcblxyXG5jb25zdCBwb3BvdXRzQ29uZmlnID0gW1xyXG4gIHsgZm9ybVR5cGU6IFwiZWRpdFwiLCBwb3BvdXRTZWxlY3RvcjogXCIucG9wb3V0LWVkaXRcIiwgb3BlbkJ1dHRvbjogZWRpdEJ1dHRvbiB9LFxyXG4gIHsgZm9ybVR5cGU6IFwiYWRkXCIsIHBvcG91dFNlbGVjdG9yOiBcIi5wb3BvdXQtYWRkXCIsIG9wZW5CdXR0b246IGFkZEJ1dHRvbiB9LFxyXG4gIHtcclxuICAgIGZvcm1UeXBlOiBcInByb2ZpbGVcIixcclxuICAgIHBvcG91dFNlbGVjdG9yOiBcIi5wb3BvdXQtcHJvZmlsZVwiLFxyXG4gICAgb3BlbkJ1dHRvbjogcHJvZmlsZUltYWdlSG92ZXIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgYWRkRm9ybUVsZW1lbnQsXHJcbiAgZWRpdEZvcm1FbGVtZW50LFxyXG4gIHByb2ZpbGVBYm91dCxcclxuICBwcm9maWxlRm9ybUVsZW1lbnQsXHJcbiAgcHJvZmlsZUltYWdlLFxyXG4gIHByb2ZpbGVOYW1lLFxyXG4gIHBvcG91dHNDb25maWcsXHJcbn07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi4vcGFnZXMvaW5kZXguY3NzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiO1xyXG5pbXBvcnQgUG9wb3V0V2l0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wb3V0V2l0aEZvcm0uanNcIjtcclxuaW1wb3J0IFBvcG91dFdpdGhJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3BvdXRXaXRoSW1hZ2UuanNcIjtcclxuaW1wb3J0IFBvcG91dFdpdGhDb25maXJtYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wb3V0V2l0aENvbmZpcm1hdGlvbi5qc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm8uanNcIjtcclxuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xyXG5pbXBvcnQgYXBpIGZyb20gXCIuLi9jb21wb25lbnRzL0FwaS5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIGFkZEZvcm1FbGVtZW50LFxyXG4gIGVkaXRGb3JtRWxlbWVudCxcclxuICBwcm9maWxlRm9ybUVsZW1lbnQsXHJcbiAgcHJvZmlsZUltYWdlLFxyXG4gIHByb2ZpbGVOYW1lLFxyXG4gIHBvcG91dHNDb25maWcsXHJcbn0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzLmpzXCI7XHJcblxyXG5jb25zdCB6b29tUmVuZGVyID0gbmV3IFBvcG91dFdpdGhJbWFnZShcIi5wb3BvdXQtaW1hZ2VcIik7XHJcblxyXG5jb25zdCBkZWxldGVDb25maXJtYXRpb24gPSBuZXcgUG9wb3V0V2l0aENvbmZpcm1hdGlvbihcclxuICBcIi5wb3BvdXQtY29uZmlybVwiLFxyXG4gIChjYXJkSWQsIGNhcmRFbGVtZW50KSA9PiB7XHJcbiAgICBjb25maXJtYXRpb25TdWJtaXQoY2FyZElkLCBjYXJkRWxlbWVudCk7XHJcbiAgfVxyXG4pO1xyXG5cclxubGV0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHtcclxuICBuYW1lU2VsZWN0b3I6IFwiLnByb2ZpbGVfX2luZm8tbmFtZVwiLFxyXG4gIGFib3V0U2VsZWN0b3I6IFwiLnByb2ZpbGVfX2luZm8tc3VidGl0bGVcIixcclxuICBhdmF0YXJTZWxlY3RvcjogXCIucHJvZmlsZV9faW1hZ2VcIixcclxufSk7XHJcblxyXG5uZXcgRm9ybVZhbGlkYXRvcihlZGl0Rm9ybUVsZW1lbnQpO1xyXG5uZXcgRm9ybVZhbGlkYXRvcihhZGRGb3JtRWxlbWVudCk7XHJcbm5ldyBGb3JtVmFsaWRhdG9yKHByb2ZpbGVGb3JtRWxlbWVudCk7XHJcblxyXG5sZXQgcmVuZGVyU2VjdGlvbjtcclxuXHJcbmFwaVxyXG4gIC5nZXRVc2VySW5mbygpXHJcbiAgLnRoZW4oKHVzZXIpID0+IHtcclxuICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKHVzZXIpO1xyXG4gICAgcHJvZmlsZU5hbWUuaWQgPSB1c2VyLl9pZDtcclxuICAgIHByb2ZpbGVJbWFnZS5zcmMgPSB1c2VyLmF2YXRhcjtcclxuICAgIHByb2ZpbGVJbWFnZS5hbHQgPSB1c2VyLm5hbWU7XHJcbiAgICBjb25zdCB1c2VySWQgPSB1c2VyLl9pZDtcclxuICAgIGFwaVxyXG4gICAgICAuZ2V0SW5pdGlhbENhcmRzKClcclxuICAgICAgLnRoZW4oKGNhcmRzKSA9PiB7XHJcbiAgICAgICAgcmVuZGVyU2VjdGlvbiA9IG5ldyBTZWN0aW9uKFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpdGVtczogY2FyZHMsXHJcbiAgICAgICAgICAgIHJlbmRlcmVyOiAoY2FyZCkgPT4ge1xyXG4gICAgICAgICAgICAgIGdlbmVyYXRlQ2FyZEluc3RhbmNlKFxyXG4gICAgICAgICAgICAgICAgY2FyZC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgY2FyZC5saW5rLFxyXG4gICAgICAgICAgICAgICAgY2FyZC5vd25lcixcclxuICAgICAgICAgICAgICAgIGNhcmQubGlrZXMsXHJcbiAgICAgICAgICAgICAgICBjYXJkLl9pZCxcclxuICAgICAgICAgICAgICAgIHVzZXJJZCxcclxuICAgICAgICAgICAgICAgIFwiI2NhcmRcIixcclxuICAgICAgICAgICAgICAgIHpvb21SZW5kZXIub3BlbixcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUNvbmZpcm1hdGlvbi5vcGVuXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcIi5jYXJkc1wiXHJcbiAgICAgICAgKTtcclxuICAgICAgfSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIHJlbmRlclNlY3Rpb24ucmVuZGVyKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfSlcclxuICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9KTtcclxuXHJcbmZ1bmN0aW9uIGVkaXRTdWJtaXQoaW5wdXRWYWx1ZXMpIHtcclxuICBhcGlcclxuICAgIC51cGRhdGVVc2VySW5mbyhpbnB1dFZhbHVlcy5wcm9maWxlTmFtZSwgaW5wdXRWYWx1ZXMucHJvZmlsZUFib3V0KVxyXG4gICAgLnRoZW4oXHJcbiAgICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKHtcclxuICAgICAgICBuYW1lOiBpbnB1dFZhbHVlcy5wcm9maWxlTmFtZSxcclxuICAgICAgICBhYm91dDogaW5wdXRWYWx1ZXMucHJvZmlsZUFib3V0LFxyXG4gICAgICB9KVxyXG4gICAgKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdWJtaXQoaW5wdXRWYWx1ZXMpIHtcclxuICBhcGlcclxuICAgIC5hZGRDYXJkKGlucHV0VmFsdWVzLmNhcmRUaXRsZSwgaW5wdXRWYWx1ZXMuY2FyZFVybClcclxuICAgIC50aGVuKChjYXJkKSA9PiB7XHJcbiAgICAgIGdlbmVyYXRlQ2FyZEluc3RhbmNlKFxyXG4gICAgICAgIGlucHV0VmFsdWVzLmNhcmRUaXRsZSxcclxuICAgICAgICBpbnB1dFZhbHVlcy5jYXJkVXJsLFxyXG4gICAgICAgIGNhcmQub3duZXIsXHJcbiAgICAgICAgY2FyZC5saWtlcyxcclxuICAgICAgICBjYXJkLl9pZCxcclxuICAgICAgICBwcm9maWxlTmFtZS5pZCxcclxuICAgICAgICBcIiNjYXJkXCIsXHJcbiAgICAgICAgem9vbVJlbmRlci5vcGVuLFxyXG4gICAgICAgIGRlbGV0ZUNvbmZpcm1hdGlvbi5vcGVuXHJcbiAgICAgICk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9maWxlU3VibWl0KGlucHV0VmFsdWVzKSB7XHJcbiAgYXBpXHJcbiAgICAudXBkYXRlQXZhdGFyKGlucHV0VmFsdWVzLmF2YXRhclVybClcclxuICAgIC50aGVuKHVzZXJJbmZvLnNldFVzZXJBdmF0YXIoeyBhdmF0YXI6IGlucHV0VmFsdWVzLmF2YXRhclVybCB9KSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybVR5cGVTZWxlY3RvcihpbnB1dFZhbHVlcywgZm9ybVR5cGUpIHtcclxuICBpZiAoZm9ybVR5cGUgPT09IFwiZWRpdFwiKSB7XHJcbiAgICBlZGl0U3VibWl0KGlucHV0VmFsdWVzKTtcclxuICB9IGVsc2UgaWYgKGZvcm1UeXBlID09PSBcImFkZFwiKSB7XHJcbiAgICBhZGRTdWJtaXQoaW5wdXRWYWx1ZXMpO1xyXG4gIH0gZWxzZSBpZiAoZm9ybVR5cGUgPT09IFwicHJvZmlsZVwiKSB7XHJcbiAgICBwcm9maWxlU3VibWl0KGlucHV0VmFsdWVzKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbmZpcm1hdGlvblN1Ym1pdChjYXJkSWQsIGNhcmRFbGVtZW50KSB7XHJcbiAgYXBpXHJcbiAgICAuZGVsZXRlQ2FyZChjYXJkSWQpXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnV0dG9uLXRyYXNoXCIpO1xyXG4gICAgICBjYXJkRWxlbWVudC5yZW1vdmUoZGVsZXRlQnV0dG9uKTtcclxuICAgICAgZGVsZXRlQ29uZmlybWF0aW9uLmNsb3NlKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUNhcmRJbnN0YW5jZShcclxuICB0aXRsZSxcclxuICB1cmwsXHJcbiAgb3duZXIsXHJcbiAgbGlrZXMsXHJcbiAgY2FyZElkLFxyXG4gIHVzZXJJZCxcclxuICBzZWxlY3RvcixcclxuICBoYW5kbGVDYXJkQ2xpY2ssXHJcbiAgaGFuZGxlRGVsZXRlQ2xpY2tcclxuKSB7XHJcbiAgY29uc3QgbmV3Q2FyZCA9IG5ldyBDYXJkKFxyXG4gICAgdGl0bGUsXHJcbiAgICB1cmwsXHJcbiAgICBvd25lcixcclxuICAgIGxpa2VzLFxyXG4gICAgY2FyZElkLFxyXG4gICAgdXNlcklkLFxyXG4gICAgc2VsZWN0b3IsXHJcbiAgICBoYW5kbGVDYXJkQ2xpY2ssXHJcbiAgICBoYW5kbGVEZWxldGVDbGlja1xyXG4gICk7XHJcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBuZXdDYXJkLmNyZWF0ZUNhcmQoKTtcclxuICByZW5kZXJTZWN0aW9uLmFkZEl0ZW0oY2FyZEVsZW1lbnQpO1xyXG59XHJcbnBvcG91dHNDb25maWcuZm9yRWFjaCgocG9wb3V0VHlwZSkgPT4ge1xyXG4gIGNvbnN0IHBvcE91dCA9IG5ldyBQb3BvdXRXaXRoRm9ybShcclxuICAgIChpbnB1dFZhbHVlcykgPT4gZm9ybVR5cGVTZWxlY3RvcihpbnB1dFZhbHVlcywgcG9wb3V0VHlwZS5mb3JtVHlwZSksXHJcbiAgICBwb3BvdXRUeXBlLnBvcG91dFNlbGVjdG9yXHJcbiAgKTtcclxuICBwb3BvdXRUeXBlLm9wZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBvcE91dC5vcGVuKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJBcGkiLCJiYXNlVXJsIiwiaGVhZGVycyIsIl9jbGFzc0NhbGxDaGVjayIsIl9iYXNlVXJsIiwiX2hlYWRlcnMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImhhbmRsZVJlcyIsInJlcyIsIm9rIiwianNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJjb25jYXQiLCJzdGF0dXMiLCJnZXRJbml0aWFsQ2FyZHMiLCJmZXRjaCIsIm1ldGhvZCIsImF1dGhvcml6YXRpb24iLCJ0aGVuIiwiZ2V0VXNlckluZm8iLCJ1cGRhdGVVc2VySW5mbyIsIm5hbWUiLCJhYm91dCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiYWRkQ2FyZCIsImxpbmsiLCJkZWxldGVDYXJkIiwiY2FyZElkIiwiaGFuZGxlTGlrZSIsImlkIiwiaXNMaWtlZCIsImFkZExpa2UiLCJyZW1vdmVMaWtlIiwidXBkYXRlQXZhdGFyIiwiYXZhdGFyIiwiYXBpIiwiQ2FyZCIsInRpdGxlIiwidXJsIiwib3duZXIiLCJsaWtlcyIsInVzZXJJZCIsImNhcmRTZWxlY3RvciIsInpvb21DYWxsYmFjayIsImRlbGV0ZUNhbGxiYWNrIiwiX3RpdGxlIiwiX3VybCIsIl9vd25lciIsIl9saWtlcyIsIl9jYXJkSWQiLCJfdXNlcklkIiwiX2NhcmRTZWxlY3RvciIsIl96b29tQ2FsbGJhY2siLCJfZGVsZXRlQ2FsbGJhY2siLCJfZ2V0VGVtcGxhdGUiLCJjYXJkVGVtcGxhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbG9uZU5vZGUiLCJjb250ZW50IiwiY3JlYXRlQ2FyZCIsIl90aGlzIiwiX2NhcmRFbGVtZW50IiwibGlrZXNDb3VudCIsImxlbmd0aCIsImJ1dHRvbkxpa2UiLCJidXR0b25UcmFzaCIsImNhcmRJbWFnZSIsImNhcmRUaXRsZSIsImNhcmRDb3VudGVyIiwiX2lkIiwicmVtb3ZlIiwidGV4dENvbnRlbnQiLCJhbHQiLCJzcmMiLCJhZGRFdmVudExpc3RlbmVyIiwiX2FjdGl2ZUxpa2UiLCJfY291bnRlckxpa2UiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImZvckVhY2giLCJsaWtlIiwiYWRkIiwiYnV0dG9uQ291bnRlciIsIk51bWJlciIsIl9kZWxldGVDYXJkIiwiX2J1dHRvblRyYXNoIiwiZGVmYXVsdCIsIkZvcm1WYWxpZGF0b3IiLCJmb3JtVHlwZSIsIl9kZWZpbmVQcm9wZXJ0eSIsImZvcm1FbGVtZW50IiwiaW5wdXRFbGVtZW50IiwiZXJyb3JNZXNzYWdlIiwiX2Vycm9yRWxlbWVudCIsImRhdGFzZXQiLCJlcnJvciIsInZhbGlkaXR5IiwidmFsaWQiLCJfc2hvd0lucHV0RXJyb3IiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9oaWRlSW5wdXRFcnJvciIsImlucHV0TGlzdCIsInNvbWUiLCJidXR0b25FbGVtZW50IiwiX2hhc0ludmFsaWRJbnB1dCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIl9pbnB1dExpc3QiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2J1dHRvbkVsZW1lbnQiLCJfdG9nZ2xlQnV0dG9uU3RhdGUiLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX2Zvcm1UeXBlIiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJfc2V0RXZlbnRMaXN0ZW5lciIsImVuYWJsZVZhbGlkYXRpb24iLCJQb3BvdXQiLCJwb3BvdXRTZWxlY3RvciIsIl9wb3BvdXRFbGVtZW50Iiwib3ZlcmxheSIsIm9wZW4iLCJiaW5kIiwiY2xvc2UiLCJfaGFuZGxlRXNjQ2xvc2UiLCJfaGFuZGxlVGFyZ2V0Q2xvc2UiLCJzZXRFdmVudExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJQb3BvdXRXaXRoQ29uZmlybWF0aW9uIiwiX1BvcG91dCIsIl9jYWxsU3VwZXIiLCJzdWJtaXRIYW5kbGUiLCJfY29uZmlybUJ1dHRvbiIsIl9pbmhlcml0cyIsImNhcmRFbGVtZW50IiwiX2dldCIsIl9nZXRQcm90b3R5cGVPZiIsInByb3RvdHlwZSIsImNhbGwiLCJQb3BvdXRXaXRoRm9ybSIsImZvcm1TdWJtaXRIYW5kbGVyIiwiX2Zvcm1TdWJtaXRIYW5kbGVyIiwiX3N1Ym1pdEhhbmRsZSIsIl9idXR0b25TdWJtaXQiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJpbnB1dE9iaiIsIl9idXR0b25MaXN0IiwiUG9wb3V0V2l0aEltYWdlIiwiaW1hZ2VQb3BvdXQiLCJpbWFnZVBvcG91dFRpdGxlIiwiaW1hZ2VQb3BvdXRJbWFnZSIsIlNlY3Rpb24iLCJfcmVmIiwiY3NzU2VsZWN0b3IiLCJpdGVtcyIsInJlbmRlcmVyIiwiX2l0ZW1zIiwiX3JlbmRlcmVyIiwiX2Nzc0VsZW1lbnQiLCJyZW5kZXIiLCJhZGRJdGVtIiwiZWxlbWVudCIsInByZXBlbmQiLCJVc2VySW5mbyIsIm5hbWVTZWxlY3RvciIsImFib3V0U2VsZWN0b3IiLCJhdmF0YXJTZWxlY3RvciIsIl9uYW1lRWxlbWVudCIsIl9hYm91dEVsZW1lbnQiLCJfYXZhdGFyU2VsZWN0b3IiLCJzZXRVc2VySW5mbyIsIl9yZWYyIiwic2V0VXNlckF2YXRhciIsIl9yZWYzIiwiYWRkQnV0dG9uIiwiYWRkRm9ybUVsZW1lbnQiLCJlZGl0QnV0dG9uIiwiZWRpdEZvcm1FbGVtZW50IiwicHJvZmlsZU5hbWUiLCJwcm9maWxlQWJvdXQiLCJwcm9maWxlSW1hZ2UiLCJwcm9maWxlSW1hZ2VIb3ZlciIsInByb2ZpbGVGb3JtRWxlbWVudCIsInBvcG91dHNDb25maWciLCJvcGVuQnV0dG9uIiwiem9vbVJlbmRlciIsImRlbGV0ZUNvbmZpcm1hdGlvbiIsImNvbmZpcm1hdGlvblN1Ym1pdCIsInVzZXJJbmZvIiwicmVuZGVyU2VjdGlvbiIsInVzZXIiLCJjYXJkcyIsImNhcmQiLCJnZW5lcmF0ZUNhcmRJbnN0YW5jZSIsImZpbmFsbHkiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJlZGl0U3VibWl0IiwiaW5wdXRWYWx1ZXMiLCJhZGRTdWJtaXQiLCJjYXJkVXJsIiwicHJvZmlsZVN1Ym1pdCIsImF2YXRhclVybCIsImZvcm1UeXBlU2VsZWN0b3IiLCJkZWxldGVCdXR0b24iLCJzZWxlY3RvciIsImhhbmRsZUNhcmRDbGljayIsImhhbmRsZURlbGV0ZUNsaWNrIiwibmV3Q2FyZCIsInBvcG91dFR5cGUiLCJwb3BPdXQiXSwic291cmNlUm9vdCI6IiJ9