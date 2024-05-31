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
/* harmony export */   addButton: () => (/* binding */ addButton),
/* harmony export */   addFormElement: () => (/* binding */ addFormElement),
/* harmony export */   editButton: () => (/* binding */ editButton),
/* harmony export */   editFormElement: () => (/* binding */ editFormElement),
/* harmony export */   profileAbout: () => (/* binding */ profileAbout),
/* harmony export */   profileFormElement: () => (/* binding */ profileFormElement),
/* harmony export */   profileImage: () => (/* binding */ profileImage),
/* harmony export */   profileImageHover: () => (/* binding */ profileImageHover),
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
deleteConfirmation.setEventListeners();
function confirmationSubmit(cardId, cardElement) {
  _components_Api_js__WEBPACK_IMPORTED_MODULE_8__["default"].deleteCard(cardId).then(function () {
    var deleteButton = cardElement.querySelector("#button-trash");
    cardElement.remove(deleteButton);
    deleteConfirmation.close();
  }).catch(function (err) {
    console.log(err);
  });
}
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
  nameSelector: ".profile__info-name",
  aboutSelector: ".profile__info-subtitle",
  avatarSelector: ".profile__image"
});
var renderSection;
_components_Api_js__WEBPACK_IMPORTED_MODULE_8__["default"].getUserInfo().then(function (user) {
  _utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.profileName.textContent = user.name;
  _utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.profileAbout.textContent = user.about;
  _utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.profileName.id = user._id;
  _utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.profileImage.src = user.avatar;
  _utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.profileImage.alt = user.name;
  var userId = user._id;
  _components_Api_js__WEBPACK_IMPORTED_MODULE_8__["default"].getInitialCards().then(function (cards) {
    renderSection = new _components_Section_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
      items: cards,
      renderer: function renderer(card) {
        var newCard = new _components_Card_js__WEBPACK_IMPORTED_MODULE_1__["default"](card.name, card.link, card.owner, card.likes, card._id, userId, "#card", function () {
          zoomRender.open(card.name, card.link);
        }, deleteConfirmation.open);
        var cardElement = newCard.createCard();
        renderSection.addItem(cardElement);
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
var editPopout = new _components_PopoutWithForm_js__WEBPACK_IMPORTED_MODULE_3__["default"](function (inputValues) {
  return formTypeSelector(inputValues, "edit");
}, ".popout-edit");
editPopout.setEventListeners();
var newEditValidation = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_7__["default"](_utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.editFormElement);
newEditValidation.enableValidation();
var addPopout = new _components_PopoutWithForm_js__WEBPACK_IMPORTED_MODULE_3__["default"](function (inputValues) {
  return formTypeSelector(inputValues, "add");
}, ".popout-add");
addPopout.setEventListeners();
var newAddValidation = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_7__["default"](_utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.addFormElement);
newAddValidation.enableValidation();
var profilePopout = new _components_PopoutWithForm_js__WEBPACK_IMPORTED_MODULE_3__["default"](function (inputValues) {
  return formTypeSelector(inputValues, "profile");
}, ".popout-profile");
profilePopout.setEventListeners();
var newProfileValidation = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_7__["default"](_utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.profileFormElement);
newProfileValidation.enableValidation();
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
    var newCard = new _components_Card_js__WEBPACK_IMPORTED_MODULE_1__["default"](inputValues.cardTitle, inputValues.cardUrl, card.owner, card.likes, card._id, _utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.profileName.id, "#card", function () {
      zoomRender.open(card.name, card.link);
    }, deleteConfirmation.open);
    var cardElement = newCard.createCard();
    renderSection.addItem(cardElement);
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
_utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.editButton.addEventListener("click", editPopout.open);
_utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.addButton.addEventListener("click", addPopout.open);
_utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.profileImageHover.addEventListener("click", profilePopout.open);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDckRzRCxzREFBUyxDQUFDdEcsZ0JBQWdCLENBQUMsT0FBTyxFQUFFbUksU0FBUyxDQUFDbkYsSUFBSSxDQUFDO0FBQ25ENkQsOERBQWlCLENBQUM3RyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVxSSxhQUFhLENBQUNyRixJQUFJLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9jb21wb25lbnRzL0FwaS5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2NvbXBvbmVudHMvUG9wb3V0LmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9jb21wb25lbnRzL1BvcG91dFdpdGhDb25maXJtYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2NvbXBvbmVudHMvUG9wb3V0V2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2NvbXBvbmVudHMvUG9wb3V0V2l0aEltYWdlLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwaSB7XHJcbiAgY29uc3RydWN0b3IoYmFzZVVybCwgaGVhZGVycykge1xyXG4gICAgdGhpcy5fYmFzZVVybCA9IGJhc2VVcmw7XHJcbiAgICB0aGlzLl9oZWFkZXJzID0gaGVhZGVycztcclxuICB9XHJcblxyXG4gIGhhbmRsZVJlcyhyZXMpIHtcclxuICAgIGlmIChyZXMub2spIHtcclxuICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYEVycm9yOiAke3Jlcy5zdGF0dXN9YCk7XHJcbiAgfVxyXG5cclxuICBnZXRJbml0aWFsQ2FyZHMoKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHNgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGF1dGhvcml6YXRpb246IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KS50aGVuKHRoaXMuaGFuZGxlUmVzKTtcclxuICB9XHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWVgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGF1dGhvcml6YXRpb246IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KS50aGVuKHRoaXMuaGFuZGxlUmVzKTtcclxuICB9XHJcbiAgdXBkYXRlVXNlckluZm8obmFtZSwgYWJvdXQpIHtcclxuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS91c2Vycy9tZWAsIHtcclxuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhdXRob3JpemF0aW9uOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBhYm91dCxcclxuICAgICAgfSksXHJcbiAgICB9KS50aGVuKHRoaXMuaGFuZGxlUmVzKTtcclxuICB9XHJcbiAgYWRkQ2FyZChuYW1lLCBsaW5rKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHNgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhdXRob3JpemF0aW9uOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBsaW5rLFxyXG4gICAgICB9KSxcclxuICAgIH0pLnRoZW4odGhpcy5oYW5kbGVSZXMpO1xyXG4gIH1cclxuICBkZWxldGVDYXJkKGNhcmRJZCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzLyR7Y2FyZElkfWAsIHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXV0aG9yaXphdGlvbjogdGhpcy5faGVhZGVycyxcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGNhcmRJZCxcclxuICAgICAgfSksXHJcbiAgICB9KS50aGVuKHRoaXMuaGFuZGxlUmVzKTtcclxuICB9XHJcbiAgaGFuZGxlTGlrZShpZCwgaXNMaWtlZCkge1xyXG4gICAgaWYgKGlzTGlrZWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYWRkTGlrZShpZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZW1vdmVMaWtlKGlkKTtcclxuICB9XHJcbiAgYWRkTGlrZShpZCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzL2xpa2VzLyR7aWR9YCwge1xyXG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhdXRob3JpemF0aW9uOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgIH0pLFxyXG4gICAgfSkudGhlbih0aGlzLmhhbmRsZVJlcyk7XHJcbiAgfVxyXG4gIHJlbW92ZUxpa2UoaWQpIHtcclxuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS9jYXJkcy9saWtlcy8ke2lkfWAsIHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXV0aG9yaXphdGlvbjogdGhpcy5faGVhZGVycyxcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGlkLFxyXG4gICAgICB9KSxcclxuICAgIH0pLnRoZW4odGhpcy5oYW5kbGVSZXMpO1xyXG4gIH1cclxuICB1cGRhdGVBdmF0YXIoYXZhdGFyKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWUvYXZhdGFyYCwge1xyXG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGF1dGhvcml6YXRpb246IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBhdmF0YXIsXHJcbiAgICAgIH0pLFxyXG4gICAgfSkudGhlbih0aGlzLmhhbmRsZVJlcyk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBhcGkgPSBuZXcgQXBpKFxyXG4gIGBodHRwczovL2Fyb3VuZC5ub21vcmVwYXJ0aWVzLmNvL3YxL3dlYl9lc18xMGAsXHJcbiAgXCJiZjI2ZDZlYi1lMzJhLTRkZmUtYmUwZC1hZjZlYjE5YjBhODFcIlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpO1xyXG4iLCJpbXBvcnQgYXBpIGZyb20gXCIuL0FwaVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICB0aXRsZSxcclxuICAgIHVybCxcclxuICAgIG93bmVyLFxyXG4gICAgbGlrZXMsXHJcbiAgICBjYXJkSWQsXHJcbiAgICB1c2VySWQsXHJcbiAgICBjYXJkU2VsZWN0b3IsXHJcbiAgICB6b29tQ2FsbGJhY2ssXHJcbiAgICBkZWxldGVDYWxsYmFja1xyXG4gICkge1xyXG4gICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuX3VybCA9IHVybDtcclxuICAgIHRoaXMuX293bmVyID0gb3duZXI7XHJcbiAgICB0aGlzLl9saWtlcyA9IGxpa2VzO1xyXG4gICAgdGhpcy5fY2FyZElkID0gY2FyZElkO1xyXG4gICAgdGhpcy5fdXNlcklkID0gdXNlcklkO1xyXG4gICAgdGhpcy5fY2FyZFNlbGVjdG9yID0gY2FyZFNlbGVjdG9yO1xyXG4gICAgdGhpcy5fem9vbUNhbGxiYWNrID0gem9vbUNhbGxiYWNrO1xyXG4gICAgdGhpcy5fZGVsZXRlQ2FsbGJhY2sgPSBkZWxldGVDYWxsYmFjaztcclxuICB9XHJcblxyXG4gIF9nZXRUZW1wbGF0ZSgpIHtcclxuICAgIGNvbnN0IGNhcmRUZW1wbGF0ZSA9IGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NhcmRTZWxlY3RvcilcclxuICAgICAgLmNsb25lTm9kZSh0cnVlKVxyXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIik7XHJcbiAgICByZXR1cm4gY2FyZFRlbXBsYXRlO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ2FyZCgpIHtcclxuICAgIHRoaXMuX2NhcmRFbGVtZW50ID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcclxuXHJcbiAgICBjb25zdCBsaWtlc0NvdW50ID0gdGhpcy5fbGlrZXMubGVuZ3RoO1xyXG4gICAgY29uc3QgYnV0dG9uTGlrZSA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fYnV0dG9uLWxpa2VcIik7XHJcbiAgICBjb25zdCBidXR0b25UcmFzaCA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fYnV0dG9uLXRyYXNoXCIpO1xyXG4gICAgY29uc3QgY2FyZEltYWdlID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pbWFnZVwiKTtcclxuICAgIGNvbnN0IGNhcmRUaXRsZSA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fdGl0bGVcIik7XHJcbiAgICBjb25zdCBjYXJkQ291bnRlciA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiLmNhcmRfX2J1dHRvbi1jb3VudGVyXCJcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHRoaXMuX3VzZXJJZCAhPT0gdGhpcy5fb3duZXIuX2lkKSB7XHJcbiAgICAgIGJ1dHRvblRyYXNoLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMuX3RpdGxlO1xyXG4gICAgY2FyZEltYWdlLmFsdCA9IHRoaXMuX3RpdGxlO1xyXG4gICAgY2FyZEltYWdlLnNyYyA9IHRoaXMuX3VybDtcclxuICAgIGNhcmRDb3VudGVyLnRleHRDb250ZW50ID0gbGlrZXNDb3VudDtcclxuXHJcbiAgICBidXR0b25MaWtlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2FjdGl2ZUxpa2UoKTtcclxuICAgICAgdGhpcy5fY291bnRlckxpa2UoKTtcclxuICAgICAgYXBpLmhhbmRsZUxpa2UodGhpcy5fY2FyZElkLCBidXR0b25MaWtlLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjYXJkSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuX3pvb21DYWxsYmFjayk7XHJcblxyXG4gICAgdGhpcy5fbGlrZXMuZm9yRWFjaCgobGlrZSkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5fdXNlcklkID09PSBsaWtlLl9pZCkge1xyXG4gICAgICAgIGJ1dHRvbkxpa2UuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgYnV0dG9uVHJhc2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XHJcbiAgICAgIHRoaXMuX2RlbGV0ZUNhbGxiYWNrKHRoaXMuX2NhcmRJZCwgdGhpcy5fY2FyZEVsZW1lbnQpXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9jYXJkRWxlbWVudDtcclxuICB9XHJcblxyXG4gIF9hY3RpdmVMaWtlKCkge1xyXG4gICAgY29uc3QgYnV0dG9uTGlrZSA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fYnV0dG9uLWxpa2VcIik7XHJcbiAgICBpZiAoYnV0dG9uTGlrZS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgICAgYnV0dG9uTGlrZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnV0dG9uTGlrZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2NvdW50ZXJMaWtlKCkge1xyXG4gICAgY29uc3QgYnV0dG9uTGlrZSA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fYnV0dG9uLWxpa2VcIik7XHJcbiAgICBjb25zdCBidXR0b25Db3VudGVyID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIuY2FyZF9fYnV0dG9uLWNvdW50ZXJcIlxyXG4gICAgKTtcclxuICAgIGlmIChidXR0b25MaWtlLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICBidXR0b25Db3VudGVyLnRleHRDb250ZW50ID0gTnVtYmVyKGJ1dHRvbkNvdW50ZXIudGV4dENvbnRlbnQpICsgMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJ1dHRvbkNvdW50ZXIudGV4dENvbnRlbnQgPSBOdW1iZXIoYnV0dG9uQ291bnRlci50ZXh0Q29udGVudCkgLSAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2RlbGV0ZUNhcmQoKSB7XHJcbiAgICB0aGlzLl9idXR0b25UcmFzaCA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnV0dG9uLXRyYXNoXCIpO1xyXG4gICAgdGhpcy5fY2FyZEVsZW1lbnQucmVtb3ZlKHRoaXMuX2J1dHRvblRyYXNoKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XHJcbiAgY29uc3RydWN0b3IoZm9ybVR5cGUpIHtcclxuICAgIHRoaXMuX2Zvcm1UeXBlID0gZm9ybVR5cGU7XHJcbiAgfVxyXG5cclxuICBfc2hvd0lucHV0RXJyb3IgPSAoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCwgZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICB0aGlzLl9lcnJvckVsZW1lbnQgPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgLiR7aW5wdXRFbGVtZW50LmRhdGFzZXQuZXJyb3J9LWVycm9yYFxyXG4gICAgKTtcclxuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9faW5wdXRfdHlwZV9lcnJvclwiKTtcclxuICAgIHRoaXMuX2Vycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9faW5wdXQtZXJyb3JfYWN0aXZlXCIpO1xyXG4gICAgdGhpcy5fZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gZXJyb3JNZXNzYWdlO1xyXG4gIH07XHJcblxyXG4gIF9oaWRlSW5wdXRFcnJvciA9IChmb3JtRWxlbWVudCwgaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICB0aGlzLl9lcnJvckVsZW1lbnQgPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgLiR7aW5wdXRFbGVtZW50LmRhdGFzZXQuZXJyb3J9LWVycm9yYFxyXG4gICAgKTtcclxuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybV9faW5wdXRfdHlwZV9lcnJvclwiKTtcclxuICAgIHRoaXMuX2Vycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybV9faW5wdXQtZXJyb3JfYWN0aXZlXCIpO1xyXG4gICAgdGhpcy5fZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICB9O1xyXG5cclxuICBfY2hlY2tJbnB1dFZhbGlkaXR5ID0gKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgIGlmICghaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKFxyXG4gICAgICAgIGZvcm1FbGVtZW50LFxyXG4gICAgICAgIGlucHV0RWxlbWVudCxcclxuICAgICAgICBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2VcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIF9oYXNJbnZhbGlkSW5wdXQgPSAoaW5wdXRMaXN0KSA9PiB7XHJcbiAgICByZXR1cm4gaW5wdXRMaXN0LnNvbWUoKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICByZXR1cm4gIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZDtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIF90b2dnbGVCdXR0b25TdGF0ZSA9IChpbnB1dExpc3QsIGJ1dHRvbkVsZW1lbnQpID0+IHtcclxuICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXQoaW5wdXRMaXN0KSkge1xyXG4gICAgICBidXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmb3JtX19zdWJtaXRfaW5hY3RpdmVcIik7XHJcbiAgICAgIGJ1dHRvbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybV9fc3VibWl0X2luYWN0aXZlXCIpO1xyXG4gICAgICBidXR0b25FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVyID0gKGZvcm1FbGVtZW50KSA9PiB7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QgPSBBcnJheS5mcm9tKGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybV9faW5wdXRcIikpO1xyXG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9fc3VibWl0XCIpO1xyXG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUodGhpcy5faW5wdXRMaXN0LCB0aGlzLl9idXR0b25FbGVtZW50KTtcclxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUodGhpcy5faW5wdXRMaXN0LCB0aGlzLl9idXR0b25FbGVtZW50KTtcclxuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZW5hYmxlVmFsaWRhdGlvbiA9ICgpID0+IHtcclxuICAgIHRoaXMuX2Zvcm1UeXBlLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcih0aGlzLl9mb3JtVHlwZSk7XHJcbiAgfTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3BvdXQge1xyXG4gIGNvbnN0cnVjdG9yKHBvcG91dFNlbGVjdG9yKSB7XHJcbiAgICB0aGlzLl9wb3BvdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3BvdXRTZWxlY3Rvcik7XHJcbiAgICB0aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJsYXlcIik7XHJcbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLl9oYW5kbGVFc2NDbG9zZSA9IHRoaXMuX2hhbmRsZUVzY0Nsb3NlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLl9oYW5kbGVUYXJnZXRDbG9zZSA9IHRoaXMuX2hhbmRsZVRhcmdldENsb3NlLmJpbmQodGhpcyk7XHJcbiAgfVxyXG4gIG9wZW4oKSB7XHJcbiAgICB0aGlzLl9wb3BvdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJsYXlcIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLl9wb3BvdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJsYXlcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICB9XHJcbiAgX2hhbmRsZUVzY0Nsb3NlKGV2dCkge1xyXG4gICAgaWYgKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBfaGFuZGxlVGFyZ2V0Q2xvc2UoZXZ0KSB7XHJcbiAgICBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjbG9zZVwiKSkge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5fcG9wb3V0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5faGFuZGxlVGFyZ2V0Q2xvc2UpO1xyXG4gICAgdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNsb3NlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBvcG91dCBmcm9tIFwiLi9Qb3BvdXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcG91dFdpdGhDb25maXJtYXRpb24gZXh0ZW5kcyBQb3BvdXQge1xyXG4gIGNvbnN0cnVjdG9yKHBvcG91dFNlbGVjdG9yLCBkZWxldGVDYWxsYmFjaykge1xyXG4gICAgc3VwZXIocG9wb3V0U2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fZGVsZXRlQ2FsbGJhY2sgPSBkZWxldGVDYWxsYmFjaztcclxuICAgIHRoaXMuc3VibWl0SGFuZGxlID0gdGhpcy5zdWJtaXRIYW5kbGUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuX2NvbmZpcm1CdXR0b24gPSB0aGlzLl9wb3BvdXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiLnBvcG91dC1jb25maXJtX19idXR0b25cIlxyXG4gICAgKTtcclxuICB9XHJcbiAgb3BlbihjYXJkSWQsIGNhcmRFbGVtZW50KSB7XHJcbiAgICB0aGlzLl9jYXJkSWQgPSBjYXJkSWQ7XHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudCA9IGNhcmRFbGVtZW50O1xyXG4gICAgc3VwZXIub3BlbigpO1xyXG4gIH1cclxuICBzdWJtaXRIYW5kbGUoKSB7XHJcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuX2RlbGV0ZUNhbGxiYWNrKHRoaXMuX2NhcmRJZCwgdGhpcy5fY2FyZEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5fY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5zdWJtaXRIYW5kbGUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUG9wb3V0IGZyb20gXCIuL1BvcG91dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wb3V0V2l0aEZvcm0gZXh0ZW5kcyBQb3BvdXQge1xyXG4gIGNvbnN0cnVjdG9yKGZvcm1TdWJtaXRIYW5kbGVyLCBwb3BvdXRTZWxlY3Rvcikge1xyXG4gICAgc3VwZXIocG9wb3V0U2VsZWN0b3IpO1xyXG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuX2Zvcm1TdWJtaXRIYW5kbGVyID0gZm9ybVN1Ym1pdEhhbmRsZXI7XHJcbiAgICB0aGlzLl9zdWJtaXRIYW5kbGUgPSB0aGlzLnN1Ym1pdEhhbmRsZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5fYnV0dG9uU3VibWl0ID0gdGhpcy5fcG9wb3V0RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX3N1Ym1pdFwiKTtcclxuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20oXHJcbiAgICAgIHRoaXMuX3BvcG91dEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtX19pbnB1dFwiKVxyXG4gICAgKTtcclxuICB9XHJcbiAgX2dldElucHV0VmFsdWVzKCkge1xyXG4gICAgY29uc3QgaW5wdXRPYmogPSB7fTtcclxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgaW5wdXRPYmpbaW5wdXRFbGVtZW50Lm5hbWVdID0gaW5wdXRFbGVtZW50LnZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gaW5wdXRPYmo7XHJcbiAgfVxyXG4gIHN1Ym1pdEhhbmRsZShldnQpIHtcclxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5fYnV0dG9uU3VibWl0LnRleHRDb250ZW50ID0gXCJHdWFyZGFuZG8uLi5cIjtcclxuICAgIHRoaXMuX2Zvcm1TdWJtaXRIYW5kbGVyKHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xyXG4gICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSBcIlwiO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMuX3BvcG91dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLl9zdWJtaXRIYW5kbGUpO1xyXG4gIH1cclxuICBvcGVuKCkge1xyXG4gICAgc3VwZXIub3BlbigpO1xyXG4gICAgdGhpcy5fYnV0dG9uU3VibWl0LnRleHRDb250ZW50ID0gXCJHdWFyZGFyXCI7XHJcbiAgfVxyXG4gIGNsb3NlKCkge1xyXG4gICAgc3VwZXIuY2xvc2UoKTtcclxuICAgIHRoaXMuX2J1dHRvbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm1fX3N1Ym1pdFwiKTtcclxuICAgIHRoaXMuX2J1dHRvbkxpc3QuZm9yRWFjaCgoYnV0dG9uRWxlbWVudCkgPT4ge1xyXG4gICAgICBidXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmb3JtX19zdWJtaXRfaW5hY3RpdmVcIik7XHJcbiAgICAgIGJ1dHRvbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQb3BvdXQgZnJvbSBcIi4vUG9wb3V0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3BvdXRXaXRoSW1hZ2UgZXh0ZW5kcyBQb3BvdXQge1xyXG4gIGNvbnN0cnVjdG9yKHBvcG91dFNlbGVjdG9yKSB7XHJcbiAgICBzdXBlcihwb3BvdXRTZWxlY3Rvcik7XHJcbiAgfVxyXG4gIG9wZW4odGl0bGUsIGxpbmspIHtcclxuICAgIHN1cGVyLm9wZW4oKTtcclxuXHJcbiAgICBjb25zdCBpbWFnZVBvcG91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wb3V0LWltYWdlXCIpO1xyXG4gICAgY29uc3QgaW1hZ2VQb3BvdXRUaXRsZSA9IGltYWdlUG9wb3V0LnF1ZXJ5U2VsZWN0b3IoXCIucG9wb3V0LWltYWdlX190aXRsZVwiKTtcclxuICAgIGNvbnN0IGltYWdlUG9wb3V0SW1hZ2UgPSBpbWFnZVBvcG91dC5xdWVyeVNlbGVjdG9yKFwiLnBvcG91dC1pbWFnZV9faW1hZ2VcIik7XHJcblxyXG4gICAgaW1hZ2VQb3BvdXRUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgaW1hZ2VQb3BvdXRJbWFnZS5zcmMgPSBsaW5rO1xyXG4gICAgaW1hZ2VQb3BvdXRJbWFnZS5hbHQgPSB0aXRsZTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgY3NzU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XHJcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgdGhpcy5fY3NzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY3NzU2VsZWN0b3IpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKHRoaXMuX3JlbmRlcmVyKTtcclxuICB9XHJcbiAgYWRkSXRlbShlbGVtZW50KSB7XHJcbiAgICB0aGlzLl9jc3NFbGVtZW50LnByZXBlbmQoZWxlbWVudCk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcclxuICBjb25zdHJ1Y3Rvcih7IG5hbWVTZWxlY3RvciwgYWJvdXRTZWxlY3RvciwgYXZhdGFyU2VsZWN0b3IgfSkge1xyXG4gICAgdGhpcy5fbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hbWVTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9hYm91dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGFib3V0U2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fYXZhdGFyU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGF2YXRhclNlbGVjdG9yKTtcclxuICB9XHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lOiB0aGlzLl9uYW1lRWxlbWVudC50ZXh0Q29udGVudCxcclxuICAgICAgYWJvdXQ6IHRoaXMuX2Fib3V0RWxlbWVudC50ZXh0Q29udGVudCxcclxuICAgIH07XHJcbiAgfVxyXG4gIHNldFVzZXJJbmZvKHsgbmFtZSwgYWJvdXQgfSkge1xyXG4gICAgdGhpcy5fbmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgdGhpcy5fYWJvdXRFbGVtZW50LnRleHRDb250ZW50ID0gYWJvdXQ7XHJcbiAgfVxyXG4gIHNldFVzZXJBdmF0YXIoeyBhdmF0YXIgfSkge1xyXG4gICAgdGhpcy5fYXZhdGFyU2VsZWN0b3Iuc3JjID0gYXZhdGFyO1xyXG4gIH1cclxufVxyXG4iLCJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2R5XCIpO1xyXG5cclxuY29uc3QgYWRkQnV0dG9uID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2J1dHRvbi1hZGRcIik7XHJcbmNvbnN0IGFkZEZvcm1FbGVtZW50ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcG91dC1hZGRfX2Zvcm1cIik7XHJcblxyXG5jb25zdCBlZGl0QnV0dG9uID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2J1dHRvbi1lZGl0XCIpO1xyXG5jb25zdCBlZGl0Rm9ybUVsZW1lbnQgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wb3V0LWVkaXRfX2Zvcm1cIik7XHJcblxyXG5jb25zdCBwcm9maWxlTmFtZSA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19pbmZvLW5hbWVcIik7XHJcbmNvbnN0IHByb2ZpbGVBYm91dCA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19pbmZvLXN1YnRpdGxlXCIpO1xyXG5jb25zdCBwcm9maWxlSW1hZ2UgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9faW1hZ2VcIik7XHJcbmNvbnN0IHByb2ZpbGVJbWFnZUhvdmVyID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2ltYWdlLWhvdmVyXCIpO1xyXG5jb25zdCBwcm9maWxlRm9ybUVsZW1lbnQgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wb3V0LXByb2ZpbGVfX2Zvcm1cIik7XHJcblxyXG5leHBvcnQge1xyXG4gIGFkZEJ1dHRvbixcclxuICBhZGRGb3JtRWxlbWVudCxcclxuICBlZGl0QnV0dG9uLFxyXG4gIGVkaXRGb3JtRWxlbWVudCxcclxuICBwcm9maWxlQWJvdXQsXHJcbiAgcHJvZmlsZUZvcm1FbGVtZW50LFxyXG4gIHByb2ZpbGVJbWFnZSxcclxuICBwcm9maWxlSW1hZ2VIb3ZlcixcclxuICBwcm9maWxlTmFtZSxcclxufTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuLi9wYWdlcy9pbmRleC5jc3NcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzXCI7XHJcbmltcG9ydCBQb3BvdXRXaXRoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3BvdXRXaXRoRm9ybS5qc1wiO1xyXG5pbXBvcnQgUG9wb3V0V2l0aEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcG91dFdpdGhJbWFnZS5qc1wiO1xyXG5pbXBvcnQgUG9wb3V0V2l0aENvbmZpcm1hdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3BvdXRXaXRoQ29uZmlybWF0aW9uLmpzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5mby5qc1wiO1xyXG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBpLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgYWRkQnV0dG9uLFxyXG4gIGFkZEZvcm1FbGVtZW50LFxyXG4gIGVkaXRCdXR0b24sXHJcbiAgZWRpdEZvcm1FbGVtZW50LFxyXG4gIHByb2ZpbGVBYm91dCxcclxuICBwcm9maWxlRm9ybUVsZW1lbnQsXHJcbiAgcHJvZmlsZUltYWdlLFxyXG4gIHByb2ZpbGVJbWFnZUhvdmVyLFxyXG4gIHByb2ZpbGVOYW1lLFxyXG59IGZyb20gXCIuLi91dGlscy91dGlscy5qc1wiO1xyXG5cclxuY29uc3Qgem9vbVJlbmRlciA9IG5ldyBQb3BvdXRXaXRoSW1hZ2UoXCIucG9wb3V0LWltYWdlXCIpO1xyXG5cclxuY29uc3QgZGVsZXRlQ29uZmlybWF0aW9uID0gbmV3IFBvcG91dFdpdGhDb25maXJtYXRpb24oXHJcbiAgXCIucG9wb3V0LWNvbmZpcm1cIixcclxuICAoY2FyZElkLCBjYXJkRWxlbWVudCkgPT4ge1xyXG4gICAgY29uZmlybWF0aW9uU3VibWl0KGNhcmRJZCwgY2FyZEVsZW1lbnQpO1xyXG4gIH1cclxuKTtcclxuZGVsZXRlQ29uZmlybWF0aW9uLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5mdW5jdGlvbiBjb25maXJtYXRpb25TdWJtaXQoY2FyZElkLCBjYXJkRWxlbWVudCkge1xyXG4gIGFwaVxyXG4gICAgLmRlbGV0ZUNhcmQoY2FyZElkKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1dHRvbi10cmFzaFwiKTtcclxuICAgICAgY2FyZEVsZW1lbnQucmVtb3ZlKGRlbGV0ZUJ1dHRvbik7XHJcbiAgICAgIGRlbGV0ZUNvbmZpcm1hdGlvbi5jbG9zZSgpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufVxyXG5cclxubGV0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHtcclxuICBuYW1lU2VsZWN0b3I6IFwiLnByb2ZpbGVfX2luZm8tbmFtZVwiLFxyXG4gIGFib3V0U2VsZWN0b3I6IFwiLnByb2ZpbGVfX2luZm8tc3VidGl0bGVcIixcclxuICBhdmF0YXJTZWxlY3RvcjogXCIucHJvZmlsZV9faW1hZ2VcIixcclxufSk7XHJcblxyXG5sZXQgcmVuZGVyU2VjdGlvbjtcclxuXHJcbmFwaVxyXG4gIC5nZXRVc2VySW5mbygpXHJcbiAgLnRoZW4oKHVzZXIpID0+IHtcclxuICAgIHByb2ZpbGVOYW1lLnRleHRDb250ZW50ID0gdXNlci5uYW1lO1xyXG4gICAgcHJvZmlsZUFib3V0LnRleHRDb250ZW50ID0gdXNlci5hYm91dDtcclxuICAgIHByb2ZpbGVOYW1lLmlkID0gdXNlci5faWQ7XHJcbiAgICBwcm9maWxlSW1hZ2Uuc3JjID0gdXNlci5hdmF0YXI7XHJcbiAgICBwcm9maWxlSW1hZ2UuYWx0ID0gdXNlci5uYW1lO1xyXG4gICAgY29uc3QgdXNlcklkID0gdXNlci5faWQ7XHJcbiAgICBhcGlcclxuICAgICAgLmdldEluaXRpYWxDYXJkcygpXHJcbiAgICAgIC50aGVuKChjYXJkcykgPT4ge1xyXG4gICAgICAgIHJlbmRlclNlY3Rpb24gPSBuZXcgU2VjdGlvbihcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaXRlbXM6IGNhcmRzLFxyXG4gICAgICAgICAgICByZW5kZXJlcjogKGNhcmQpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBuZXdDYXJkID0gbmV3IENhcmQoXHJcbiAgICAgICAgICAgICAgICBjYXJkLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBjYXJkLmxpbmssXHJcbiAgICAgICAgICAgICAgICBjYXJkLm93bmVyLFxyXG4gICAgICAgICAgICAgICAgY2FyZC5saWtlcyxcclxuICAgICAgICAgICAgICAgIGNhcmQuX2lkLFxyXG4gICAgICAgICAgICAgICAgdXNlcklkLFxyXG4gICAgICAgICAgICAgICAgXCIjY2FyZFwiLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB6b29tUmVuZGVyLm9wZW4oY2FyZC5uYW1lLCBjYXJkLmxpbmspO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUNvbmZpcm1hdGlvbi5vcGVuXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IG5ld0NhcmQuY3JlYXRlQ2FyZCgpO1xyXG4gICAgICAgICAgICAgIHJlbmRlclNlY3Rpb24uYWRkSXRlbShjYXJkRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCIuY2FyZHNcIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICByZW5kZXJTZWN0aW9uLnJlbmRlcigpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0pXHJcbiAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfSk7XHJcblxyXG5jb25zdCBlZGl0UG9wb3V0ID0gbmV3IFBvcG91dFdpdGhGb3JtKFxyXG4gIChpbnB1dFZhbHVlcykgPT4gZm9ybVR5cGVTZWxlY3RvcihpbnB1dFZhbHVlcywgXCJlZGl0XCIpLFxyXG4gIFwiLnBvcG91dC1lZGl0XCJcclxuKTtcclxuZWRpdFBvcG91dC5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuY29uc3QgbmV3RWRpdFZhbGlkYXRpb24gPSBuZXcgRm9ybVZhbGlkYXRvcihlZGl0Rm9ybUVsZW1lbnQpO1xyXG5uZXdFZGl0VmFsaWRhdGlvbi5lbmFibGVWYWxpZGF0aW9uKCk7XHJcblxyXG5jb25zdCBhZGRQb3BvdXQgPSBuZXcgUG9wb3V0V2l0aEZvcm0oXHJcbiAgKGlucHV0VmFsdWVzKSA9PiBmb3JtVHlwZVNlbGVjdG9yKGlucHV0VmFsdWVzLCBcImFkZFwiKSxcclxuICBcIi5wb3BvdXQtYWRkXCJcclxuKTtcclxuYWRkUG9wb3V0LnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBuZXdBZGRWYWxpZGF0aW9uID0gbmV3IEZvcm1WYWxpZGF0b3IoYWRkRm9ybUVsZW1lbnQpO1xyXG5uZXdBZGRWYWxpZGF0aW9uLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuXHJcbmNvbnN0IHByb2ZpbGVQb3BvdXQgPSBuZXcgUG9wb3V0V2l0aEZvcm0oXHJcbiAgKGlucHV0VmFsdWVzKSA9PiBmb3JtVHlwZVNlbGVjdG9yKGlucHV0VmFsdWVzLCBcInByb2ZpbGVcIiksXHJcbiAgXCIucG9wb3V0LXByb2ZpbGVcIlxyXG4pO1xyXG5wcm9maWxlUG9wb3V0LnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBuZXdQcm9maWxlVmFsaWRhdGlvbiA9IG5ldyBGb3JtVmFsaWRhdG9yKHByb2ZpbGVGb3JtRWxlbWVudCk7XHJcbm5ld1Byb2ZpbGVWYWxpZGF0aW9uLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuXHJcbmZ1bmN0aW9uIGVkaXRTdWJtaXQoaW5wdXRWYWx1ZXMpIHtcclxuICBhcGlcclxuICAgIC51cGRhdGVVc2VySW5mbyhpbnB1dFZhbHVlcy5wcm9maWxlTmFtZSwgaW5wdXRWYWx1ZXMucHJvZmlsZUFib3V0KVxyXG4gICAgLnRoZW4oXHJcbiAgICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKHtcclxuICAgICAgICBuYW1lOiBpbnB1dFZhbHVlcy5wcm9maWxlTmFtZSxcclxuICAgICAgICBhYm91dDogaW5wdXRWYWx1ZXMucHJvZmlsZUFib3V0LFxyXG4gICAgICB9KVxyXG4gICAgKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdWJtaXQoaW5wdXRWYWx1ZXMpIHtcclxuICBhcGlcclxuICAgIC5hZGRDYXJkKGlucHV0VmFsdWVzLmNhcmRUaXRsZSwgaW5wdXRWYWx1ZXMuY2FyZFVybClcclxuICAgIC50aGVuKChjYXJkKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld0NhcmQgPSBuZXcgQ2FyZChcclxuICAgICAgICBpbnB1dFZhbHVlcy5jYXJkVGl0bGUsXHJcbiAgICAgICAgaW5wdXRWYWx1ZXMuY2FyZFVybCxcclxuICAgICAgICBjYXJkLm93bmVyLFxyXG4gICAgICAgIGNhcmQubGlrZXMsXHJcbiAgICAgICAgY2FyZC5faWQsXHJcbiAgICAgICAgcHJvZmlsZU5hbWUuaWQsXHJcbiAgICAgICAgXCIjY2FyZFwiLFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIHpvb21SZW5kZXIub3BlbihjYXJkLm5hbWUsIGNhcmQubGluayk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWxldGVDb25maXJtYXRpb24ub3BlblxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBjYXJkRWxlbWVudCA9IG5ld0NhcmQuY3JlYXRlQ2FyZCgpO1xyXG4gICAgICByZW5kZXJTZWN0aW9uLmFkZEl0ZW0oY2FyZEVsZW1lbnQpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvZmlsZVN1Ym1pdChpbnB1dFZhbHVlcykge1xyXG4gIGFwaVxyXG4gICAgLnVwZGF0ZUF2YXRhcihpbnB1dFZhbHVlcy5hdmF0YXJVcmwpXHJcbiAgICAudGhlbih1c2VySW5mby5zZXRVc2VyQXZhdGFyKHsgYXZhdGFyOiBpbnB1dFZhbHVlcy5hdmF0YXJVcmwgfSkpXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1UeXBlU2VsZWN0b3IoaW5wdXRWYWx1ZXMsIGZvcm1UeXBlKSB7XHJcbiAgaWYgKGZvcm1UeXBlID09PSBcImVkaXRcIikge1xyXG4gICAgZWRpdFN1Ym1pdChpbnB1dFZhbHVlcyk7XHJcbiAgfSBlbHNlIGlmIChmb3JtVHlwZSA9PT0gXCJhZGRcIikge1xyXG4gICAgYWRkU3VibWl0KGlucHV0VmFsdWVzKTtcclxuICB9IGVsc2UgaWYgKGZvcm1UeXBlID09PSBcInByb2ZpbGVcIikge1xyXG4gICAgcHJvZmlsZVN1Ym1pdChpbnB1dFZhbHVlcyk7XHJcbiAgfVxyXG59XHJcblxyXG5lZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0UG9wb3V0Lm9wZW4pO1xyXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFBvcG91dC5vcGVuKTtcclxucHJvZmlsZUltYWdlSG92ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByb2ZpbGVQb3BvdXQub3Blbik7XHJcbiJdLCJuYW1lcyI6WyJBcGkiLCJiYXNlVXJsIiwiaGVhZGVycyIsIl9jbGFzc0NhbGxDaGVjayIsIl9iYXNlVXJsIiwiX2hlYWRlcnMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImhhbmRsZVJlcyIsInJlcyIsIm9rIiwianNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJjb25jYXQiLCJzdGF0dXMiLCJnZXRJbml0aWFsQ2FyZHMiLCJmZXRjaCIsIm1ldGhvZCIsImF1dGhvcml6YXRpb24iLCJ0aGVuIiwiZ2V0VXNlckluZm8iLCJ1cGRhdGVVc2VySW5mbyIsIm5hbWUiLCJhYm91dCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiYWRkQ2FyZCIsImxpbmsiLCJkZWxldGVDYXJkIiwiY2FyZElkIiwiaGFuZGxlTGlrZSIsImlkIiwiaXNMaWtlZCIsImFkZExpa2UiLCJyZW1vdmVMaWtlIiwidXBkYXRlQXZhdGFyIiwiYXZhdGFyIiwiYXBpIiwiQ2FyZCIsInRpdGxlIiwidXJsIiwib3duZXIiLCJsaWtlcyIsInVzZXJJZCIsImNhcmRTZWxlY3RvciIsInpvb21DYWxsYmFjayIsImRlbGV0ZUNhbGxiYWNrIiwiX3RpdGxlIiwiX3VybCIsIl9vd25lciIsIl9saWtlcyIsIl9jYXJkSWQiLCJfdXNlcklkIiwiX2NhcmRTZWxlY3RvciIsIl96b29tQ2FsbGJhY2siLCJfZGVsZXRlQ2FsbGJhY2siLCJfZ2V0VGVtcGxhdGUiLCJjYXJkVGVtcGxhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbG9uZU5vZGUiLCJjb250ZW50IiwiY3JlYXRlQ2FyZCIsIl90aGlzIiwiX2NhcmRFbGVtZW50IiwibGlrZXNDb3VudCIsImxlbmd0aCIsImJ1dHRvbkxpa2UiLCJidXR0b25UcmFzaCIsImNhcmRJbWFnZSIsImNhcmRUaXRsZSIsImNhcmRDb3VudGVyIiwiX2lkIiwicmVtb3ZlIiwidGV4dENvbnRlbnQiLCJhbHQiLCJzcmMiLCJhZGRFdmVudExpc3RlbmVyIiwiX2FjdGl2ZUxpa2UiLCJfY291bnRlckxpa2UiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImZvckVhY2giLCJsaWtlIiwiYWRkIiwiYnV0dG9uQ291bnRlciIsIk51bWJlciIsIl9kZWxldGVDYXJkIiwiX2J1dHRvblRyYXNoIiwiZGVmYXVsdCIsIkZvcm1WYWxpZGF0b3IiLCJmb3JtVHlwZSIsIl9kZWZpbmVQcm9wZXJ0eSIsImZvcm1FbGVtZW50IiwiaW5wdXRFbGVtZW50IiwiZXJyb3JNZXNzYWdlIiwiX2Vycm9yRWxlbWVudCIsImRhdGFzZXQiLCJlcnJvciIsInZhbGlkaXR5IiwidmFsaWQiLCJfc2hvd0lucHV0RXJyb3IiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9oaWRlSW5wdXRFcnJvciIsImlucHV0TGlzdCIsInNvbWUiLCJidXR0b25FbGVtZW50IiwiX2hhc0ludmFsaWRJbnB1dCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIl9pbnB1dExpc3QiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2J1dHRvbkVsZW1lbnQiLCJfdG9nZ2xlQnV0dG9uU3RhdGUiLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX2Zvcm1UeXBlIiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJfc2V0RXZlbnRMaXN0ZW5lciIsIlBvcG91dCIsInBvcG91dFNlbGVjdG9yIiwiX3BvcG91dEVsZW1lbnQiLCJvdmVybGF5Iiwib3BlbiIsImJpbmQiLCJjbG9zZSIsIl9oYW5kbGVFc2NDbG9zZSIsIl9oYW5kbGVUYXJnZXRDbG9zZSIsInNldEV2ZW50TGlzdGVuZXJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRhcmdldCIsIlBvcG91dFdpdGhDb25maXJtYXRpb24iLCJfUG9wb3V0IiwiX2NhbGxTdXBlciIsInN1Ym1pdEhhbmRsZSIsIl9jb25maXJtQnV0dG9uIiwiX2luaGVyaXRzIiwiY2FyZEVsZW1lbnQiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiY2FsbCIsIlBvcG91dFdpdGhGb3JtIiwiZm9ybVN1Ym1pdEhhbmRsZXIiLCJfZm9ybVN1Ym1pdEhhbmRsZXIiLCJfc3VibWl0SGFuZGxlIiwiX2J1dHRvblN1Ym1pdCIsIl9nZXRJbnB1dFZhbHVlcyIsImlucHV0T2JqIiwiX2J1dHRvbkxpc3QiLCJQb3BvdXRXaXRoSW1hZ2UiLCJpbWFnZVBvcG91dCIsImltYWdlUG9wb3V0VGl0bGUiLCJpbWFnZVBvcG91dEltYWdlIiwiU2VjdGlvbiIsIl9yZWYiLCJjc3NTZWxlY3RvciIsIml0ZW1zIiwicmVuZGVyZXIiLCJfaXRlbXMiLCJfcmVuZGVyZXIiLCJfY3NzRWxlbWVudCIsInJlbmRlciIsImFkZEl0ZW0iLCJlbGVtZW50IiwicHJlcGVuZCIsIlVzZXJJbmZvIiwibmFtZVNlbGVjdG9yIiwiYWJvdXRTZWxlY3RvciIsImF2YXRhclNlbGVjdG9yIiwiX25hbWVFbGVtZW50IiwiX2Fib3V0RWxlbWVudCIsIl9hdmF0YXJTZWxlY3RvciIsInNldFVzZXJJbmZvIiwiX3JlZjIiLCJzZXRVc2VyQXZhdGFyIiwiX3JlZjMiLCJhZGRCdXR0b24iLCJhZGRGb3JtRWxlbWVudCIsImVkaXRCdXR0b24iLCJlZGl0Rm9ybUVsZW1lbnQiLCJwcm9maWxlTmFtZSIsInByb2ZpbGVBYm91dCIsInByb2ZpbGVJbWFnZSIsInByb2ZpbGVJbWFnZUhvdmVyIiwicHJvZmlsZUZvcm1FbGVtZW50Iiwiem9vbVJlbmRlciIsImRlbGV0ZUNvbmZpcm1hdGlvbiIsImNvbmZpcm1hdGlvblN1Ym1pdCIsImRlbGV0ZUJ1dHRvbiIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInVzZXJJbmZvIiwicmVuZGVyU2VjdGlvbiIsInVzZXIiLCJjYXJkcyIsImNhcmQiLCJuZXdDYXJkIiwiZmluYWxseSIsImVkaXRQb3BvdXQiLCJpbnB1dFZhbHVlcyIsImZvcm1UeXBlU2VsZWN0b3IiLCJuZXdFZGl0VmFsaWRhdGlvbiIsImVuYWJsZVZhbGlkYXRpb24iLCJhZGRQb3BvdXQiLCJuZXdBZGRWYWxpZGF0aW9uIiwicHJvZmlsZVBvcG91dCIsIm5ld1Byb2ZpbGVWYWxpZGF0aW9uIiwiZWRpdFN1Ym1pdCIsImFkZFN1Ym1pdCIsImNhcmRVcmwiLCJwcm9maWxlU3VibWl0IiwiYXZhdGFyVXJsIl0sInNvdXJjZVJvb3QiOiIifQ==