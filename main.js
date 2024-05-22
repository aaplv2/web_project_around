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
      if (evt.target.classList.contains("popout__button-close")) {
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
      this._inputList.forEach(function (inputElement) {
        inputElement.value = "";
      });
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








// import renderEdit,
// renderAdd,
// closePopout,
// escapeKeyClose,
// "../components/utils.js";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpQixDQUFDQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBRXBDLElBQU1DLFNBQVMsR0FBRyxJQUFJL0QscUVBQWMsQ0FDbEMsVUFBQzJELFdBQVc7RUFBQSxPQUFLRCxnQkFBZ0IsQ0FBQ0MsV0FBVyxFQUFFLEtBQUssQ0FBQztBQUFBLEdBQ3JELGFBQ0YsQ0FBQztBQUNESSxTQUFTLENBQUNsSSxpQkFBaUIsQ0FBQyxDQUFDO0FBRTdCLElBQU1tSSxnQkFBZ0IsR0FBRyxJQUFJdkgsb0VBQWEsQ0FDeEM7RUFDRWtDLFlBQVksRUFBRTNELE9BQU8sQ0FBQ0QsYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUM1QzhELGFBQWEsRUFBRTdELE9BQU8sQ0FBQ2tELGdCQUFnQixDQUFDLGNBQWMsQ0FBQztFQUN2RGEsb0JBQW9CLEVBQUUvRCxPQUFPLENBQUNELGFBQWEsQ0FBQyxlQUFlLENBQUM7RUFDNURrRSxtQkFBbUIsRUFBRWpFLE9BQU8sQ0FBQ0QsYUFBYSxDQUFDLHdCQUF3QixDQUFDO0VBQ3BFb0UsZUFBZSxFQUFFbkUsT0FBTyxDQUFDRCxhQUFhLENBQUMseUJBQXlCLENBQUM7RUFDakVzRSxVQUFVLEVBQUVyRSxPQUFPLENBQUNELGFBQWEsQ0FBQyxvQkFBb0I7QUFDeEQsQ0FBQyxFQUNEMEgsY0FDRixDQUFDO0FBQ0R1QixnQkFBZ0IsQ0FBQ0YsZ0JBQWdCLENBQUMsQ0FBQztBQUVuQ3BCLFVBQVUsQ0FBQ2xILGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQ3pDLElBQU15SSxRQUFRLEdBQUdaLFFBQVEsQ0FBQ25CLFdBQVcsQ0FBQyxDQUFDO0VBQ3ZDMEIsVUFBVSxDQUFDbEUsSUFBSSxDQUFDLENBQUM7QUFDbkIsQ0FBQyxDQUFDO0FBRUY2QyxTQUFTLENBQUMvRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUV1SSxTQUFTLENBQUNyRSxJQUFJLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9zcmMvY29tcG9uZW50cy9Qb3BvdXQuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2NvbXBvbmVudHMvUG9wb3V0V2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2NvbXBvbmVudHMvUG9wb3V0V2l0aEltYWdlLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvcG91dFdpdGhJbWFnZSBmcm9tIFwiLi9Qb3BvdXRXaXRoSW1hZ2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCB1cmwsIGNhcmRTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuX3VybCA9IHVybDtcclxuICAgIHRoaXMuX2NhcmRTZWxlY3RvciA9IGNhcmRTZWxlY3RvcjtcclxuICAgIHRoaXMuX3pvb21SZW5kZXIgPSBuZXcgUG9wb3V0V2l0aEltYWdlKFwiLnBvcG91dC1pbWFnZVwiKTtcclxuICB9XHJcblxyXG4gIF9nZXRUZW1wbGF0ZSgpIHtcclxuICAgIGNvbnN0IGNhcmRUZW1wbGF0ZSA9IGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NhcmRTZWxlY3RvcilcclxuICAgICAgLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkXCIpXHJcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICByZXR1cm4gY2FyZFRlbXBsYXRlO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ2FyZCgpIHtcclxuICAgIHRoaXMuX2NhcmRFbGVtZW50ID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcclxuXHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3RpdGxlXCIpLnRleHRDb250ZW50ID0gdGhpcy5fdGl0bGU7XHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpLmFsdCA9IHRoaXMuX3RpdGxlO1xyXG4gICAgdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pbWFnZVwiKS5zcmMgPSB0aGlzLl91cmw7XHJcblxyXG4gICAgdGhpcy5fY2FyZEVsZW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fYnV0dG9uLWxpa2VcIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLl9hY3RpdmVMaWtlKCkpO1xyXG5cclxuICAgIHRoaXMuX2NhcmRFbGVtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2J1dHRvbi10cmFzaFwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuX3RyYXNoQ2FyZCgpKTtcclxuXHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pbWFnZVwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuX3pvb21JbWFnZSgpKTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT5cclxuICAgICAgdGhpcy5fem9vbVJlbmRlci5zZXRFdmVudExpc3RlbmVycyhldnQpXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9jYXJkRWxlbWVudDtcclxuICB9XHJcblxyXG4gIF9hY3RpdmVMaWtlKCkge1xyXG4gICAgY29uc3QgYnV0dG9uTGlrZSA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fYnV0dG9uLWxpa2VcIik7XHJcbiAgICBpZiAoYnV0dG9uTGlrZS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgICAgYnV0dG9uTGlrZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnV0dG9uTGlrZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3RyYXNoQ2FyZCgpIHtcclxuICAgIHRoaXMuX2J1dHRvblRyYXNoID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNidXR0b24tdHJhc2hcIik7XHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudC5yZW1vdmUodGhpcy5fYnV0dG9uVHJhc2gpO1xyXG4gIH1cclxuXHJcbiAgX3pvb21JbWFnZSgpIHtcclxuICAgIHRoaXMuX2ltYWdlUG9wb3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BvdXQtaW1hZ2VcIik7XHJcbiAgICB0aGlzLl9vdmVybGF5UG9wb3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdmVybGF5XCIpO1xyXG5cclxuICAgIHRoaXMuX2ltYWdlUG9wb3V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICB0aGlzLl9vdmVybGF5UG9wb3V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BvdXQtaW1hZ2VfX2ltYWdlXCIpLnNyYyA9XHJcbiAgICAgIHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1hZ2VcIikuc3JjO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BvdXQtaW1hZ2VfX2ltYWdlXCIpLmFsdCA9XHJcbiAgICAgIHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fdGl0bGVcIikudGV4dENvbnRlbnQ7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcG91dC1pbWFnZV9fdGl0bGVcIikudGV4dENvbnRlbnQgPVxyXG4gICAgICB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3RpdGxlXCIpLnRleHRDb250ZW50O1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldnQpID0+XHJcbiAgICAgIHRoaXMuX3pvb21SZW5kZXIuX2hhbmRsZUVzY0Nsb3NlKGV2dClcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2ltYWdlUG9wb3V0O1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICBjb25zdHJ1Y3Rvcihmb3JtRGF0YSwgZm9ybVR5cGUpIHtcclxuICAgIHRoaXMuX2Zvcm1TZWxlY3RvciA9IGZvcm1EYXRhLmZvcm1TZWxlY3RvcjtcclxuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBmb3JtRGF0YS5pbnB1dFNlbGVjdG9yO1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBmb3JtRGF0YS5zdWJtaXRCdXR0b25TZWxlY3RvcjtcclxuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBmb3JtRGF0YS5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xyXG4gICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gZm9ybURhdGEuaW5wdXRFcnJvckNsYXNzO1xyXG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IGZvcm1EYXRhLmVycm9yQ2xhc3M7XHJcbiAgICB0aGlzLl9mb3JtVHlwZSA9IGZvcm1UeXBlO1xyXG4gIH1cclxuXHJcbiAgX3Nob3dJbnB1dEVycm9yID0gKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIGVycm9yTWVzc2FnZSkgPT4ge1xyXG4gICAgdGhpcy5fZXJyb3JFbGVtZW50ID0gZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgYC4ke2lucHV0RWxlbWVudC5kYXRhc2V0LmVycm9yfS1lcnJvcmBcclxuICAgICk7XHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZvcm1fX2lucHV0X3R5cGVfZXJyb3JcIik7XHJcbiAgICB0aGlzLl9lcnJvckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZvcm1fX2lucHV0LWVycm9yX2FjdGl2ZVwiKTtcclxuICAgIHRoaXMuX2Vycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcclxuICB9O1xyXG5cclxuICBfaGlkZUlucHV0RXJyb3IgPSAoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgdGhpcy5fZXJyb3JFbGVtZW50ID0gZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgYC4ke2lucHV0RWxlbWVudC5kYXRhc2V0LmVycm9yfS1lcnJvcmBcclxuICAgICk7XHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImZvcm1fX2lucHV0X3R5cGVfZXJyb3JcIik7XHJcbiAgICB0aGlzLl9lcnJvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImZvcm1fX2lucHV0LWVycm9yX2FjdGl2ZVwiKTtcclxuICAgIHRoaXMuX2Vycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgX2NoZWNrSW5wdXRWYWxpZGl0eSA9IChmb3JtRWxlbWVudCwgaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICBpZiAoIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihcclxuICAgICAgICBmb3JtRWxlbWVudCxcclxuICAgICAgICBpbnB1dEVsZW1lbnQsXHJcbiAgICAgICAgaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihmb3JtRWxlbWVudCwgaW5wdXRFbGVtZW50KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBfaGFzSW52YWxpZElucHV0ID0gKGlucHV0TGlzdCkgPT4ge1xyXG4gICAgcmV0dXJuIGlucHV0TGlzdC5zb21lKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgcmV0dXJuICFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQ7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBfdG9nZ2xlQnV0dG9uU3RhdGUgPSAoaW5wdXRMaXN0LCBidXR0b25FbGVtZW50KSA9PiB7XHJcbiAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KGlucHV0TGlzdCkpIHtcclxuICAgICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9fc3VibWl0X2luYWN0aXZlXCIpO1xyXG4gICAgICBidXR0b25FbGVtZW50LnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImZvcm1fX3N1Ym1pdF9pbmFjdGl2ZVwiKTtcclxuICAgICAgYnV0dG9uRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBfc2V0RXZlbnRMaXN0ZW5lciA9IChmb3JtRWxlbWVudCkgPT4ge1xyXG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbShmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm1fX2lucHV0XCIpKTtcclxuICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQgPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX3N1Ym1pdFwiKTtcclxuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKHRoaXMuX2lucHV0TGlzdCwgdGhpcy5fYnV0dG9uRWxlbWVudCk7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKHRoaXMuX2lucHV0TGlzdCwgdGhpcy5fYnV0dG9uRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGVuYWJsZVZhbGlkYXRpb24gPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9mb3JtVHlwZS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldnQpID0+IHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXIodGhpcy5fZm9ybVR5cGUpO1xyXG4gIH07XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wb3V0IHtcclxuICBjb25zdHJ1Y3Rvcihwb3BvdXRTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5fcG9wb3V0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wb3V0U2VsZWN0b3IpO1xyXG4gICAgdGhpcy5vdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdmVybGF5XCIpO1xyXG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5faGFuZGxlRXNjQ2xvc2UgPSB0aGlzLl9oYW5kbGVFc2NDbG9zZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5faGFuZGxlVGFyZ2V0Q2xvc2UgPSB0aGlzLl9oYW5kbGVUYXJnZXRDbG9zZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICBvcGVuKCkge1xyXG4gICAgdGhpcy5fcG9wb3V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdmVybGF5XCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5fcG9wb3V0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdmVybGF5XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgfVxyXG4gIF9oYW5kbGVFc2NDbG9zZShldnQpIHtcclxuICAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcbiAgX2hhbmRsZVRhcmdldENsb3NlKGV2dCkge1xyXG4gICAgaWYgKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wb3V0X19idXR0b24tY2xvc2VcIikpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX3BvcG91dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuX2hhbmRsZVRhcmdldENsb3NlKTtcclxuICAgIHRoaXMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jbG9zZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQb3BvdXQgZnJvbSBcIi4vUG9wb3V0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3BvdXRXaXRoRm9ybSBleHRlbmRzIFBvcG91dCB7XHJcbiAgY29uc3RydWN0b3IoZm9ybVN1Ym1pdEhhbmRsZXIsIHBvcG91dFNlbGVjdG9yKSB7XHJcbiAgICBzdXBlcihwb3BvdXRTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9mb3JtU3VibWl0SGFuZGxlciA9IGZvcm1TdWJtaXRIYW5kbGVyO1xyXG4gICAgdGhpcy5fc3VibWl0SGFuZGxlID0gdGhpcy5zdWJtaXRIYW5kbGUuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgX2dldElucHV0VmFsdWVzKCkge1xyXG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbShcclxuICAgICAgdGhpcy5fcG9wb3V0RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm1fX2lucHV0XCIpXHJcbiAgICApO1xyXG4gIH1cclxuICBzdWJtaXRIYW5kbGUoZXZ0KSB7XHJcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuX2Zvcm1TdWJtaXRIYW5kbGVyKHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xyXG4gICAgdGhpcy5jbG9zZSgpO1xyXG4gIH1cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLl9wb3BvdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5fc3VibWl0SGFuZGxlKTtcclxuICB9XHJcbiAgb3BlbigpIHtcclxuICAgIHN1cGVyLm9wZW4oKTtcclxuICB9XHJcbiAgY2xvc2UoKSB7XHJcbiAgICBzdXBlci5jbG9zZSgpO1xyXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSBcIlwiO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9idXR0b25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtX19zdWJtaXRcIik7XHJcbiAgICB0aGlzLl9idXR0b25MaXN0LmZvckVhY2goKGJ1dHRvbkVsZW1lbnQpID0+IHtcclxuICAgICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9fc3VibWl0X2luYWN0aXZlXCIpO1xyXG4gICAgICBidXR0b25FbGVtZW50LnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUG9wb3V0IGZyb20gXCIuL1BvcG91dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wb3V0V2l0aEltYWdlIGV4dGVuZHMgUG9wb3V0IHtcclxuICBjb25zdHJ1Y3Rvcihwb3BvdXRTZWxlY3Rvcikge1xyXG4gICAgc3VwZXIocG9wb3V0U2VsZWN0b3IpO1xyXG4gIH1cclxuICBvcGVuKHRpdGxlLCB1cmwpIHtcclxuICAgIHN1cGVyLm9wZW4oKTtcclxuXHJcbiAgICBjb25zdCBpbWFnZVBvcG91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wb3V0LWltYWdlXCIpO1xyXG4gICAgY29uc3QgaW1hZ2VQb3BvdXRUaXRsZSA9IGltYWdlUG9wb3V0LnF1ZXJ5U2VsZWN0b3IoXCIucG9wb3V0LWltYWdlX190aXRsZVwiKTtcclxuICAgIGNvbnN0IGltYWdlUG9wb3V0SW1hZ2UgPSBpbWFnZVBvcG91dC5xdWVyeVNlbGVjdG9yKFwiLnBvcG91dC1pbWFnZV9faW1hZ2VcIik7XHJcblxyXG4gICAgaW1hZ2VQb3BvdXRUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgaW1hZ2VQb3BvdXRJbWFnZS5zcmMgPSB1cmw7XHJcbiAgICBpbWFnZVBvcG91dEltYWdlLmFsdCA9IHRpdGxlO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICBzdXBlci5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcclxuICBjb25zdHJ1Y3Rvcih7IGl0ZW1zLCByZW5kZXJlciB9LCBjc3NTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5faXRlbXMgPSBpdGVtcztcclxuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgICB0aGlzLl9jc3NFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjc3NTZWxlY3Rvcik7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMuX2l0ZW1zLmZvckVhY2godGhpcy5fcmVuZGVyZXIpO1xyXG4gIH1cclxuICBhZGRJdGVtKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2Nzc0VsZW1lbnQucHJlcGVuZChlbGVtZW50KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xyXG4gIGNvbnN0cnVjdG9yKHsgbmFtZVNlbGVjdG9yLCBhYm91dFNlbGVjdG9yIH0pIHtcclxuICAgIHRoaXMuX25hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYW1lU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fYWJvdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhYm91dFNlbGVjdG9yKTtcclxuICB9XHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lOiB0aGlzLl9uYW1lRWxlbWVudC50ZXh0Q29udGVudCxcclxuICAgICAgYWJvdXQ6IHRoaXMuX2Fib3V0RWxlbWVudC50ZXh0Q29udGVudCxcclxuICAgIH07XHJcbiAgfVxyXG4gIHNldFVzZXJJbmZvKHsgbmFtZSwgYWJvdXQgfSkge1xyXG4gICAgdGhpcy5fbmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgdGhpcy5fYWJvdXRFbGVtZW50LnRleHRDb250ZW50ID0gYWJvdXQ7XHJcbiAgfVxyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi4vcGFnZXMvaW5kZXguY3NzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiO1xyXG5pbXBvcnQgUG9wb3V0IGZyb20gXCIuLi9jb21wb25lbnRzL1BvcG91dC5qc1wiO1xyXG5pbXBvcnQgUG9wb3V0V2l0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wb3V0V2l0aEZvcm0uanNcIjtcclxuaW1wb3J0IFBvcG91dFdpdGhJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3BvdXRXaXRoSW1hZ2UuanNcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XHJcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcclxuLy8gaW1wb3J0IHJlbmRlckVkaXQsXHJcbi8vIHJlbmRlckFkZCxcclxuLy8gY2xvc2VQb3BvdXQsXHJcbi8vIGVzY2FwZUtleUNsb3NlLFxyXG4vLyBcIi4uL2NvbXBvbmVudHMvdXRpbHMuanNcIjtcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvZHlcIik7XHJcblxyXG5jb25zdCBhZGRCdXR0b24gPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYnV0dG9uLWFkZFwiKTtcclxuY29uc3QgYWRkQ2xvc2VCdXR0b24gPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wb3V0LWFkZF9fYnV0dG9uLWNsb3NlXCIpO1xyXG5jb25zdCBhZGRGb3JtRWxlbWVudCA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5wb3BvdXQtYWRkX19mb3JtXCIpO1xyXG5cclxuY29uc3QgZWRpdEJ1dHRvbiA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19idXR0b24tZWRpdFwiKTtcclxuY29uc3QgZWRpdENsb3NlQnV0dG9uID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcG91dC1lZGl0X19idXR0b24tY2xvc2VcIik7XHJcbmNvbnN0IGVkaXRGb3JtRWxlbWVudCA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5wb3BvdXQtZWRpdF9fZm9ybVwiKTtcclxuXHJcbmNvbnN0IGltYWdlQ2xvc2VCdXR0b24gPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wb3V0LWltYWdlX19idXR0b24tY2xvc2VcIik7XHJcblxyXG5jb25zdCBvdmVybGF5UG9wb3V0ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJsYXlcIik7XHJcblxyXG5jb25zdCBuYW1lSW5wdXQgPSBlZGl0Rm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BvdXQtZWRpdF9fZm9ybS1uYW1lXCIpO1xyXG5jb25zdCBhYm91dElucHV0ID0gZWRpdEZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wb3V0LWVkaXRfX2Zvcm0tdGV4dFwiKTtcclxuXHJcbmNvbnN0IHRpdGxlSW5wdXQgPSBhZGRGb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcG91dC1hZGRfX2Zvcm0tdGl0bGVcIik7XHJcbmNvbnN0IHVybElucHV0ID0gYWRkRm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BvdXQtYWRkX19mb3JtLXVybFwiKTtcclxuXHJcbmNvbnN0IGluaXRpYWxDYXJkcyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIkxhZ28gZGkgQnJhaWVzXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vbmV3LW1hcmtldHMvV0VCX3NwcmludF81L0VTL2xhZ28uanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlBhcnF1ZSBOYWNpb25hbCBkZSBsYSBWYW5vaXNlXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vbmV3LW1hcmtldHMvV0VCX3NwcmludF81L0VTL3Zhbm9pc2UuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkxhdGVtYXJcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9uZXctbWFya2V0cy9XRUJfc3ByaW50XzUvRVMvbGF0ZW1hci5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTW9udGHDsWFzIENhbHZhc1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL25ldy1tYXJrZXRzL1dFQl9zcHJpbnRfNS9FUy9iYWxkLW1vdW50YWlucy5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTGFnbyBMb3Vpc2VcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9uZXctbWFya2V0cy9XRUJfc3ByaW50XzUvRVMvbGFrZS1sb3Vpc2UuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlZhbGxlIGRlIFlvc2VtaXRlXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vbmV3LW1hcmtldHMvV0VCX3NwcmludF81L0VTL3lvc2VtaXRlLmpwZ1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyh7XHJcbiAgbmFtZVNlbGVjdG9yOiBcIi5wcm9maWxlX19pbmZvLW5hbWVcIixcclxuICBhYm91dFNlbGVjdG9yOiBcIi5wcm9maWxlX19pbmZvLXN1YnRpdGxlXCIsXHJcbn0pO1xyXG5cclxuY29uc3QgcmVuZGVyU2VjdGlvbiA9IG5ldyBTZWN0aW9uKFxyXG4gIHtcclxuICAgIGl0ZW1zOiBpbml0aWFsQ2FyZHMsXHJcbiAgICByZW5kZXJlcjogKGNhcmQpID0+IHtcclxuICAgICAgY29uc3QgbmV3Q2FyZCA9IG5ldyBDYXJkKGNhcmQubmFtZSwgY2FyZC5saW5rLCBcIiNjYXJkXCIpO1xyXG4gICAgICBjb25zdCBjYXJkRWxlbWVudCA9IG5ld0NhcmQuY3JlYXRlQ2FyZCgpO1xyXG4gICAgICByZW5kZXJTZWN0aW9uLmFkZEl0ZW0oY2FyZEVsZW1lbnQpO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIFwiLmNhcmRzXCJcclxuKTtcclxuXHJcbnJlbmRlclNlY3Rpb24ucmVuZGVyKCk7XHJcblxyXG5mdW5jdGlvbiBmb3JtVHlwZVNlbGVjdG9yKGlucHV0VmFsdWVzLCBmb3JtVHlwZSkge1xyXG4gIGlmIChmb3JtVHlwZSA9PT0gXCJlZGl0XCIpIHtcclxuICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKHsgbmFtZTogbmFtZUlucHV0LnZhbHVlLCBhYm91dDogYWJvdXRJbnB1dC52YWx1ZSB9KTtcclxuICB9IGVsc2UgaWYgKGZvcm1UeXBlID09PSBcImFkZFwiKSB7XHJcbiAgICBjb25zdCBuZXdDYXJkID0gbmV3IENhcmQodGl0bGVJbnB1dC52YWx1ZSwgdXJsSW5wdXQudmFsdWUsIFwiI2NhcmRcIik7XHJcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IG5ld0NhcmQuY3JlYXRlQ2FyZCgpO1xyXG4gICAgcmVuZGVyU2VjdGlvbi5hZGRJdGVtKGNhcmRFbGVtZW50KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGVkaXRQb3BvdXQgPSBuZXcgUG9wb3V0V2l0aEZvcm0oXHJcbiAgKGlucHV0VmFsdWVzKSA9PiBmb3JtVHlwZVNlbGVjdG9yKGlucHV0VmFsdWVzLCBcImVkaXRcIiksXHJcbiAgXCIucG9wb3V0LWVkaXRcIlxyXG4pO1xyXG5lZGl0UG9wb3V0LnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBuZXdFZGl0VmFsaWRhdGlvbiA9IG5ldyBGb3JtVmFsaWRhdG9yKFxyXG4gIHtcclxuICAgIGZvcm1TZWxlY3RvcjogY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIiksXHJcbiAgICBpbnB1dFNlbGVjdG9yOiBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybV9faW5wdXRcIiksXHJcbiAgICBzdWJtaXRCdXR0b25TZWxlY3RvcjogY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX3N1Ym1pdFwiKSxcclxuICAgIGluYWN0aXZlQnV0dG9uQ2xhc3M6IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX19zdWJtaXRfZGlzYWJsZWRcIiksXHJcbiAgICBpbnB1dEVycm9yQ2xhc3M6IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX19pbnB1dF90eXBlX2Vycm9yXCIpLFxyXG4gICAgZXJyb3JDbGFzczogY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX2lucHV0LWVycm9yXCIpLFxyXG4gIH0sXHJcbiAgZWRpdEZvcm1FbGVtZW50XHJcbik7XHJcbm5ld0VkaXRWYWxpZGF0aW9uLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuXHJcbmNvbnN0IGFkZFBvcG91dCA9IG5ldyBQb3BvdXRXaXRoRm9ybShcclxuICAoaW5wdXRWYWx1ZXMpID0+IGZvcm1UeXBlU2VsZWN0b3IoaW5wdXRWYWx1ZXMsIFwiYWRkXCIpLFxyXG4gIFwiLnBvcG91dC1hZGRcIlxyXG4pO1xyXG5hZGRQb3BvdXQuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmNvbnN0IG5ld0FkZFZhbGlkYXRpb24gPSBuZXcgRm9ybVZhbGlkYXRvcihcclxuICB7XHJcbiAgICBmb3JtU2VsZWN0b3I6IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpLFxyXG4gICAgaW5wdXRTZWxlY3RvcjogY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm1fX2lucHV0XCIpLFxyXG4gICAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX19zdWJtaXRcIiksXHJcbiAgICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9fc3VibWl0X2Rpc2FibGVkXCIpLFxyXG4gICAgaW5wdXRFcnJvckNsYXNzOiBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9faW5wdXRfdHlwZV9lcnJvclwiKSxcclxuICAgIGVycm9yQ2xhc3M6IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX19pbnB1dC1lcnJvclwiKSxcclxuICB9LFxyXG4gIGFkZEZvcm1FbGVtZW50XHJcbik7XHJcbm5ld0FkZFZhbGlkYXRpb24uZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5cclxuZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IHVzZXJEYXRhID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcclxuICBlZGl0UG9wb3V0Lm9wZW4oKTtcclxufSk7XHJcblxyXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFBvcG91dC5vcGVuKTtcclxuIl0sIm5hbWVzIjpbIlBvcG91dFdpdGhJbWFnZSIsIkNhcmQiLCJ0aXRsZSIsInVybCIsImNhcmRTZWxlY3RvciIsIl9jbGFzc0NhbGxDaGVjayIsIl90aXRsZSIsIl91cmwiLCJfY2FyZFNlbGVjdG9yIiwiX3pvb21SZW5kZXIiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl9nZXRUZW1wbGF0ZSIsImNhcmRUZW1wbGF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJjcmVhdGVDYXJkIiwiX3RoaXMiLCJfY2FyZEVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImFsdCIsInNyYyIsImFkZEV2ZW50TGlzdGVuZXIiLCJfYWN0aXZlTGlrZSIsIl90cmFzaENhcmQiLCJfem9vbUltYWdlIiwiZXZ0Iiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJidXR0b25MaWtlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJfYnV0dG9uVHJhc2giLCJfdGhpczIiLCJfaW1hZ2VQb3BvdXQiLCJfb3ZlcmxheVBvcG91dCIsIl9oYW5kbGVFc2NDbG9zZSIsImRlZmF1bHQiLCJGb3JtVmFsaWRhdG9yIiwiZm9ybURhdGEiLCJmb3JtVHlwZSIsIl9kZWZpbmVQcm9wZXJ0eSIsImZvcm1FbGVtZW50IiwiaW5wdXRFbGVtZW50IiwiZXJyb3JNZXNzYWdlIiwiX2Vycm9yRWxlbWVudCIsImNvbmNhdCIsImRhdGFzZXQiLCJlcnJvciIsInZhbGlkaXR5IiwidmFsaWQiLCJfc2hvd0lucHV0RXJyb3IiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9oaWRlSW5wdXRFcnJvciIsImlucHV0TGlzdCIsInNvbWUiLCJidXR0b25FbGVtZW50IiwiX2hhc0ludmFsaWRJbnB1dCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIl9pbnB1dExpc3QiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2J1dHRvbkVsZW1lbnQiLCJfdG9nZ2xlQnV0dG9uU3RhdGUiLCJmb3JFYWNoIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsIl9mb3JtVHlwZSIsInByZXZlbnREZWZhdWx0IiwiX3NldEV2ZW50TGlzdGVuZXIiLCJfZm9ybVNlbGVjdG9yIiwiZm9ybVNlbGVjdG9yIiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJfaW5wdXRFcnJvckNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiUG9wb3V0IiwicG9wb3V0U2VsZWN0b3IiLCJfcG9wb3V0RWxlbWVudCIsIm92ZXJsYXkiLCJvcGVuIiwiYmluZCIsImNsb3NlIiwiX2hhbmRsZVRhcmdldENsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRhcmdldCIsIlBvcG91dFdpdGhGb3JtIiwiX1BvcG91dCIsImZvcm1TdWJtaXRIYW5kbGVyIiwiX2NhbGxTdXBlciIsIl9mb3JtU3VibWl0SGFuZGxlciIsIl9zdWJtaXRIYW5kbGUiLCJzdWJtaXRIYW5kbGUiLCJfaW5oZXJpdHMiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiY2FsbCIsIl9idXR0b25MaXN0IiwiaW1hZ2VQb3BvdXQiLCJpbWFnZVBvcG91dFRpdGxlIiwiaW1hZ2VQb3BvdXRJbWFnZSIsIlNlY3Rpb24iLCJfcmVmIiwiY3NzU2VsZWN0b3IiLCJpdGVtcyIsInJlbmRlcmVyIiwiX2l0ZW1zIiwiX3JlbmRlcmVyIiwiX2Nzc0VsZW1lbnQiLCJyZW5kZXIiLCJhZGRJdGVtIiwiZWxlbWVudCIsInByZXBlbmQiLCJVc2VySW5mbyIsIm5hbWVTZWxlY3RvciIsImFib3V0U2VsZWN0b3IiLCJfbmFtZUVsZW1lbnQiLCJfYWJvdXRFbGVtZW50IiwiZ2V0VXNlckluZm8iLCJuYW1lIiwiYWJvdXQiLCJzZXRVc2VySW5mbyIsIl9yZWYyIiwiYWRkQnV0dG9uIiwiYWRkQ2xvc2VCdXR0b24iLCJhZGRGb3JtRWxlbWVudCIsImVkaXRCdXR0b24iLCJlZGl0Q2xvc2VCdXR0b24iLCJlZGl0Rm9ybUVsZW1lbnQiLCJpbWFnZUNsb3NlQnV0dG9uIiwib3ZlcmxheVBvcG91dCIsIm5hbWVJbnB1dCIsImFib3V0SW5wdXQiLCJ0aXRsZUlucHV0IiwidXJsSW5wdXQiLCJpbml0aWFsQ2FyZHMiLCJsaW5rIiwidXNlckluZm8iLCJyZW5kZXJTZWN0aW9uIiwiY2FyZCIsIm5ld0NhcmQiLCJjYXJkRWxlbWVudCIsImZvcm1UeXBlU2VsZWN0b3IiLCJpbnB1dFZhbHVlcyIsImVkaXRQb3BvdXQiLCJuZXdFZGl0VmFsaWRhdGlvbiIsImVuYWJsZVZhbGlkYXRpb24iLCJhZGRQb3BvdXQiLCJuZXdBZGRWYWxpZGF0aW9uIiwidXNlckRhdGEiXSwic291cmNlUm9vdCI6IiJ9