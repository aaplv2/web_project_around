/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var _PopoutWithImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopoutWithImage */ "./src/components/PopoutWithImage.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Card = /*#__PURE__*/function () {
  function Card(title, url, cardSelector) {
    _classCallCheck(this, Card);
    this._title = title;
    this._url = url;
    this._cardSelector = cardSelector;
    this._zoomRender = new _PopoutWithImage__WEBPACK_IMPORTED_MODULE_0__["default"](".popout-image");
  }
  return _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardTemplate = document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(true);
      return cardTemplate;
    }
  }, {
    key: "createCard",
    value: function createCard() {
      var _this = this;
      this._cardElement = this._getTemplate();
      this._cardElement.querySelector(".card__title").textContent = this._title;
      this._cardElement.querySelector(".card__image").alt = this._title;
      this._cardElement.querySelector(".card__image").src = this._url;
      this._cardElement.querySelector(".card__button-like").addEventListener("click", function () {
        return _this._activeLike();
      });
      this._cardElement.querySelector(".card__button-trash").addEventListener("click", function () {
        return _this._trashCard();
      });
      this._cardElement.querySelector(".card__image").addEventListener("click", function () {
        return _this._zoomImage();
      });
      document.addEventListener("click", function (evt) {
        return _this._zoomRender.setEventListeners(evt);
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
    key: "_trashCard",
    value: function _trashCard() {
      this._buttonTrash = this._cardElement.querySelector("#button-trash");
      this._cardElement.remove(this._buttonTrash);
    }
  }, {
    key: "_zoomImage",
    value: function _zoomImage() {
      var _this2 = this;
      this._imagePopout = document.querySelector(".popout-image");
      this._overlayPopout = document.querySelector("#overlay");
      this._imagePopout.classList.add("active");
      this._overlayPopout.classList.add("active");
      document.querySelector(".popout-image__image").src = this._cardElement.querySelector(".card__image").src;
      document.querySelector(".popout-image__image").alt = this._cardElement.querySelector(".card__title").textContent;
      document.querySelector(".popout-image__title").textContent = this._cardElement.querySelector(".card__title").textContent;
      document.addEventListener("keydown", function (evt) {
        return _this2._zoomRender._handleEscClose(evt);
      });
      return this._imagePopout;
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
var FormValidator = /*#__PURE__*/_createClass(function FormValidator(formData, formType) {
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
  this._formSelector = formData.formSelector;
  this._inputSelector = formData.inputSelector;
  this._submitButtonSelector = formData.submitButtonSelector;
  this._inactiveButtonClass = formData.inactiveButtonClass;
  this._inputErrorClass = formData.inputErrorClass;
  this._errorClass = formData.errorClass;
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
    _this._formSubmitHandler = formSubmitHandler;
    _this._submitHandle = _this.submitHandle.bind(_this);
    _this._form = _this._popoutElement.querySelector(".form");
    return _this;
  }
  _inherits(PopoutWithForm, _Popout);
  return _createClass(PopoutWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      this._inputList = Array.from(this._popoutElement.querySelectorAll(".form__input"));
    }
  }, {
    key: "submitHandle",
    value: function submitHandle(evt) {
      evt.preventDefault();
      this._formSubmitHandler(this._getInputValues());
      this.close();
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
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopoutWithForm.prototype), "close", this).call(this);
      this._form.reset();
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
    value: function open(title, url) {
      _get(_getPrototypeOf(PopoutWithImage.prototype), "open", this).call(this);
      var imagePopout = document.querySelector(".popout-image");
      var imagePopoutTitle = imagePopout.querySelector(".popout-image__title");
      var imagePopoutImage = imagePopout.querySelector(".popout-image__image");
      imagePopoutTitle.textContent = title;
      imagePopoutImage.src = url;
      imagePopoutImage.alt = title;
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopoutWithImage.prototype), "close", this).call(this);
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      _get(_getPrototypeOf(PopoutWithImage.prototype), "setEventListeners", this).call(this);
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
      aboutSelector = _ref.aboutSelector;
    _classCallCheck(this, UserInfo);
    this._nameElement = document.querySelector(nameSelector);
    this._aboutElement = document.querySelector(aboutSelector);
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
  }]);
}();


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
/* harmony import */ var _components_Popout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Popout.js */ "./src/components/Popout.js");
/* harmony import */ var _components_PopoutWithForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PopoutWithForm.js */ "./src/components/PopoutWithForm.js");
/* harmony import */ var _components_PopoutWithImage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopoutWithImage.js */ "./src/components/PopoutWithImage.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");








var content = document.querySelector(".body");
var addButton = content.querySelector(".profile__button-add");
var addCloseButton = content.querySelector(".popout-add__button-close");
var addFormElement = content.querySelector(".popout-add__form");
var editButton = content.querySelector(".profile__button-edit");
var editCloseButton = content.querySelector(".popout-edit__button-close");
var editFormElement = content.querySelector(".popout-edit__form");
var imageCloseButton = content.querySelector(".popout-image__button-close");
var overlayPopout = content.querySelector("#overlay");
var nameInput = editFormElement.querySelector(".popout-edit__form-name");
var aboutInput = editFormElement.querySelector(".popout-edit__form-text");
var titleInput = addFormElement.querySelector(".popout-add__form-title");
var urlInput = addFormElement.querySelector(".popout-add__form-url");
var initialCards = [{
  name: "Lago di Braies",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
}, {
  name: "Parque Nacional de la Vanoise",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
}, {
  name: "Latemar",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
}, {
  name: "Montañas Calvas",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
}, {
  name: "Lago Louise",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
}, {
  name: "Valle de Yosemite",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
}];
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
  nameSelector: ".profile__info-name",
  aboutSelector: ".profile__info-subtitle"
});
var renderSection = new _components_Section_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
  items: initialCards,
  renderer: function renderer(card) {
    var newCard = new _components_Card_js__WEBPACK_IMPORTED_MODULE_1__["default"](card.name, card.link, "#card");
    var cardElement = newCard.createCard();
    renderSection.addItem(cardElement);
  }
}, ".cards");
renderSection.render();
function formTypeSelector(inputValues, formType) {
  if (formType === "edit") {
    userInfo.setUserInfo({
      name: nameInput.value,
      about: aboutInput.value
    });
  } else if (formType === "add") {
    var newCard = new _components_Card_js__WEBPACK_IMPORTED_MODULE_1__["default"](titleInput.value, urlInput.value, "#card");
    var cardElement = newCard.createCard();
    renderSection.addItem(cardElement);
  }
}
var editPopout = new _components_PopoutWithForm_js__WEBPACK_IMPORTED_MODULE_4__["default"](function (inputValues) {
  return formTypeSelector(inputValues, "edit");
}, ".popout-edit");
editPopout.setEventListeners();
var newEditValidation = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
  formSelector: content.querySelector(".form"),
  inputSelector: content.querySelectorAll(".form__input"),
  submitButtonSelector: content.querySelector(".form__submit"),
  inactiveButtonClass: content.querySelector(".form__submit_disabled"),
  inputErrorClass: content.querySelector(".form__input_type_error"),
  errorClass: content.querySelector(".form__input-error")
}, editFormElement);
newEditValidation.enableValidation();
var addPopout = new _components_PopoutWithForm_js__WEBPACK_IMPORTED_MODULE_4__["default"](function (inputValues) {
  return formTypeSelector(inputValues, "add");
}, ".popout-add");
addPopout.setEventListeners();
var newAddValidation = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
  formSelector: content.querySelector(".form"),
  inputSelector: content.querySelectorAll(".form__input"),
  submitButtonSelector: content.querySelector(".form__submit"),
  inactiveButtonClass: content.querySelector(".form__submit_disabled"),
  inputErrorClass: content.querySelector(".form__input_type_error"),
  errorClass: content.querySelector(".form__input-error")
}, addFormElement);
newAddValidation.enableValidation();
editButton.addEventListener("click", function () {
  var userData = userInfo.getUserInfo();
  editPopout.open();
});
addButton.addEventListener("click", addPopout.open);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0IsQ0FBQyxDQUFDO0FBRXBDLElBQU1DLFNBQVMsR0FBRyxJQUFJakUscUVBQWMsQ0FDbEMsVUFBQzZELFdBQVc7RUFBQSxPQUFLRCxnQkFBZ0IsQ0FBQ0MsV0FBVyxFQUFFLEtBQUssQ0FBQztBQUFBLEdBQ3JELGFBQ0YsQ0FBQztBQUNESSxTQUFTLENBQUNwSSxpQkFBaUIsQ0FBQyxDQUFDO0FBRTdCLElBQU1xSSxnQkFBZ0IsR0FBRyxJQUFJekgsb0VBQWEsQ0FDeEM7RUFDRWtDLFlBQVksRUFBRTNELE9BQU8sQ0FBQ0QsYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUM1QzhELGFBQWEsRUFBRTdELE9BQU8sQ0FBQ2tELGdCQUFnQixDQUFDLGNBQWMsQ0FBQztFQUN2RGEsb0JBQW9CLEVBQUUvRCxPQUFPLENBQUNELGFBQWEsQ0FBQyxlQUFlLENBQUM7RUFDNURrRSxtQkFBbUIsRUFBRWpFLE9BQU8sQ0FBQ0QsYUFBYSxDQUFDLHdCQUF3QixDQUFDO0VBQ3BFb0UsZUFBZSxFQUFFbkUsT0FBTyxDQUFDRCxhQUFhLENBQUMseUJBQXlCLENBQUM7RUFDakVzRSxVQUFVLEVBQUVyRSxPQUFPLENBQUNELGFBQWEsQ0FBQyxvQkFBb0I7QUFDeEQsQ0FBQyxFQUNENEgsY0FDRixDQUFDO0FBQ0R1QixnQkFBZ0IsQ0FBQ0YsZ0JBQWdCLENBQUMsQ0FBQztBQUVuQ3BCLFVBQVUsQ0FBQ3BILGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQ3pDLElBQU0ySSxRQUFRLEdBQUdaLFFBQVEsQ0FBQ25CLFdBQVcsQ0FBQyxDQUFDO0VBQ3ZDMEIsVUFBVSxDQUFDcEUsSUFBSSxDQUFDLENBQUM7QUFDbkIsQ0FBQyxDQUFDO0FBRUYrQyxTQUFTLENBQUNqSCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUV5SSxTQUFTLENBQUN2RSxJQUFJLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9zcmMvY29tcG9uZW50cy9Qb3BvdXQuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2NvbXBvbmVudHMvUG9wb3V0V2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2NvbXBvbmVudHMvUG9wb3V0V2l0aEltYWdlLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvcG91dFdpdGhJbWFnZSBmcm9tIFwiLi9Qb3BvdXRXaXRoSW1hZ2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCB1cmwsIGNhcmRTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuX3VybCA9IHVybDtcclxuICAgIHRoaXMuX2NhcmRTZWxlY3RvciA9IGNhcmRTZWxlY3RvcjtcclxuICAgIHRoaXMuX3pvb21SZW5kZXIgPSBuZXcgUG9wb3V0V2l0aEltYWdlKFwiLnBvcG91dC1pbWFnZVwiKTtcclxuICB9XHJcblxyXG4gIF9nZXRUZW1wbGF0ZSgpIHtcclxuICAgIGNvbnN0IGNhcmRUZW1wbGF0ZSA9IGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NhcmRTZWxlY3RvcilcclxuICAgICAgLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkXCIpXHJcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICByZXR1cm4gY2FyZFRlbXBsYXRlO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ2FyZCgpIHtcclxuICAgIHRoaXMuX2NhcmRFbGVtZW50ID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcclxuXHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3RpdGxlXCIpLnRleHRDb250ZW50ID0gdGhpcy5fdGl0bGU7XHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpLmFsdCA9IHRoaXMuX3RpdGxlO1xyXG4gICAgdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pbWFnZVwiKS5zcmMgPSB0aGlzLl91cmw7XHJcblxyXG4gICAgdGhpcy5fY2FyZEVsZW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fYnV0dG9uLWxpa2VcIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLl9hY3RpdmVMaWtlKCkpO1xyXG5cclxuICAgIHRoaXMuX2NhcmRFbGVtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2J1dHRvbi10cmFzaFwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuX3RyYXNoQ2FyZCgpKTtcclxuXHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pbWFnZVwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuX3pvb21JbWFnZSgpKTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT5cclxuICAgICAgdGhpcy5fem9vbVJlbmRlci5zZXRFdmVudExpc3RlbmVycyhldnQpXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9jYXJkRWxlbWVudDtcclxuICB9XHJcblxyXG4gIF9hY3RpdmVMaWtlKCkge1xyXG4gICAgY29uc3QgYnV0dG9uTGlrZSA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fYnV0dG9uLWxpa2VcIik7XHJcbiAgICBpZiAoYnV0dG9uTGlrZS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgICAgYnV0dG9uTGlrZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnV0dG9uTGlrZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3RyYXNoQ2FyZCgpIHtcclxuICAgIHRoaXMuX2J1dHRvblRyYXNoID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNidXR0b24tdHJhc2hcIik7XHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudC5yZW1vdmUodGhpcy5fYnV0dG9uVHJhc2gpO1xyXG4gIH1cclxuXHJcbiAgX3pvb21JbWFnZSgpIHtcclxuICAgIHRoaXMuX2ltYWdlUG9wb3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BvdXQtaW1hZ2VcIik7XHJcbiAgICB0aGlzLl9vdmVybGF5UG9wb3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdmVybGF5XCIpO1xyXG5cclxuICAgIHRoaXMuX2ltYWdlUG9wb3V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICB0aGlzLl9vdmVybGF5UG9wb3V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BvdXQtaW1hZ2VfX2ltYWdlXCIpLnNyYyA9XHJcbiAgICAgIHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1hZ2VcIikuc3JjO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BvdXQtaW1hZ2VfX2ltYWdlXCIpLmFsdCA9XHJcbiAgICAgIHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fdGl0bGVcIikudGV4dENvbnRlbnQ7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcG91dC1pbWFnZV9fdGl0bGVcIikudGV4dENvbnRlbnQgPVxyXG4gICAgICB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3RpdGxlXCIpLnRleHRDb250ZW50O1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldnQpID0+XHJcbiAgICAgIHRoaXMuX3pvb21SZW5kZXIuX2hhbmRsZUVzY0Nsb3NlKGV2dClcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2ltYWdlUG9wb3V0O1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICBjb25zdHJ1Y3Rvcihmb3JtRGF0YSwgZm9ybVR5cGUpIHtcclxuICAgIHRoaXMuX2Zvcm1TZWxlY3RvciA9IGZvcm1EYXRhLmZvcm1TZWxlY3RvcjtcclxuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBmb3JtRGF0YS5pbnB1dFNlbGVjdG9yO1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBmb3JtRGF0YS5zdWJtaXRCdXR0b25TZWxlY3RvcjtcclxuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBmb3JtRGF0YS5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xyXG4gICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gZm9ybURhdGEuaW5wdXRFcnJvckNsYXNzO1xyXG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IGZvcm1EYXRhLmVycm9yQ2xhc3M7XHJcbiAgICB0aGlzLl9mb3JtVHlwZSA9IGZvcm1UeXBlO1xyXG4gIH1cclxuXHJcbiAgX3Nob3dJbnB1dEVycm9yID0gKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIGVycm9yTWVzc2FnZSkgPT4ge1xyXG4gICAgdGhpcy5fZXJyb3JFbGVtZW50ID0gZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgYC4ke2lucHV0RWxlbWVudC5kYXRhc2V0LmVycm9yfS1lcnJvcmBcclxuICAgICk7XHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZvcm1fX2lucHV0X3R5cGVfZXJyb3JcIik7XHJcbiAgICB0aGlzLl9lcnJvckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZvcm1fX2lucHV0LWVycm9yX2FjdGl2ZVwiKTtcclxuICAgIHRoaXMuX2Vycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcclxuICB9O1xyXG5cclxuICBfaGlkZUlucHV0RXJyb3IgPSAoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgdGhpcy5fZXJyb3JFbGVtZW50ID0gZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgYC4ke2lucHV0RWxlbWVudC5kYXRhc2V0LmVycm9yfS1lcnJvcmBcclxuICAgICk7XHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImZvcm1fX2lucHV0X3R5cGVfZXJyb3JcIik7XHJcbiAgICB0aGlzLl9lcnJvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImZvcm1fX2lucHV0LWVycm9yX2FjdGl2ZVwiKTtcclxuICAgIHRoaXMuX2Vycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgX2NoZWNrSW5wdXRWYWxpZGl0eSA9IChmb3JtRWxlbWVudCwgaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICBpZiAoIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihcclxuICAgICAgICBmb3JtRWxlbWVudCxcclxuICAgICAgICBpbnB1dEVsZW1lbnQsXHJcbiAgICAgICAgaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihmb3JtRWxlbWVudCwgaW5wdXRFbGVtZW50KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBfaGFzSW52YWxpZElucHV0ID0gKGlucHV0TGlzdCkgPT4ge1xyXG4gICAgcmV0dXJuIGlucHV0TGlzdC5zb21lKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgcmV0dXJuICFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQ7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBfdG9nZ2xlQnV0dG9uU3RhdGUgPSAoaW5wdXRMaXN0LCBidXR0b25FbGVtZW50KSA9PiB7XHJcbiAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KGlucHV0TGlzdCkpIHtcclxuICAgICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9fc3VibWl0X2luYWN0aXZlXCIpO1xyXG4gICAgICBidXR0b25FbGVtZW50LnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImZvcm1fX3N1Ym1pdF9pbmFjdGl2ZVwiKTtcclxuICAgICAgYnV0dG9uRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBfc2V0RXZlbnRMaXN0ZW5lciA9IChmb3JtRWxlbWVudCkgPT4ge1xyXG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbShmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm1fX2lucHV0XCIpKTtcclxuICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQgPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX3N1Ym1pdFwiKTtcclxuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKHRoaXMuX2lucHV0TGlzdCwgdGhpcy5fYnV0dG9uRWxlbWVudCk7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKHRoaXMuX2lucHV0TGlzdCwgdGhpcy5fYnV0dG9uRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGVuYWJsZVZhbGlkYXRpb24gPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9mb3JtVHlwZS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldnQpID0+IHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXIodGhpcy5fZm9ybVR5cGUpO1xyXG4gIH07XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wb3V0IHtcclxuICBjb25zdHJ1Y3Rvcihwb3BvdXRTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5fcG9wb3V0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wb3V0U2VsZWN0b3IpO1xyXG4gICAgdGhpcy5vdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdmVybGF5XCIpO1xyXG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5faGFuZGxlRXNjQ2xvc2UgPSB0aGlzLl9oYW5kbGVFc2NDbG9zZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5faGFuZGxlVGFyZ2V0Q2xvc2UgPSB0aGlzLl9oYW5kbGVUYXJnZXRDbG9zZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICBvcGVuKCkge1xyXG4gICAgdGhpcy5fcG9wb3V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdmVybGF5XCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5fcG9wb3V0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdmVybGF5XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgfVxyXG4gIF9oYW5kbGVFc2NDbG9zZShldnQpIHtcclxuICAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcbiAgX2hhbmRsZVRhcmdldENsb3NlKGV2dCkge1xyXG4gICAgaWYgKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2VcIikpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX3BvcG91dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuX2hhbmRsZVRhcmdldENsb3NlKTtcclxuICAgIHRoaXMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jbG9zZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQb3BvdXQgZnJvbSBcIi4vUG9wb3V0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3BvdXRXaXRoRm9ybSBleHRlbmRzIFBvcG91dCB7XHJcbiAgY29uc3RydWN0b3IoZm9ybVN1Ym1pdEhhbmRsZXIsIHBvcG91dFNlbGVjdG9yKSB7XHJcbiAgICBzdXBlcihwb3BvdXRTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9mb3JtU3VibWl0SGFuZGxlciA9IGZvcm1TdWJtaXRIYW5kbGVyO1xyXG4gICAgdGhpcy5fc3VibWl0SGFuZGxlID0gdGhpcy5zdWJtaXRIYW5kbGUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuX2Zvcm0gPSB0aGlzLl9wb3BvdXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcclxuICB9XHJcbiAgX2dldElucHV0VmFsdWVzKCkge1xyXG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbShcclxuICAgICAgdGhpcy5fcG9wb3V0RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm1fX2lucHV0XCIpXHJcbiAgICApO1xyXG4gIH1cclxuICBzdWJtaXRIYW5kbGUoZXZ0KSB7XHJcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuX2Zvcm1TdWJtaXRIYW5kbGVyKHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xyXG4gICAgdGhpcy5jbG9zZSgpO1xyXG4gIH1cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLl9wb3BvdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5fc3VibWl0SGFuZGxlKTtcclxuICB9XHJcbiAgb3BlbigpIHtcclxuICAgIHN1cGVyLm9wZW4oKTtcclxuICB9XHJcbiAgY2xvc2UoKSB7XHJcbiAgICBzdXBlci5jbG9zZSgpO1xyXG4gICAgdGhpcy5fZm9ybS5yZXNldCgpO1xyXG4gICAgdGhpcy5fYnV0dG9uTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybV9fc3VibWl0XCIpO1xyXG4gICAgdGhpcy5fYnV0dG9uTGlzdC5mb3JFYWNoKChidXR0b25FbGVtZW50KSA9PiB7XHJcbiAgICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZvcm1fX3N1Ym1pdF9pbmFjdGl2ZVwiKTtcclxuICAgICAgYnV0dG9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBvcG91dCBmcm9tIFwiLi9Qb3BvdXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcG91dFdpdGhJbWFnZSBleHRlbmRzIFBvcG91dCB7XHJcbiAgY29uc3RydWN0b3IocG9wb3V0U2VsZWN0b3IpIHtcclxuICAgIHN1cGVyKHBvcG91dFNlbGVjdG9yKTtcclxuICB9XHJcbiAgb3Blbih0aXRsZSwgdXJsKSB7XHJcbiAgICBzdXBlci5vcGVuKCk7XHJcblxyXG4gICAgY29uc3QgaW1hZ2VQb3BvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcG91dC1pbWFnZVwiKTtcclxuICAgIGNvbnN0IGltYWdlUG9wb3V0VGl0bGUgPSBpbWFnZVBvcG91dC5xdWVyeVNlbGVjdG9yKFwiLnBvcG91dC1pbWFnZV9fdGl0bGVcIik7XHJcbiAgICBjb25zdCBpbWFnZVBvcG91dEltYWdlID0gaW1hZ2VQb3BvdXQucXVlcnlTZWxlY3RvcihcIi5wb3BvdXQtaW1hZ2VfX2ltYWdlXCIpO1xyXG5cclxuICAgIGltYWdlUG9wb3V0VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgIGltYWdlUG9wb3V0SW1hZ2Uuc3JjID0gdXJsO1xyXG4gICAgaW1hZ2VQb3BvdXRJbWFnZS5hbHQgPSB0aXRsZTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgc3VwZXIuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgY3NzU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XHJcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgdGhpcy5fY3NzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY3NzU2VsZWN0b3IpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKHRoaXMuX3JlbmRlcmVyKTtcclxuICB9XHJcbiAgYWRkSXRlbShlbGVtZW50KSB7XHJcbiAgICB0aGlzLl9jc3NFbGVtZW50LnByZXBlbmQoZWxlbWVudCk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcclxuICBjb25zdHJ1Y3Rvcih7IG5hbWVTZWxlY3RvciwgYWJvdXRTZWxlY3RvciB9KSB7XHJcbiAgICB0aGlzLl9uYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmFtZVNlbGVjdG9yKTtcclxuICAgIHRoaXMuX2Fib3V0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYWJvdXRTZWxlY3Rvcik7XHJcbiAgfVxyXG4gIGdldFVzZXJJbmZvKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmFtZTogdGhpcy5fbmFtZUVsZW1lbnQudGV4dENvbnRlbnQsXHJcbiAgICAgIGFib3V0OiB0aGlzLl9hYm91dEVsZW1lbnQudGV4dENvbnRlbnQsXHJcbiAgICB9O1xyXG4gIH1cclxuICBzZXRVc2VySW5mbyh7IG5hbWUsIGFib3V0IH0pIHtcclxuICAgIHRoaXMuX25hbWVFbGVtZW50LnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIHRoaXMuX2Fib3V0RWxlbWVudC50ZXh0Q29udGVudCA9IGFib3V0O1xyXG4gIH1cclxufVxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4uL3BhZ2VzL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcclxuaW1wb3J0IFBvcG91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3BvdXQuanNcIjtcclxuaW1wb3J0IFBvcG91dFdpdGhGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcG91dFdpdGhGb3JtLmpzXCI7XHJcbmltcG9ydCBQb3BvdXRXaXRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wb3V0V2l0aEltYWdlLmpzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5mby5qc1wiO1xyXG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XHJcblxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2R5XCIpO1xyXG5cclxuY29uc3QgYWRkQnV0dG9uID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2J1dHRvbi1hZGRcIik7XHJcbmNvbnN0IGFkZENsb3NlQnV0dG9uID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcG91dC1hZGRfX2J1dHRvbi1jbG9zZVwiKTtcclxuY29uc3QgYWRkRm9ybUVsZW1lbnQgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wb3V0LWFkZF9fZm9ybVwiKTtcclxuXHJcbmNvbnN0IGVkaXRCdXR0b24gPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYnV0dG9uLWVkaXRcIik7XHJcbmNvbnN0IGVkaXRDbG9zZUJ1dHRvbiA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5wb3BvdXQtZWRpdF9fYnV0dG9uLWNsb3NlXCIpO1xyXG5jb25zdCBlZGl0Rm9ybUVsZW1lbnQgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wb3V0LWVkaXRfX2Zvcm1cIik7XHJcblxyXG5jb25zdCBpbWFnZUNsb3NlQnV0dG9uID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcG91dC1pbWFnZV9fYnV0dG9uLWNsb3NlXCIpO1xyXG5cclxuY29uc3Qgb3ZlcmxheVBvcG91dCA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIiNvdmVybGF5XCIpO1xyXG5cclxuY29uc3QgbmFtZUlucHV0ID0gZWRpdEZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wb3V0LWVkaXRfX2Zvcm0tbmFtZVwiKTtcclxuY29uc3QgYWJvdXRJbnB1dCA9IGVkaXRGb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcG91dC1lZGl0X19mb3JtLXRleHRcIik7XHJcblxyXG5jb25zdCB0aXRsZUlucHV0ID0gYWRkRm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BvdXQtYWRkX19mb3JtLXRpdGxlXCIpO1xyXG5jb25zdCB1cmxJbnB1dCA9IGFkZEZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wb3V0LWFkZF9fZm9ybS11cmxcIik7XHJcblxyXG5jb25zdCBpbml0aWFsQ2FyZHMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJMYWdvIGRpIEJyYWllc1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL25ldy1tYXJrZXRzL1dFQl9zcHJpbnRfNS9FUy9sYWdvLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJQYXJxdWUgTmFjaW9uYWwgZGUgbGEgVmFub2lzZVwiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL25ldy1tYXJrZXRzL1dFQl9zcHJpbnRfNS9FUy92YW5vaXNlLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJMYXRlbWFyXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vbmV3LW1hcmtldHMvV0VCX3NwcmludF81L0VTL2xhdGVtYXIuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIk1vbnRhw7FhcyBDYWx2YXNcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9uZXctbWFya2V0cy9XRUJfc3ByaW50XzUvRVMvYmFsZC1tb3VudGFpbnMuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkxhZ28gTG91aXNlXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vbmV3LW1hcmtldHMvV0VCX3NwcmludF81L0VTL2xha2UtbG91aXNlLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJWYWxsZSBkZSBZb3NlbWl0ZVwiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL25ldy1tYXJrZXRzL1dFQl9zcHJpbnRfNS9FUy95b3NlbWl0ZS5qcGdcIixcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8oe1xyXG4gIG5hbWVTZWxlY3RvcjogXCIucHJvZmlsZV9faW5mby1uYW1lXCIsXHJcbiAgYWJvdXRTZWxlY3RvcjogXCIucHJvZmlsZV9faW5mby1zdWJ0aXRsZVwiLFxyXG59KTtcclxuXHJcbmNvbnN0IHJlbmRlclNlY3Rpb24gPSBuZXcgU2VjdGlvbihcclxuICB7XHJcbiAgICBpdGVtczogaW5pdGlhbENhcmRzLFxyXG4gICAgcmVuZGVyZXI6IChjYXJkKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld0NhcmQgPSBuZXcgQ2FyZChjYXJkLm5hbWUsIGNhcmQubGluaywgXCIjY2FyZFwiKTtcclxuICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBuZXdDYXJkLmNyZWF0ZUNhcmQoKTtcclxuICAgICAgcmVuZGVyU2VjdGlvbi5hZGRJdGVtKGNhcmRFbGVtZW50KTtcclxuICAgIH0sXHJcbiAgfSxcclxuICBcIi5jYXJkc1wiXHJcbik7XHJcblxyXG5yZW5kZXJTZWN0aW9uLnJlbmRlcigpO1xyXG5cclxuZnVuY3Rpb24gZm9ybVR5cGVTZWxlY3RvcihpbnB1dFZhbHVlcywgZm9ybVR5cGUpIHtcclxuICBpZiAoZm9ybVR5cGUgPT09IFwiZWRpdFwiKSB7XHJcbiAgICB1c2VySW5mby5zZXRVc2VySW5mbyh7IG5hbWU6IG5hbWVJbnB1dC52YWx1ZSwgYWJvdXQ6IGFib3V0SW5wdXQudmFsdWUgfSk7XHJcbiAgfSBlbHNlIGlmIChmb3JtVHlwZSA9PT0gXCJhZGRcIikge1xyXG4gICAgY29uc3QgbmV3Q2FyZCA9IG5ldyBDYXJkKHRpdGxlSW5wdXQudmFsdWUsIHVybElucHV0LnZhbHVlLCBcIiNjYXJkXCIpO1xyXG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSBuZXdDYXJkLmNyZWF0ZUNhcmQoKTtcclxuICAgIHJlbmRlclNlY3Rpb24uYWRkSXRlbShjYXJkRWxlbWVudCk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBlZGl0UG9wb3V0ID0gbmV3IFBvcG91dFdpdGhGb3JtKFxyXG4gIChpbnB1dFZhbHVlcykgPT4gZm9ybVR5cGVTZWxlY3RvcihpbnB1dFZhbHVlcywgXCJlZGl0XCIpLFxyXG4gIFwiLnBvcG91dC1lZGl0XCJcclxuKTtcclxuZWRpdFBvcG91dC5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuY29uc3QgbmV3RWRpdFZhbGlkYXRpb24gPSBuZXcgRm9ybVZhbGlkYXRvcihcclxuICB7XHJcbiAgICBmb3JtU2VsZWN0b3I6IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpLFxyXG4gICAgaW5wdXRTZWxlY3RvcjogY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm1fX2lucHV0XCIpLFxyXG4gICAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX19zdWJtaXRcIiksXHJcbiAgICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9fc3VibWl0X2Rpc2FibGVkXCIpLFxyXG4gICAgaW5wdXRFcnJvckNsYXNzOiBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9faW5wdXRfdHlwZV9lcnJvclwiKSxcclxuICAgIGVycm9yQ2xhc3M6IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX19pbnB1dC1lcnJvclwiKSxcclxuICB9LFxyXG4gIGVkaXRGb3JtRWxlbWVudFxyXG4pO1xyXG5uZXdFZGl0VmFsaWRhdGlvbi5lbmFibGVWYWxpZGF0aW9uKCk7XHJcblxyXG5jb25zdCBhZGRQb3BvdXQgPSBuZXcgUG9wb3V0V2l0aEZvcm0oXHJcbiAgKGlucHV0VmFsdWVzKSA9PiBmb3JtVHlwZVNlbGVjdG9yKGlucHV0VmFsdWVzLCBcImFkZFwiKSxcclxuICBcIi5wb3BvdXQtYWRkXCJcclxuKTtcclxuYWRkUG9wb3V0LnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBuZXdBZGRWYWxpZGF0aW9uID0gbmV3IEZvcm1WYWxpZGF0b3IoXHJcbiAge1xyXG4gICAgZm9ybVNlbGVjdG9yOiBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKSxcclxuICAgIGlucHV0U2VsZWN0b3I6IGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtX19pbnB1dFwiKSxcclxuICAgIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9fc3VibWl0XCIpLFxyXG4gICAgaW5hY3RpdmVCdXR0b25DbGFzczogY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX3N1Ym1pdF9kaXNhYmxlZFwiKSxcclxuICAgIGlucHV0RXJyb3JDbGFzczogY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX2lucHV0X3R5cGVfZXJyb3JcIiksXHJcbiAgICBlcnJvckNsYXNzOiBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9faW5wdXQtZXJyb3JcIiksXHJcbiAgfSxcclxuICBhZGRGb3JtRWxlbWVudFxyXG4pO1xyXG5uZXdBZGRWYWxpZGF0aW9uLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuXHJcbmVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjb25zdCB1c2VyRGF0YSA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCk7XHJcbiAgZWRpdFBvcG91dC5vcGVuKCk7XHJcbn0pO1xyXG5cclxuYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQb3BvdXQub3Blbik7XHJcbiJdLCJuYW1lcyI6WyJQb3BvdXRXaXRoSW1hZ2UiLCJDYXJkIiwidGl0bGUiLCJ1cmwiLCJjYXJkU2VsZWN0b3IiLCJfY2xhc3NDYWxsQ2hlY2siLCJfdGl0bGUiLCJfdXJsIiwiX2NhcmRTZWxlY3RvciIsIl96b29tUmVuZGVyIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJfZ2V0VGVtcGxhdGUiLCJjYXJkVGVtcGxhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiY3JlYXRlQ2FyZCIsIl90aGlzIiwiX2NhcmRFbGVtZW50IiwidGV4dENvbnRlbnQiLCJhbHQiLCJzcmMiLCJhZGRFdmVudExpc3RlbmVyIiwiX2FjdGl2ZUxpa2UiLCJfdHJhc2hDYXJkIiwiX3pvb21JbWFnZSIsImV2dCIsInNldEV2ZW50TGlzdGVuZXJzIiwiYnV0dG9uTGlrZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwiX2J1dHRvblRyYXNoIiwiX3RoaXMyIiwiX2ltYWdlUG9wb3V0IiwiX292ZXJsYXlQb3BvdXQiLCJfaGFuZGxlRXNjQ2xvc2UiLCJkZWZhdWx0IiwiRm9ybVZhbGlkYXRvciIsImZvcm1EYXRhIiwiZm9ybVR5cGUiLCJfZGVmaW5lUHJvcGVydHkiLCJmb3JtRWxlbWVudCIsImlucHV0RWxlbWVudCIsImVycm9yTWVzc2FnZSIsIl9lcnJvckVsZW1lbnQiLCJjb25jYXQiLCJkYXRhc2V0IiwiZXJyb3IiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX3Nob3dJbnB1dEVycm9yIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaGlkZUlucHV0RXJyb3IiLCJpbnB1dExpc3QiLCJzb21lIiwiYnV0dG9uRWxlbWVudCIsIl9oYXNJbnZhbGlkSW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJfaW5wdXRMaXN0IiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsIl9idXR0b25FbGVtZW50IiwiX3RvZ2dsZUJ1dHRvblN0YXRlIiwiZm9yRWFjaCIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJfZm9ybVR5cGUiLCJwcmV2ZW50RGVmYXVsdCIsIl9zZXRFdmVudExpc3RlbmVyIiwiX2Zvcm1TZWxlY3RvciIsImZvcm1TZWxlY3RvciIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIlBvcG91dCIsInBvcG91dFNlbGVjdG9yIiwiX3BvcG91dEVsZW1lbnQiLCJvdmVybGF5Iiwib3BlbiIsImJpbmQiLCJjbG9zZSIsIl9oYW5kbGVUYXJnZXRDbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJQb3BvdXRXaXRoRm9ybSIsIl9Qb3BvdXQiLCJmb3JtU3VibWl0SGFuZGxlciIsIl9jYWxsU3VwZXIiLCJfZm9ybVN1Ym1pdEhhbmRsZXIiLCJfc3VibWl0SGFuZGxlIiwic3VibWl0SGFuZGxlIiwiX2Zvcm0iLCJfaW5oZXJpdHMiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiY2FsbCIsInJlc2V0IiwiX2J1dHRvbkxpc3QiLCJpbWFnZVBvcG91dCIsImltYWdlUG9wb3V0VGl0bGUiLCJpbWFnZVBvcG91dEltYWdlIiwiU2VjdGlvbiIsIl9yZWYiLCJjc3NTZWxlY3RvciIsIml0ZW1zIiwicmVuZGVyZXIiLCJfaXRlbXMiLCJfcmVuZGVyZXIiLCJfY3NzRWxlbWVudCIsInJlbmRlciIsImFkZEl0ZW0iLCJlbGVtZW50IiwicHJlcGVuZCIsIlVzZXJJbmZvIiwibmFtZVNlbGVjdG9yIiwiYWJvdXRTZWxlY3RvciIsIl9uYW1lRWxlbWVudCIsIl9hYm91dEVsZW1lbnQiLCJnZXRVc2VySW5mbyIsIm5hbWUiLCJhYm91dCIsInNldFVzZXJJbmZvIiwiX3JlZjIiLCJhZGRCdXR0b24iLCJhZGRDbG9zZUJ1dHRvbiIsImFkZEZvcm1FbGVtZW50IiwiZWRpdEJ1dHRvbiIsImVkaXRDbG9zZUJ1dHRvbiIsImVkaXRGb3JtRWxlbWVudCIsImltYWdlQ2xvc2VCdXR0b24iLCJvdmVybGF5UG9wb3V0IiwibmFtZUlucHV0IiwiYWJvdXRJbnB1dCIsInRpdGxlSW5wdXQiLCJ1cmxJbnB1dCIsImluaXRpYWxDYXJkcyIsImxpbmsiLCJ1c2VySW5mbyIsInJlbmRlclNlY3Rpb24iLCJjYXJkIiwibmV3Q2FyZCIsImNhcmRFbGVtZW50IiwiZm9ybVR5cGVTZWxlY3RvciIsImlucHV0VmFsdWVzIiwiZWRpdFBvcG91dCIsIm5ld0VkaXRWYWxpZGF0aW9uIiwiZW5hYmxlVmFsaWRhdGlvbiIsImFkZFBvcG91dCIsIm5ld0FkZFZhbGlkYXRpb24iLCJ1c2VyRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=