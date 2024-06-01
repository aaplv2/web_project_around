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
      cardImage.addEventListener("click", this._zoomCallback);
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
    value: function submitHandle() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQ0R5RSxLQUFLLENBQUMsVUFBQ0MsR0FBRyxFQUFLO0lBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUM7RUFDbEIsQ0FBQyxDQUFDO0FBQ047QUFFQSxTQUFTSCxvQkFBb0JBLENBQzNCaEssS0FBSyxFQUNMQyxHQUFHLEVBQ0hDLEtBQUssRUFDTEMsS0FBSyxFQUNMYixNQUFNLEVBQ05jLE1BQU0sRUFDTjBLLFFBQVEsRUFDUkMsZUFBZSxFQUNmQyxpQkFBaUIsRUFDakI7RUFDQSxJQUFNQyxPQUFPLEdBQUcsSUFBSWxMLDJEQUFJLENBQ3RCQyxLQUFLLEVBQ0xDLEdBQUcsRUFDSEMsS0FBSyxFQUNMQyxLQUFLLEVBQ0xiLE1BQU0sRUFDTmMsTUFBTSxFQUNOMEssUUFBUSxFQUNSQyxlQUFlLEVBQ2ZDLGlCQUNGLENBQUM7RUFDRCxJQUFNM0UsV0FBVyxHQUFHNEUsT0FBTyxDQUFDMUosVUFBVSxDQUFDLENBQUM7RUFDeENxSSxhQUFhLENBQUM3QixPQUFPLENBQUMxQixXQUFXLENBQUM7QUFDcEM7QUFDQWlELDBEQUFhLENBQUMzRyxPQUFPLENBQUMsVUFBQ3VJLFVBQVUsRUFBSztFQUNwQyxJQUFNQyxNQUFNLEdBQUcsSUFBSXpFLHFFQUFjLENBQy9CLFVBQUM2RCxXQUFXO0lBQUEsT0FBS0ssZ0JBQWdCLENBQUNMLFdBQVcsRUFBRVcsVUFBVSxDQUFDOUgsUUFBUSxDQUFDO0VBQUEsR0FDbkU4SCxVQUFVLENBQUM5RixjQUNiLENBQUM7RUFDRDhGLFVBQVUsQ0FBQzNCLFVBQVUsQ0FBQ2pILGdCQUFnQixDQUFDLE9BQU8sRUFBRTZJLE1BQU0sQ0FBQzVGLElBQUksQ0FBQztBQUM5RCxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9jb21wb25lbnRzL0FwaS5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2NvbXBvbmVudHMvUG9wb3V0LmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9jb21wb25lbnRzL1BvcG91dFdpdGhDb25maXJtYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2NvbXBvbmVudHMvUG9wb3V0V2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2NvbXBvbmVudHMvUG9wb3V0V2l0aEltYWdlLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwaSB7XHJcbiAgY29uc3RydWN0b3IoYmFzZVVybCwgaGVhZGVycykge1xyXG4gICAgdGhpcy5fYmFzZVVybCA9IGJhc2VVcmw7XHJcbiAgICB0aGlzLl9oZWFkZXJzID0gaGVhZGVycztcclxuICB9XHJcblxyXG4gIGhhbmRsZVJlcyhyZXMpIHtcclxuICAgIGlmIChyZXMub2spIHtcclxuICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYEVycm9yOiAke3Jlcy5zdGF0dXN9YCk7XHJcbiAgfVxyXG5cclxuICBnZXRJbml0aWFsQ2FyZHMoKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHNgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGF1dGhvcml6YXRpb246IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KS50aGVuKHRoaXMuaGFuZGxlUmVzKTtcclxuICB9XHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWVgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGF1dGhvcml6YXRpb246IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KS50aGVuKHRoaXMuaGFuZGxlUmVzKTtcclxuICB9XHJcbiAgdXBkYXRlVXNlckluZm8obmFtZSwgYWJvdXQpIHtcclxuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS91c2Vycy9tZWAsIHtcclxuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhdXRob3JpemF0aW9uOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBhYm91dCxcclxuICAgICAgfSksXHJcbiAgICB9KS50aGVuKHRoaXMuaGFuZGxlUmVzKTtcclxuICB9XHJcbiAgYWRkQ2FyZChuYW1lLCBsaW5rKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHNgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhdXRob3JpemF0aW9uOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBsaW5rLFxyXG4gICAgICB9KSxcclxuICAgIH0pLnRoZW4odGhpcy5oYW5kbGVSZXMpO1xyXG4gIH1cclxuICBkZWxldGVDYXJkKGNhcmRJZCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzLyR7Y2FyZElkfWAsIHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXV0aG9yaXphdGlvbjogdGhpcy5faGVhZGVycyxcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGNhcmRJZCxcclxuICAgICAgfSksXHJcbiAgICB9KS50aGVuKHRoaXMuaGFuZGxlUmVzKTtcclxuICB9XHJcbiAgaGFuZGxlTGlrZShpZCwgaXNMaWtlZCkge1xyXG4gICAgaWYgKGlzTGlrZWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYWRkTGlrZShpZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZW1vdmVMaWtlKGlkKTtcclxuICB9XHJcbiAgYWRkTGlrZShpZCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzL2xpa2VzLyR7aWR9YCwge1xyXG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhdXRob3JpemF0aW9uOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgIH0pLFxyXG4gICAgfSkudGhlbih0aGlzLmhhbmRsZVJlcyk7XHJcbiAgfVxyXG4gIHJlbW92ZUxpa2UoaWQpIHtcclxuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS9jYXJkcy9saWtlcy8ke2lkfWAsIHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXV0aG9yaXphdGlvbjogdGhpcy5faGVhZGVycyxcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGlkLFxyXG4gICAgICB9KSxcclxuICAgIH0pLnRoZW4odGhpcy5oYW5kbGVSZXMpO1xyXG4gIH1cclxuICB1cGRhdGVBdmF0YXIoYXZhdGFyKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWUvYXZhdGFyYCwge1xyXG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGF1dGhvcml6YXRpb246IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBhdmF0YXIsXHJcbiAgICAgIH0pLFxyXG4gICAgfSkudGhlbih0aGlzLmhhbmRsZVJlcyk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBhcGkgPSBuZXcgQXBpKFxyXG4gIGBodHRwczovL2Fyb3VuZC5ub21vcmVwYXJ0aWVzLmNvL3YxL3dlYl9lc18xMGAsXHJcbiAgXCJiZjI2ZDZlYi1lMzJhLTRkZmUtYmUwZC1hZjZlYjE5YjBhODFcIlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpO1xyXG4iLCJpbXBvcnQgYXBpIGZyb20gXCIuL0FwaVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICB0aXRsZSxcclxuICAgIHVybCxcclxuICAgIG93bmVyLFxyXG4gICAgbGlrZXMsXHJcbiAgICBjYXJkSWQsXHJcbiAgICB1c2VySWQsXHJcbiAgICBjYXJkU2VsZWN0b3IsXHJcbiAgICB6b29tQ2FsbGJhY2ssXHJcbiAgICBkZWxldGVDYWxsYmFja1xyXG4gICkge1xyXG4gICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuX3VybCA9IHVybDtcclxuICAgIHRoaXMuX293bmVyID0gb3duZXI7XHJcbiAgICB0aGlzLl9saWtlcyA9IGxpa2VzO1xyXG4gICAgdGhpcy5fY2FyZElkID0gY2FyZElkO1xyXG4gICAgdGhpcy5fdXNlcklkID0gdXNlcklkO1xyXG4gICAgdGhpcy5fY2FyZFNlbGVjdG9yID0gY2FyZFNlbGVjdG9yO1xyXG4gICAgdGhpcy5fem9vbUNhbGxiYWNrID0gem9vbUNhbGxiYWNrO1xyXG4gICAgdGhpcy5fZGVsZXRlQ2FsbGJhY2sgPSBkZWxldGVDYWxsYmFjaztcclxuICB9XHJcblxyXG4gIF9nZXRUZW1wbGF0ZSgpIHtcclxuICAgIGNvbnN0IGNhcmRUZW1wbGF0ZSA9IGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NhcmRTZWxlY3RvcilcclxuICAgICAgLmNsb25lTm9kZSh0cnVlKVxyXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIik7XHJcbiAgICByZXR1cm4gY2FyZFRlbXBsYXRlO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ2FyZCgpIHtcclxuICAgIHRoaXMuX2NhcmRFbGVtZW50ID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcclxuXHJcbiAgICBjb25zdCBsaWtlc0NvdW50ID0gdGhpcy5fbGlrZXMubGVuZ3RoO1xyXG4gICAgY29uc3QgYnV0dG9uTGlrZSA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fYnV0dG9uLWxpa2VcIik7XHJcbiAgICBjb25zdCBidXR0b25UcmFzaCA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fYnV0dG9uLXRyYXNoXCIpO1xyXG4gICAgY29uc3QgY2FyZEltYWdlID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pbWFnZVwiKTtcclxuICAgIGNvbnN0IGNhcmRUaXRsZSA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fdGl0bGVcIik7XHJcbiAgICBjb25zdCBjYXJkQ291bnRlciA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiLmNhcmRfX2J1dHRvbi1jb3VudGVyXCJcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHRoaXMuX3VzZXJJZCAhPT0gdGhpcy5fb3duZXIuX2lkKSB7XHJcbiAgICAgIGJ1dHRvblRyYXNoLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMuX3RpdGxlO1xyXG4gICAgY2FyZEltYWdlLmFsdCA9IHRoaXMuX3RpdGxlO1xyXG4gICAgY2FyZEltYWdlLnNyYyA9IHRoaXMuX3VybDtcclxuICAgIGNhcmRDb3VudGVyLnRleHRDb250ZW50ID0gbGlrZXNDb3VudDtcclxuXHJcbiAgICBidXR0b25MaWtlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2FjdGl2ZUxpa2UoKTtcclxuICAgICAgdGhpcy5fY291bnRlckxpa2UoKTtcclxuICAgICAgYXBpLmhhbmRsZUxpa2UodGhpcy5fY2FyZElkLCBidXR0b25MaWtlLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjYXJkSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuX3pvb21DYWxsYmFjayk7XHJcblxyXG4gICAgdGhpcy5fbGlrZXMuZm9yRWFjaCgobGlrZSkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5fdXNlcklkID09PSBsaWtlLl9pZCkge1xyXG4gICAgICAgIGJ1dHRvbkxpa2UuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgYnV0dG9uVHJhc2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XHJcbiAgICAgIHRoaXMuX2RlbGV0ZUNhbGxiYWNrKHRoaXMuX2NhcmRJZCwgdGhpcy5fY2FyZEVsZW1lbnQpXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9jYXJkRWxlbWVudDtcclxuICB9XHJcblxyXG4gIF9hY3RpdmVMaWtlKCkge1xyXG4gICAgY29uc3QgYnV0dG9uTGlrZSA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fYnV0dG9uLWxpa2VcIik7XHJcbiAgICBpZiAoYnV0dG9uTGlrZS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgICAgYnV0dG9uTGlrZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnV0dG9uTGlrZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2NvdW50ZXJMaWtlKCkge1xyXG4gICAgY29uc3QgYnV0dG9uTGlrZSA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fYnV0dG9uLWxpa2VcIik7XHJcbiAgICBjb25zdCBidXR0b25Db3VudGVyID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIuY2FyZF9fYnV0dG9uLWNvdW50ZXJcIlxyXG4gICAgKTtcclxuICAgIGlmIChidXR0b25MaWtlLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICBidXR0b25Db3VudGVyLnRleHRDb250ZW50ID0gTnVtYmVyKGJ1dHRvbkNvdW50ZXIudGV4dENvbnRlbnQpICsgMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJ1dHRvbkNvdW50ZXIudGV4dENvbnRlbnQgPSBOdW1iZXIoYnV0dG9uQ291bnRlci50ZXh0Q29udGVudCkgLSAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2RlbGV0ZUNhcmQoKSB7XHJcbiAgICB0aGlzLl9idXR0b25UcmFzaCA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnV0dG9uLXRyYXNoXCIpO1xyXG4gICAgdGhpcy5fY2FyZEVsZW1lbnQucmVtb3ZlKHRoaXMuX2J1dHRvblRyYXNoKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XHJcbiAgY29uc3RydWN0b3IoZm9ybVR5cGUpIHtcclxuICAgIHRoaXMuX2Zvcm1UeXBlID0gZm9ybVR5cGU7XHJcbiAgICB0aGlzLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuICB9XHJcblxyXG4gIF9zaG93SW5wdXRFcnJvciA9IChmb3JtRWxlbWVudCwgaW5wdXRFbGVtZW50LCBlcnJvck1lc3NhZ2UpID0+IHtcclxuICAgIHRoaXMuX2Vycm9yRWxlbWVudCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIGAuJHtpbnB1dEVsZW1lbnQuZGF0YXNldC5lcnJvcn0tZXJyb3JgXHJcbiAgICApO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmb3JtX19pbnB1dF90eXBlX2Vycm9yXCIpO1xyXG4gICAgdGhpcy5fZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmb3JtX19pbnB1dC1lcnJvcl9hY3RpdmVcIik7XHJcbiAgICB0aGlzLl9lcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2U7XHJcbiAgfTtcclxuXHJcbiAgX2hpZGVJbnB1dEVycm9yID0gKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgIHRoaXMuX2Vycm9yRWxlbWVudCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIGAuJHtpbnB1dEVsZW1lbnQuZGF0YXNldC5lcnJvcn0tZXJyb3JgXHJcbiAgICApO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJmb3JtX19pbnB1dF90eXBlX2Vycm9yXCIpO1xyXG4gICAgdGhpcy5fZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJmb3JtX19pbnB1dC1lcnJvcl9hY3RpdmVcIik7XHJcbiAgICB0aGlzLl9lcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIH07XHJcblxyXG4gIF9jaGVja0lucHV0VmFsaWRpdHkgPSAoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoXHJcbiAgICAgICAgZm9ybUVsZW1lbnQsXHJcbiAgICAgICAgaW5wdXRFbGVtZW50LFxyXG4gICAgICAgIGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgX2hhc0ludmFsaWRJbnB1dCA9IChpbnB1dExpc3QpID0+IHtcclxuICAgIHJldHVybiBpbnB1dExpc3Quc29tZSgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIHJldHVybiAhaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgX3RvZ2dsZUJ1dHRvblN0YXRlID0gKGlucHV0TGlzdCwgYnV0dG9uRWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dChpbnB1dExpc3QpKSB7XHJcbiAgICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZvcm1fX3N1Ym1pdF9pbmFjdGl2ZVwiKTtcclxuICAgICAgYnV0dG9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBidXR0b25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJmb3JtX19zdWJtaXRfaW5hY3RpdmVcIik7XHJcbiAgICAgIGJ1dHRvbkVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgX3NldEV2ZW50TGlzdGVuZXIgPSAoZm9ybUVsZW1lbnQpID0+IHtcclxuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20oZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtX19pbnB1dFwiKSk7XHJcbiAgICB0aGlzLl9idXR0b25FbGVtZW50ID0gZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX19zdWJtaXRcIik7XHJcbiAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSh0aGlzLl9pbnB1dExpc3QsIHRoaXMuX2J1dHRvbkVsZW1lbnQpO1xyXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSh0aGlzLl9pbnB1dExpc3QsIHRoaXMuX2J1dHRvbkVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShmb3JtRWxlbWVudCwgaW5wdXRFbGVtZW50KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBlbmFibGVWYWxpZGF0aW9uID0gKCkgPT4ge1xyXG4gICAgdGhpcy5fZm9ybVR5cGUuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZ0KSA9PiB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVyKHRoaXMuX2Zvcm1UeXBlKTtcclxuICB9O1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcG91dCB7XHJcbiAgY29uc3RydWN0b3IocG9wb3V0U2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX3BvcG91dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcG91dFNlbGVjdG9yKTtcclxuICAgIHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcmxheVwiKTtcclxuICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuX2hhbmRsZVRhcmdldENsb3NlID0gdGhpcy5faGFuZGxlVGFyZ2V0Q2xvc2UuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgb3BlbigpIHtcclxuICAgIHRoaXMuX3BvcG91dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcmxheVwiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMuX3BvcG91dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcmxheVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gIH1cclxuICBfaGFuZGxlRXNjQ2xvc2UoZXZ0KSB7XHJcbiAgICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIF9oYW5kbGVUYXJnZXRDbG9zZShldnQpIHtcclxuICAgIGlmIChldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNsb3NlXCIpKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9wb3BvdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9oYW5kbGVUYXJnZXRDbG9zZSk7XHJcbiAgICB0aGlzLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2xvc2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUG9wb3V0IGZyb20gXCIuL1BvcG91dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wb3V0V2l0aENvbmZpcm1hdGlvbiBleHRlbmRzIFBvcG91dCB7XHJcbiAgY29uc3RydWN0b3IocG9wb3V0U2VsZWN0b3IsIGRlbGV0ZUNhbGxiYWNrKSB7XHJcbiAgICBzdXBlcihwb3BvdXRTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9kZWxldGVDYWxsYmFjayA9IGRlbGV0ZUNhbGxiYWNrO1xyXG4gICAgdGhpcy5zdWJtaXRIYW5kbGUgPSB0aGlzLnN1Ym1pdEhhbmRsZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5fY29uZmlybUJ1dHRvbiA9IHRoaXMuX3BvcG91dEVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIucG9wb3V0LWNvbmZpcm1fX2J1dHRvblwiXHJcbiAgICApO1xyXG4gICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuICBvcGVuKGNhcmRJZCwgY2FyZEVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2NhcmRJZCA9IGNhcmRJZDtcclxuICAgIHRoaXMuX2NhcmRFbGVtZW50ID0gY2FyZEVsZW1lbnQ7XHJcbiAgICBzdXBlci5vcGVuKCk7XHJcbiAgfVxyXG4gIHN1Ym1pdEhhbmRsZSgpIHtcclxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5fZGVsZXRlQ2FsbGJhY2sodGhpcy5fY2FyZElkLCB0aGlzLl9jYXJkRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLl9jb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnN1Ym1pdEhhbmRsZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQb3BvdXQgZnJvbSBcIi4vUG9wb3V0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3BvdXRXaXRoRm9ybSBleHRlbmRzIFBvcG91dCB7XHJcbiAgY29uc3RydWN0b3IoZm9ybVN1Ym1pdEhhbmRsZXIsIHBvcG91dFNlbGVjdG9yKSB7XHJcbiAgICBzdXBlcihwb3BvdXRTZWxlY3Rvcik7XHJcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5fZm9ybVN1Ym1pdEhhbmRsZXIgPSBmb3JtU3VibWl0SGFuZGxlcjtcclxuICAgIHRoaXMuX3N1Ym1pdEhhbmRsZSA9IHRoaXMuc3VibWl0SGFuZGxlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLl9idXR0b25TdWJtaXQgPSB0aGlzLl9wb3BvdXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9fc3VibWl0XCIpO1xyXG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbShcclxuICAgICAgdGhpcy5fcG9wb3V0RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm1fX2lucHV0XCIpXHJcbiAgICApO1xyXG4gICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XHJcbiAgICBjb25zdCBpbnB1dE9iaiA9IHt9O1xyXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICBpbnB1dE9ialtpbnB1dEVsZW1lbnQubmFtZV0gPSBpbnB1dEVsZW1lbnQudmFsdWU7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBpbnB1dE9iajtcclxuICB9XHJcbiAgc3VibWl0SGFuZGxlKGV2dCkge1xyXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLl9idXR0b25TdWJtaXQudGV4dENvbnRlbnQgPSBcIkd1YXJkYW5kby4uLlwiO1xyXG4gICAgdGhpcy5fZm9ybVN1Ym1pdEhhbmRsZXIodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XHJcbiAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIGlucHV0RWxlbWVudC52YWx1ZSA9IFwiXCI7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5fcG9wb3V0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHRoaXMuX3N1Ym1pdEhhbmRsZSk7XHJcbiAgfVxyXG4gIG9wZW4oKSB7XHJcbiAgICBzdXBlci5vcGVuKCk7XHJcbiAgICB0aGlzLl9idXR0b25TdWJtaXQudGV4dENvbnRlbnQgPSBcIkd1YXJkYXJcIjtcclxuICB9XHJcbiAgY2xvc2UoKSB7XHJcbiAgICBzdXBlci5jbG9zZSgpO1xyXG4gICAgdGhpcy5fYnV0dG9uTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybV9fc3VibWl0XCIpO1xyXG4gICAgdGhpcy5fYnV0dG9uTGlzdC5mb3JFYWNoKChidXR0b25FbGVtZW50KSA9PiB7XHJcbiAgICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZvcm1fX3N1Ym1pdF9pbmFjdGl2ZVwiKTtcclxuICAgICAgYnV0dG9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBvcG91dCBmcm9tIFwiLi9Qb3BvdXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcG91dFdpdGhJbWFnZSBleHRlbmRzIFBvcG91dCB7XHJcbiAgY29uc3RydWN0b3IocG9wb3V0U2VsZWN0b3IpIHtcclxuICAgIHN1cGVyKHBvcG91dFNlbGVjdG9yKTtcclxuICB9XHJcbiAgb3Blbih0aXRsZSwgbGluaykge1xyXG4gICAgc3VwZXIub3BlbigpO1xyXG5cclxuICAgIGNvbnN0IGltYWdlUG9wb3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BvdXQtaW1hZ2VcIik7XHJcbiAgICBjb25zdCBpbWFnZVBvcG91dFRpdGxlID0gaW1hZ2VQb3BvdXQucXVlcnlTZWxlY3RvcihcIi5wb3BvdXQtaW1hZ2VfX3RpdGxlXCIpO1xyXG4gICAgY29uc3QgaW1hZ2VQb3BvdXRJbWFnZSA9IGltYWdlUG9wb3V0LnF1ZXJ5U2VsZWN0b3IoXCIucG9wb3V0LWltYWdlX19pbWFnZVwiKTtcclxuXHJcbiAgICBpbWFnZVBvcG91dFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICBpbWFnZVBvcG91dEltYWdlLnNyYyA9IGxpbms7XHJcbiAgICBpbWFnZVBvcG91dEltYWdlLmFsdCA9IHRpdGxlO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcclxuICBjb25zdHJ1Y3Rvcih7IGl0ZW1zLCByZW5kZXJlciB9LCBjc3NTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5faXRlbXMgPSBpdGVtcztcclxuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgICB0aGlzLl9jc3NFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjc3NTZWxlY3Rvcik7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMuX2l0ZW1zLmZvckVhY2godGhpcy5fcmVuZGVyZXIpO1xyXG4gIH1cclxuICBhZGRJdGVtKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2Nzc0VsZW1lbnQucHJlcGVuZChlbGVtZW50KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xyXG4gIGNvbnN0cnVjdG9yKHsgbmFtZVNlbGVjdG9yLCBhYm91dFNlbGVjdG9yLCBhdmF0YXJTZWxlY3RvciB9KSB7XHJcbiAgICB0aGlzLl9uYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmFtZVNlbGVjdG9yKTtcclxuICAgIHRoaXMuX2Fib3V0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYWJvdXRTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9hdmF0YXJTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYXZhdGFyU2VsZWN0b3IpO1xyXG4gIH1cclxuICBnZXRVc2VySW5mbygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5hbWU6IHRoaXMuX25hbWVFbGVtZW50LnRleHRDb250ZW50LFxyXG4gICAgICBhYm91dDogdGhpcy5fYWJvdXRFbGVtZW50LnRleHRDb250ZW50LFxyXG4gICAgfTtcclxuICB9XHJcbiAgc2V0VXNlckluZm8oeyBuYW1lLCBhYm91dCB9KSB7XHJcbiAgICB0aGlzLl9uYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICB0aGlzLl9hYm91dEVsZW1lbnQudGV4dENvbnRlbnQgPSBhYm91dDtcclxuICB9XHJcbiAgc2V0VXNlckF2YXRhcih7IGF2YXRhciB9KSB7XHJcbiAgICB0aGlzLl9hdmF0YXJTZWxlY3Rvci5zcmMgPSBhdmF0YXI7XHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvZHlcIik7XHJcblxyXG5jb25zdCBhZGRCdXR0b24gPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYnV0dG9uLWFkZFwiKTtcclxuY29uc3QgYWRkRm9ybUVsZW1lbnQgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wb3V0LWFkZF9fZm9ybVwiKTtcclxuXHJcbmNvbnN0IGVkaXRCdXR0b24gPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYnV0dG9uLWVkaXRcIik7XHJcbmNvbnN0IGVkaXRGb3JtRWxlbWVudCA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5wb3BvdXQtZWRpdF9fZm9ybVwiKTtcclxuXHJcbmNvbnN0IHByb2ZpbGVOYW1lID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2luZm8tbmFtZVwiKTtcclxuY29uc3QgcHJvZmlsZUFib3V0ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2luZm8tc3VidGl0bGVcIik7XHJcbmNvbnN0IHByb2ZpbGVJbWFnZSA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19pbWFnZVwiKTtcclxuY29uc3QgcHJvZmlsZUltYWdlSG92ZXIgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9faW1hZ2UtaG92ZXJcIik7XHJcbmNvbnN0IHByb2ZpbGVGb3JtRWxlbWVudCA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5wb3BvdXQtcHJvZmlsZV9fZm9ybVwiKTtcclxuXHJcbmNvbnN0IHBvcG91dHNDb25maWcgPSBbXHJcbiAgeyBmb3JtVHlwZTogXCJlZGl0XCIsIHBvcG91dFNlbGVjdG9yOiBcIi5wb3BvdXQtZWRpdFwiLCBvcGVuQnV0dG9uOiBlZGl0QnV0dG9uIH0sXHJcbiAgeyBmb3JtVHlwZTogXCJhZGRcIiwgcG9wb3V0U2VsZWN0b3I6IFwiLnBvcG91dC1hZGRcIiwgb3BlbkJ1dHRvbjogYWRkQnV0dG9uIH0sXHJcbiAge1xyXG4gICAgZm9ybVR5cGU6IFwicHJvZmlsZVwiLFxyXG4gICAgcG9wb3V0U2VsZWN0b3I6IFwiLnBvcG91dC1wcm9maWxlXCIsXHJcbiAgICBvcGVuQnV0dG9uOiBwcm9maWxlSW1hZ2VIb3ZlcixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IHtcclxuICAvLyBhZGRCdXR0b24sXHJcbiAgYWRkRm9ybUVsZW1lbnQsXHJcbiAgLy8gZWRpdEJ1dHRvbixcclxuICBlZGl0Rm9ybUVsZW1lbnQsXHJcbiAgcHJvZmlsZUFib3V0LFxyXG4gIHByb2ZpbGVGb3JtRWxlbWVudCxcclxuICBwcm9maWxlSW1hZ2UsXHJcbiAgLy8gcHJvZmlsZUltYWdlSG92ZXIsXHJcbiAgcHJvZmlsZU5hbWUsXHJcbiAgcG9wb3V0c0NvbmZpZyxcclxufTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuLi9wYWdlcy9pbmRleC5jc3NcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzXCI7XHJcbmltcG9ydCBQb3BvdXRXaXRoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3BvdXRXaXRoRm9ybS5qc1wiO1xyXG5pbXBvcnQgUG9wb3V0V2l0aEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcG91dFdpdGhJbWFnZS5qc1wiO1xyXG5pbXBvcnQgUG9wb3V0V2l0aENvbmZpcm1hdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3BvdXRXaXRoQ29uZmlybWF0aW9uLmpzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5mby5qc1wiO1xyXG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBpLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgLy8gYWRkQnV0dG9uLFxyXG4gIGFkZEZvcm1FbGVtZW50LFxyXG4gIC8vIGVkaXRCdXR0b24sXHJcbiAgZWRpdEZvcm1FbGVtZW50LFxyXG4gIHByb2ZpbGVGb3JtRWxlbWVudCxcclxuICBwcm9maWxlSW1hZ2UsXHJcbiAgLy8gcHJvZmlsZUltYWdlSG92ZXIsXHJcbiAgcHJvZmlsZU5hbWUsXHJcbiAgcG9wb3V0c0NvbmZpZyxcclxufSBmcm9tIFwiLi4vdXRpbHMvdXRpbHMuanNcIjtcclxuXHJcbmNvbnN0IHpvb21SZW5kZXIgPSBuZXcgUG9wb3V0V2l0aEltYWdlKFwiLnBvcG91dC1pbWFnZVwiKTtcclxuXHJcbmNvbnN0IGRlbGV0ZUNvbmZpcm1hdGlvbiA9IG5ldyBQb3BvdXRXaXRoQ29uZmlybWF0aW9uKFxyXG4gIFwiLnBvcG91dC1jb25maXJtXCIsXHJcbiAgKGNhcmRJZCwgY2FyZEVsZW1lbnQpID0+IHtcclxuICAgIGNvbmZpcm1hdGlvblN1Ym1pdChjYXJkSWQsIGNhcmRFbGVtZW50KTtcclxuICB9XHJcbik7XHJcblxyXG5sZXQgdXNlckluZm8gPSBuZXcgVXNlckluZm8oe1xyXG4gIG5hbWVTZWxlY3RvcjogXCIucHJvZmlsZV9faW5mby1uYW1lXCIsXHJcbiAgYWJvdXRTZWxlY3RvcjogXCIucHJvZmlsZV9faW5mby1zdWJ0aXRsZVwiLFxyXG4gIGF2YXRhclNlbGVjdG9yOiBcIi5wcm9maWxlX19pbWFnZVwiLFxyXG59KTtcclxuXHJcbm5ldyBGb3JtVmFsaWRhdG9yKGVkaXRGb3JtRWxlbWVudCk7XHJcbm5ldyBGb3JtVmFsaWRhdG9yKGFkZEZvcm1FbGVtZW50KTtcclxubmV3IEZvcm1WYWxpZGF0b3IocHJvZmlsZUZvcm1FbGVtZW50KTtcclxuXHJcbmxldCByZW5kZXJTZWN0aW9uO1xyXG5cclxuYXBpXHJcbiAgLmdldFVzZXJJbmZvKClcclxuICAudGhlbigodXNlcikgPT4ge1xyXG4gICAgdXNlckluZm8uc2V0VXNlckluZm8odXNlcik7XHJcbiAgICBwcm9maWxlTmFtZS5pZCA9IHVzZXIuX2lkO1xyXG4gICAgcHJvZmlsZUltYWdlLnNyYyA9IHVzZXIuYXZhdGFyO1xyXG4gICAgcHJvZmlsZUltYWdlLmFsdCA9IHVzZXIubmFtZTtcclxuICAgIGNvbnN0IHVzZXJJZCA9IHVzZXIuX2lkO1xyXG4gICAgYXBpXHJcbiAgICAgIC5nZXRJbml0aWFsQ2FyZHMoKVxyXG4gICAgICAudGhlbigoY2FyZHMpID0+IHtcclxuICAgICAgICByZW5kZXJTZWN0aW9uID0gbmV3IFNlY3Rpb24oXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiBjYXJkcyxcclxuICAgICAgICAgICAgcmVuZGVyZXI6IChjYXJkKSA9PiB7XHJcbiAgICAgICAgICAgICAgZ2VuZXJhdGVDYXJkSW5zdGFuY2UoXHJcbiAgICAgICAgICAgICAgICBjYXJkLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBjYXJkLmxpbmssXHJcbiAgICAgICAgICAgICAgICBjYXJkLm93bmVyLFxyXG4gICAgICAgICAgICAgICAgY2FyZC5saWtlcyxcclxuICAgICAgICAgICAgICAgIGNhcmQuX2lkLFxyXG4gICAgICAgICAgICAgICAgdXNlcklkLFxyXG4gICAgICAgICAgICAgICAgXCIjY2FyZFwiLFxyXG4gICAgICAgICAgICAgICAgem9vbVJlbmRlci5vcGVuLFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlQ29uZmlybWF0aW9uLm9wZW5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwiLmNhcmRzXCJcclxuICAgICAgICApO1xyXG4gICAgICB9KVxyXG4gICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgcmVuZGVyU2VjdGlvbi5yZW5kZXIoKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9KVxyXG4gIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH0pO1xyXG5cclxuZnVuY3Rpb24gZWRpdFN1Ym1pdChpbnB1dFZhbHVlcykge1xyXG4gIGFwaVxyXG4gICAgLnVwZGF0ZVVzZXJJbmZvKGlucHV0VmFsdWVzLnByb2ZpbGVOYW1lLCBpbnB1dFZhbHVlcy5wcm9maWxlQWJvdXQpXHJcbiAgICAudGhlbihcclxuICAgICAgdXNlckluZm8uc2V0VXNlckluZm8oe1xyXG4gICAgICAgIG5hbWU6IGlucHV0VmFsdWVzLnByb2ZpbGVOYW1lLFxyXG4gICAgICAgIGFib3V0OiBpbnB1dFZhbHVlcy5wcm9maWxlQWJvdXQsXHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN1Ym1pdChpbnB1dFZhbHVlcykge1xyXG4gIGFwaVxyXG4gICAgLmFkZENhcmQoaW5wdXRWYWx1ZXMuY2FyZFRpdGxlLCBpbnB1dFZhbHVlcy5jYXJkVXJsKVxyXG4gICAgLnRoZW4oKGNhcmQpID0+IHtcclxuICAgICAgZ2VuZXJhdGVDYXJkSW5zdGFuY2UoXHJcbiAgICAgICAgaW5wdXRWYWx1ZXMuY2FyZFRpdGxlLFxyXG4gICAgICAgIGlucHV0VmFsdWVzLmNhcmRVcmwsXHJcbiAgICAgICAgY2FyZC5vd25lcixcclxuICAgICAgICBjYXJkLmxpa2VzLFxyXG4gICAgICAgIGNhcmQuX2lkLFxyXG4gICAgICAgIHByb2ZpbGVOYW1lLmlkLFxyXG4gICAgICAgIFwiI2NhcmRcIixcclxuICAgICAgICB6b29tUmVuZGVyLm9wZW4sXHJcbiAgICAgICAgZGVsZXRlQ29uZmlybWF0aW9uLm9wZW5cclxuICAgICAgKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2ZpbGVTdWJtaXQoaW5wdXRWYWx1ZXMpIHtcclxuICBhcGlcclxuICAgIC51cGRhdGVBdmF0YXIoaW5wdXRWYWx1ZXMuYXZhdGFyVXJsKVxyXG4gICAgLnRoZW4odXNlckluZm8uc2V0VXNlckF2YXRhcih7IGF2YXRhcjogaW5wdXRWYWx1ZXMuYXZhdGFyVXJsIH0pKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtVHlwZVNlbGVjdG9yKGlucHV0VmFsdWVzLCBmb3JtVHlwZSkge1xyXG4gIGlmIChmb3JtVHlwZSA9PT0gXCJlZGl0XCIpIHtcclxuICAgIGVkaXRTdWJtaXQoaW5wdXRWYWx1ZXMpO1xyXG4gIH0gZWxzZSBpZiAoZm9ybVR5cGUgPT09IFwiYWRkXCIpIHtcclxuICAgIGFkZFN1Ym1pdChpbnB1dFZhbHVlcyk7XHJcbiAgfSBlbHNlIGlmIChmb3JtVHlwZSA9PT0gXCJwcm9maWxlXCIpIHtcclxuICAgIHByb2ZpbGVTdWJtaXQoaW5wdXRWYWx1ZXMpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29uZmlybWF0aW9uU3VibWl0KGNhcmRJZCwgY2FyZEVsZW1lbnQpIHtcclxuICBhcGlcclxuICAgIC5kZWxldGVDYXJkKGNhcmRJZClcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNidXR0b24tdHJhc2hcIik7XHJcbiAgICAgIGNhcmRFbGVtZW50LnJlbW92ZShkZWxldGVCdXR0b24pO1xyXG4gICAgICBkZWxldGVDb25maXJtYXRpb24uY2xvc2UoKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQ2FyZEluc3RhbmNlKFxyXG4gIHRpdGxlLFxyXG4gIHVybCxcclxuICBvd25lcixcclxuICBsaWtlcyxcclxuICBjYXJkSWQsXHJcbiAgdXNlcklkLFxyXG4gIHNlbGVjdG9yLFxyXG4gIGhhbmRsZUNhcmRDbGljayxcclxuICBoYW5kbGVEZWxldGVDbGlja1xyXG4pIHtcclxuICBjb25zdCBuZXdDYXJkID0gbmV3IENhcmQoXHJcbiAgICB0aXRsZSxcclxuICAgIHVybCxcclxuICAgIG93bmVyLFxyXG4gICAgbGlrZXMsXHJcbiAgICBjYXJkSWQsXHJcbiAgICB1c2VySWQsXHJcbiAgICBzZWxlY3RvcixcclxuICAgIGhhbmRsZUNhcmRDbGljayxcclxuICAgIGhhbmRsZURlbGV0ZUNsaWNrXHJcbiAgKTtcclxuICBjb25zdCBjYXJkRWxlbWVudCA9IG5ld0NhcmQuY3JlYXRlQ2FyZCgpO1xyXG4gIHJlbmRlclNlY3Rpb24uYWRkSXRlbShjYXJkRWxlbWVudCk7XHJcbn1cclxucG9wb3V0c0NvbmZpZy5mb3JFYWNoKChwb3BvdXRUeXBlKSA9PiB7XHJcbiAgY29uc3QgcG9wT3V0ID0gbmV3IFBvcG91dFdpdGhGb3JtKFxyXG4gICAgKGlucHV0VmFsdWVzKSA9PiBmb3JtVHlwZVNlbGVjdG9yKGlucHV0VmFsdWVzLCBwb3BvdXRUeXBlLmZvcm1UeXBlKSxcclxuICAgIHBvcG91dFR5cGUucG9wb3V0U2VsZWN0b3JcclxuICApO1xyXG4gIHBvcG91dFR5cGUub3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcG9wT3V0Lm9wZW4pO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIkFwaSIsImJhc2VVcmwiLCJoZWFkZXJzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2Jhc2VVcmwiLCJfaGVhZGVycyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiaGFuZGxlUmVzIiwicmVzIiwib2siLCJqc29uIiwiUHJvbWlzZSIsInJlamVjdCIsImNvbmNhdCIsInN0YXR1cyIsImdldEluaXRpYWxDYXJkcyIsImZldGNoIiwibWV0aG9kIiwiYXV0aG9yaXphdGlvbiIsInRoZW4iLCJnZXRVc2VySW5mbyIsInVwZGF0ZVVzZXJJbmZvIiwibmFtZSIsImFib3V0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhZGRDYXJkIiwibGluayIsImRlbGV0ZUNhcmQiLCJjYXJkSWQiLCJoYW5kbGVMaWtlIiwiaWQiLCJpc0xpa2VkIiwiYWRkTGlrZSIsInJlbW92ZUxpa2UiLCJ1cGRhdGVBdmF0YXIiLCJhdmF0YXIiLCJhcGkiLCJDYXJkIiwidGl0bGUiLCJ1cmwiLCJvd25lciIsImxpa2VzIiwidXNlcklkIiwiY2FyZFNlbGVjdG9yIiwiem9vbUNhbGxiYWNrIiwiZGVsZXRlQ2FsbGJhY2siLCJfdGl0bGUiLCJfdXJsIiwiX293bmVyIiwiX2xpa2VzIiwiX2NhcmRJZCIsIl91c2VySWQiLCJfY2FyZFNlbGVjdG9yIiwiX3pvb21DYWxsYmFjayIsIl9kZWxldGVDYWxsYmFjayIsIl9nZXRUZW1wbGF0ZSIsImNhcmRUZW1wbGF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsb25lTm9kZSIsImNvbnRlbnQiLCJjcmVhdGVDYXJkIiwiX3RoaXMiLCJfY2FyZEVsZW1lbnQiLCJsaWtlc0NvdW50IiwibGVuZ3RoIiwiYnV0dG9uTGlrZSIsImJ1dHRvblRyYXNoIiwiY2FyZEltYWdlIiwiY2FyZFRpdGxlIiwiY2FyZENvdW50ZXIiLCJfaWQiLCJyZW1vdmUiLCJ0ZXh0Q29udGVudCIsImFsdCIsInNyYyIsImFkZEV2ZW50TGlzdGVuZXIiLCJfYWN0aXZlTGlrZSIsIl9jb3VudGVyTGlrZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZm9yRWFjaCIsImxpa2UiLCJhZGQiLCJidXR0b25Db3VudGVyIiwiTnVtYmVyIiwiX2RlbGV0ZUNhcmQiLCJfYnV0dG9uVHJhc2giLCJkZWZhdWx0IiwiRm9ybVZhbGlkYXRvciIsImZvcm1UeXBlIiwiX2RlZmluZVByb3BlcnR5IiwiZm9ybUVsZW1lbnQiLCJpbnB1dEVsZW1lbnQiLCJlcnJvck1lc3NhZ2UiLCJfZXJyb3JFbGVtZW50IiwiZGF0YXNldCIsImVycm9yIiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9zaG93SW5wdXRFcnJvciIsInZhbGlkYXRpb25NZXNzYWdlIiwiX2hpZGVJbnB1dEVycm9yIiwiaW5wdXRMaXN0Iiwic29tZSIsImJ1dHRvbkVsZW1lbnQiLCJfaGFzSW52YWxpZElucHV0Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiX2lucHV0TGlzdCIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfYnV0dG9uRWxlbWVudCIsIl90b2dnbGVCdXR0b25TdGF0ZSIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJfZm9ybVR5cGUiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsIl9zZXRFdmVudExpc3RlbmVyIiwiZW5hYmxlVmFsaWRhdGlvbiIsIlBvcG91dCIsInBvcG91dFNlbGVjdG9yIiwiX3BvcG91dEVsZW1lbnQiLCJvdmVybGF5Iiwib3BlbiIsImJpbmQiLCJjbG9zZSIsIl9oYW5kbGVFc2NDbG9zZSIsIl9oYW5kbGVUYXJnZXRDbG9zZSIsInNldEV2ZW50TGlzdGVuZXJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRhcmdldCIsIlBvcG91dFdpdGhDb25maXJtYXRpb24iLCJfUG9wb3V0IiwiX2NhbGxTdXBlciIsInN1Ym1pdEhhbmRsZSIsIl9jb25maXJtQnV0dG9uIiwiX2luaGVyaXRzIiwiY2FyZEVsZW1lbnQiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiY2FsbCIsIlBvcG91dFdpdGhGb3JtIiwiZm9ybVN1Ym1pdEhhbmRsZXIiLCJfZm9ybVN1Ym1pdEhhbmRsZXIiLCJfc3VibWl0SGFuZGxlIiwiX2J1dHRvblN1Ym1pdCIsIl9nZXRJbnB1dFZhbHVlcyIsImlucHV0T2JqIiwiX2J1dHRvbkxpc3QiLCJQb3BvdXRXaXRoSW1hZ2UiLCJpbWFnZVBvcG91dCIsImltYWdlUG9wb3V0VGl0bGUiLCJpbWFnZVBvcG91dEltYWdlIiwiU2VjdGlvbiIsIl9yZWYiLCJjc3NTZWxlY3RvciIsIml0ZW1zIiwicmVuZGVyZXIiLCJfaXRlbXMiLCJfcmVuZGVyZXIiLCJfY3NzRWxlbWVudCIsInJlbmRlciIsImFkZEl0ZW0iLCJlbGVtZW50IiwicHJlcGVuZCIsIlVzZXJJbmZvIiwibmFtZVNlbGVjdG9yIiwiYWJvdXRTZWxlY3RvciIsImF2YXRhclNlbGVjdG9yIiwiX25hbWVFbGVtZW50IiwiX2Fib3V0RWxlbWVudCIsIl9hdmF0YXJTZWxlY3RvciIsInNldFVzZXJJbmZvIiwiX3JlZjIiLCJzZXRVc2VyQXZhdGFyIiwiX3JlZjMiLCJhZGRCdXR0b24iLCJhZGRGb3JtRWxlbWVudCIsImVkaXRCdXR0b24iLCJlZGl0Rm9ybUVsZW1lbnQiLCJwcm9maWxlTmFtZSIsInByb2ZpbGVBYm91dCIsInByb2ZpbGVJbWFnZSIsInByb2ZpbGVJbWFnZUhvdmVyIiwicHJvZmlsZUZvcm1FbGVtZW50IiwicG9wb3V0c0NvbmZpZyIsIm9wZW5CdXR0b24iLCJ6b29tUmVuZGVyIiwiZGVsZXRlQ29uZmlybWF0aW9uIiwiY29uZmlybWF0aW9uU3VibWl0IiwidXNlckluZm8iLCJyZW5kZXJTZWN0aW9uIiwidXNlciIsImNhcmRzIiwiY2FyZCIsImdlbmVyYXRlQ2FyZEluc3RhbmNlIiwiZmluYWxseSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImVkaXRTdWJtaXQiLCJpbnB1dFZhbHVlcyIsImFkZFN1Ym1pdCIsImNhcmRVcmwiLCJwcm9maWxlU3VibWl0IiwiYXZhdGFyVXJsIiwiZm9ybVR5cGVTZWxlY3RvciIsImRlbGV0ZUJ1dHRvbiIsInNlbGVjdG9yIiwiaGFuZGxlQ2FyZENsaWNrIiwiaGFuZGxlRGVsZXRlQ2xpY2siLCJuZXdDYXJkIiwicG9wb3V0VHlwZSIsInBvcE91dCJdLCJzb3VyY2VSb290IjoiIn0=