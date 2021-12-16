/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/components/Accueils/MyContext.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/Accueils/MyContext.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");

var MyContext = (0,preact__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyContext);

/***/ }),

/***/ "./resources/js/components/Accueils/PlatOrder.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/Accueils/PlatOrder.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");



var PlatOrder = function PlatOrder(_ref) {
  var order = _ref.order,
      addClick = _ref.addClick,
      minusClick = _ref.minusClick,
      deleteClick = _ref.deleteClick;
  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "my-2"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("p", {
    className: "m-0 d-flex justify-content-between"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, order.numero, " x ", order.name), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, order.price, " DZD")), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("p", {
    className: "m-0 d-grid gap-2 d-md-flex justify-content-md-end"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
    type: "button",
    className: "btn btn-outline-warning btn-sm",
    onClick: addClick
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("i", {
    "class": "fa fa-plus",
    "aria-hidden": "true"
  })), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
    type: "button",
    className: "btn btn-outline-warning btn-sm",
    onClick: minusClick
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("i", {
    "class": "fa fa-minus",
    "aria-hidden": "true"
  })), deleteClick && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
    type: "button",
    className: "btn btn-outline-warning btn-sm",
    onClick: deleteClick
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("i", {
    "class": "fa fa-trash-o",
    "aria-hidden": "true"
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,preact_compat__WEBPACK_IMPORTED_MODULE_1__.memo)(PlatOrder));

/***/ }),

/***/ "./resources/js/components/Checkout/Address.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Checkout/Address.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Address = function Address() {
  var _useState = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)({
    street: '',
    zip: '',
    commune: '',
    city: '',
    address: '',
    apt: '',
    floor_number: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "my-3"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h5", {
    className: "text-uppercase"
  }, "Adresse"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "row"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "col mb-3"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
    htmlFor: "streetId",
    className: "form-label"
  }, "Rue *"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
    type: "text",
    className: "form-control",
    id: "streetId",
    name: "street"
  })), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "col mb-3"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
    htmlFor: "zipId",
    className: "form-label"
  }, "Zip / code postal"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
    type: "text",
    className: "form-control",
    id: "zipId",
    name: "zip"
  }))), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "row"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "col mb-3"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
    htmlFor: "communeId",
    className: "form-label"
  }, "Commune *"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
    type: "text",
    className: "form-control",
    id: "communeId",
    name: "commune"
  })), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "col mb-3"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
    htmlFor: "cityId",
    className: "form-label"
  }, "Ville *"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
    type: "text",
    className: "form-control",
    id: "cityId",
    name: "city"
  }))), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "row"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "col-12 mb-3"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
    htmlFor: "addressId",
    className: "form-label"
  }, "Adresse *"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
    type: "text",
    className: "form-control",
    id: "addressId",
    name: "address"
  }))), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "row"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "col mb-3"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
    htmlFor: "aptId",
    className: "form-label"
  }, "Apte"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
    type: "text",
    className: "form-control",
    id: "aptId",
    name: "apt"
  })), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "col mb-3"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
    htmlFor: "floorNumberId",
    className: "form-label"
  }, "Num\xE9ro d'\xE9tage"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
    type: "text",
    className: "form-control",
    id: "floorNumberId",
    name: "floor_number"
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Address);

/***/ }),

/***/ "./resources/js/components/Checkout/Contact.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Checkout/Contact.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Contact = function Contact() {
  var _useState = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)({
    prenom: '',
    nom: '',
    telephone: '',
    email: '',
    comment: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  var labelClick = function labelClick() {
    return setOpen(function (prevState) {
      return !prevState;
    });
  };

  var onChange = function onChange(e) {
    return setData(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, e.target.name, e.target.value));
    });
  };

  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "my-3"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h5", {
    className: "text-uppercase"
  }, "CONTACT"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "row"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "col mb-3"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
    htmlFor: "prenomId",
    className: "form-label"
  }, "Pr\xE9nom *"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
    type: "text",
    className: "form-control",
    id: "prenomId",
    name: "prenom",
    onChange: onChange
  })), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "col mb-3"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
    htmlFor: "nomId",
    className: "form-label"
  }, "Nom *"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
    type: "text",
    className: "form-control",
    id: "nomId",
    name: "nom",
    onChange: onChange
  }))), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "row"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "col mb-3"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
    htmlFor: "phoneId",
    className: "form-label"
  }, "T\xE9l\xE9phone *"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
    type: "text",
    className: "form-control",
    id: "phoneId",
    name: "telephone",
    onChange: onChange
  })), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "col mb-3"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
    htmlFor: "emailId",
    className: "form-label"
  }, "E-mail *"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
    type: "email",
    className: "form-control",
    id: "emailId",
    name: "email",
    onChange: onChange
  }))), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "mb-3"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
    onClick: labelClick,
    htmlFor: "addCommentOrderId",
    className: "form-label"
  }, open ? (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, "-") : (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, "+"), ' ', "Ajouter un commentaire \xE0 la commande"), open ? (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("textarea", {
    className: "form-control",
    id: "addCommentOrderId",
    rows: "3",
    name: "comment",
    onChange: onChange
  }) : null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

/***/ }),

/***/ "./resources/js/components/Checkout/Info.js":
/*!**************************************************!*\
  !*** ./resources/js/components/Checkout/Info.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _Payment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Payment */ "./resources/js/components/Checkout/Payment.js");
/* harmony import */ var _Address__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Address */ "./resources/js/components/Checkout/Address.js");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Contact */ "./resources/js/components/Checkout/Contact.js");





var Info = function Info(_ref) {
  var type = _ref.type;
  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Payment__WEBPACK_IMPORTED_MODULE_1__.default, {
    type: type
  }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Address__WEBPACK_IMPORTED_MODULE_2__.default, null), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Contact__WEBPACK_IMPORTED_MODULE_3__.default, null), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("p", {
    className: "m-0"
  }, "* These fields are required"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Info);

/***/ }),

/***/ "./resources/js/components/Checkout/Orders.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Checkout/Orders.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _Accueils_PlatOrder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Accueils/PlatOrder */ "./resources/js/components/Accueils/PlatOrder.js");
/* harmony import */ var _Accueils_MyContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Accueils/MyContext */ "./resources/js/components/Accueils/MyContext.js");





var Orders = function Orders(_ref) {
  var orders = _ref.orders;

  var _useContext = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Accueils_MyContext__WEBPACK_IMPORTED_MODULE_3__.default),
      dispatch = _useContext.dispatch;

  var incOrder = function incOrder(id) {
    dispatch({
      type: 'INC_ORDER',
      payload: id
    });
  };

  var decOrder = function decOrder(order) {
    if (order.numero === 1) {
      dispatch({
        type: "REMOVE_ORDER",
        payload: order.id
      });
    } else {
      dispatch({
        type: "DEC_ORDER",
        payload: order.id
      });
    }
  };

  var removeOrder = function removeOrder(id) {
    dispatch({
      type: "REMOVE_ORDER",
      payload: id
    });
  };

  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h5", {
    className: "text-uppercase"
  }, "VOTRE COMMANDE"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("hr", {
    className: "my-2"
  }), orders.map(function (order, i) {
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Accueils_PlatOrder__WEBPACK_IMPORTED_MODULE_2__.default, {
      key: i,
      order: order,
      addClick: function addClick() {
        return incOrder(order.id);
      },
      minusClick: function minusClick() {
        return decOrder(order);
      },
      deleteClick: function deleteClick() {
        return removeOrder(order.id);
      }
    });
  }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("hr", {
    className: "my-2"
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Orders);

/***/ }),

/***/ "./resources/js/components/Checkout/Payment.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Checkout/Payment.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



;

var Payment = function Payment(_ref) {
  var type = _ref.type;

  var _useState = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)({
    payment: 'card',
    order_type: '',
    when: 'as_soon_as_possible'
  }),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (type) {
      setData(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          order_type: type
        });
      });
    }
  }, [type]);

  var clickPayment = function clickPayment(type) {
    return setData(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        payment: type
      });
    });
  };

  var clickOrderType = function clickOrderType(type) {
    return setData(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        order_type: type
      });
    });
  };

  var clickWhen = function clickWhen(type) {
    return setData(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        when: type
      });
    });
  };

  var clsPayment = function clsPayment() {
    return "btn btn-outline-".concat(data.payment === 'card' ? 'info' : 'info');
  };

  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "row"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "col"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h5", {
    className: "text-uppercase"
  }, "Paiement"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "d-flex flex-column"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
    type: "button",
    className: "btn btn-outline-".concat(data.payment === 'card' ? 'primary' : 'secondary', " mb-2"),
    onClick: function onClick() {
      return clickPayment('card');
    }
  }, "Carte"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
    type: "button",
    className: "btn btn-outline-".concat(data.payment === 'cash' ? 'primary' : 'secondary'),
    onClick: function onClick() {
      return clickPayment('cash');
    }
  }, "Payer en esp\xE8ces"))), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "col"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h5", {
    className: "text-uppercase"
  }, "Type de commande"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "d-flex flex-column"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
    type: "button",
    className: "btn btn-outline-".concat(data.order_type === 'delivery' ? 'primary' : 'secondary', " mb-2"),
    onClick: function onClick() {
      return clickOrderType('delivery');
    }
  }, "Livraison"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
    type: "button",
    className: "btn btn-outline-".concat(data.order_type === 'pickup' ? 'primary' : 'secondary'),
    onClick: function onClick() {
      return clickOrderType('pickup');
    }
  }, "R\xE9cup\xE9rer"))), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "col"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h5", {
    className: "text-uppercase"
  }, "Lorsque"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "d-flex flex-column"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
    type: "button",
    className: "btn btn-outline-".concat(data.when === 'as_soon_as_possible' ? 'primary' : 'secondary', " mb-2"),
    onClick: function onClick() {
      return clickWhen('as_soon_as_possible');
    }
  }, "D\xE8s que possible"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
    type: "button",
    className: "btn btn-outline-".concat(data.when === 'specific_time' ? 'primary' : 'secondary'),
    onClick: function onClick() {
      return clickWhen('specific_time');
    }
  }, "Temps sp\xE9cifique")))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Payment);

/***/ }),

/***/ "./node_modules/preact/compat/dist/compat.module.js":
/*!**********************************************************!*\
  !*** ./node_modules/preact/compat/dist/compat.module.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCallback": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useCallback),
/* harmony export */   "useContext": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useContext),
/* harmony export */   "useDebugValue": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useDebugValue),
/* harmony export */   "useEffect": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect),
/* harmony export */   "useErrorBoundary": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useErrorBoundary),
/* harmony export */   "useImperativeHandle": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle),
/* harmony export */   "useLayoutEffect": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect),
/* harmony export */   "useMemo": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useMemo),
/* harmony export */   "useReducer": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useReducer),
/* harmony export */   "useRef": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef),
/* harmony export */   "useState": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState),
/* harmony export */   "createElement": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.createElement),
/* harmony export */   "createContext": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.createContext),
/* harmony export */   "createRef": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.createRef),
/* harmony export */   "Fragment": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.Fragment),
/* harmony export */   "Component": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.Component),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "version": () => (/* binding */ X),
/* harmony export */   "Children": () => (/* binding */ k),
/* harmony export */   "render": () => (/* binding */ z),
/* harmony export */   "hydrate": () => (/* binding */ B),
/* harmony export */   "unmountComponentAtNode": () => (/* binding */ rn),
/* harmony export */   "createPortal": () => (/* binding */ W),
/* harmony export */   "createFactory": () => (/* binding */ nn),
/* harmony export */   "cloneElement": () => (/* binding */ en),
/* harmony export */   "isValidElement": () => (/* binding */ tn),
/* harmony export */   "findDOMNode": () => (/* binding */ un),
/* harmony export */   "PureComponent": () => (/* binding */ E),
/* harmony export */   "memo": () => (/* binding */ g),
/* harmony export */   "forwardRef": () => (/* binding */ x),
/* harmony export */   "flushSync": () => (/* binding */ ln),
/* harmony export */   "unstable_batchedUpdates": () => (/* binding */ on),
/* harmony export */   "StrictMode": () => (/* binding */ fn),
/* harmony export */   "Suspense": () => (/* binding */ L),
/* harmony export */   "SuspenseList": () => (/* binding */ M),
/* harmony export */   "lazy": () => (/* binding */ F),
/* harmony export */   "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED": () => (/* binding */ Q)
/* harmony export */ });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
function S(n,t){for(var e in t)n[e]=t[e];return n}function C(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function E(n){this.props=n}function g(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return!r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:C(this.props,n)}function r(t){return this.shouldComponentUpdate=e,(0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(E.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__.Component).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return C(this.props,n)||C(this.state,t)};var w=preact__WEBPACK_IMPORTED_MODULE_1__.options.__b;preact__WEBPACK_IMPORTED_MODULE_1__.options.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n)};var R="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function x(n){function t(t,e){var r=S({},t);return delete r.ref,n(r,(e=t.ref||e)&&("object"!=typeof e||"current"in e)?e:null)}return t.$$typeof=R,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var N=function(n,t){return null==n?null:(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)((0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n).map(t))},k={map:N,forEach:N,count:function(n){return n?(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n).length:0},only:function(n){var t=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n);if(1!==t.length)throw"Children.only";return t[0]},toArray:preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray},A=preact__WEBPACK_IMPORTED_MODULE_1__.options.__e;preact__WEBPACK_IMPORTED_MODULE_1__.options.__e=function(n,t,e){if(n.then)for(var r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t);A(n,t,e)};var O=preact__WEBPACK_IMPORTED_MODULE_1__.options.unmount;function L(){this.__u=0,this.t=null,this.__b=null}function U(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function F(n){var t,e,r;function u(u){if(t||(t=n()).then(function(n){e=n.default||n},function(n){r=n}),r)throw r;if(!e)throw t;return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(e,u)}return u.displayName="Lazy",u.__f=!0,u}function M(){this.u=null,this.o=null}preact__WEBPACK_IMPORTED_MODULE_1__.options.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),O&&O(n)},(L.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__.Component).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=U(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l())};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__e){var n=r.state.__e;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate()}},f=!0===t.__h;r.__u++||f||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i)},L.prototype.componentWillUnmount=function(){this.t=[]},L.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),t.__c.__H=null),null!=(t=S({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P)}this.__b=null}var u=t.__e&&(0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,n.fallback);return u&&(u.__h=null),[(0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,t.__e?null:n.children),u]};var T=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};function D(n){return this.getChildContext=function(){return n.context},n.children}function I(n){var t=this,e=n.i;t.componentWillUnmount=function(){(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)(null,t.l),t.l=null,t.i=null},t.i&&t.i!==e&&t.componentWillUnmount(),n.__v?(t.l||(t.i=e,t.l={nodeType:1,parentNode:e,childNodes:[],appendChild:function(n){this.childNodes.push(n),t.i.appendChild(n)},insertBefore:function(n,e){this.childNodes.push(n),t.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),t.i.removeChild(n)}}),(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)((0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(D,{context:t.context},n.__v),t.l)):t.l&&t.componentWillUnmount()}function W(n,t){return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(I,{__v:n,i:t})}(M.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__.Component).__e=function(n){var t=this,e=U(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),T(t,n,r)):u()};e?e(o):o()}},M.prototype.render=function(n){this.u=null,this.o=new Map;var t=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},M.prototype.componentDidUpdate=M.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){T(n,e,t)})};var j="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,P=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,V=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};function z(n,t,e){return null==t.__k&&(t.textContent=""),(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)(n,t),"function"==typeof e&&e(),n?n.__c:null}function B(n,t,e){return (0,preact__WEBPACK_IMPORTED_MODULE_1__.hydrate)(n,t),"function"==typeof e&&e(),n?n.__c:null}preact__WEBPACK_IMPORTED_MODULE_1__.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_1__.Component.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t})}})});var H=preact__WEBPACK_IMPORTED_MODULE_1__.options.event;function Z(){}function Y(){return this.cancelBubble}function $(){return this.defaultPrevented}preact__WEBPACK_IMPORTED_MODULE_1__.options.event=function(n){return H&&(n=H(n)),n.persist=Z,n.isPropagationStopped=Y,n.isDefaultPrevented=$,n.nativeEvent=n};var q,G={configurable:!0,get:function(){return this.class}},J=preact__WEBPACK_IMPORTED_MODULE_1__.options.vnode;preact__WEBPACK_IMPORTED_MODULE_1__.options.vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){for(var u in r={},e){var o=e[u];"value"===u&&"defaultValue"in e&&null==o||("defaultValue"===u&&"value"in e&&null==e.value?u="value":"download"===u&&!0===o?o="":/ondoubleclick/i.test(u)?u="ondblclick":/^onchange(textarea|input)/i.test(u+t)&&!V(e.type)?u="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(u)?u=u.toLowerCase():P.test(u)?u=u.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===o&&(o=void 0),r[u]=o)}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value)})),"select"==t&&null!=r.defaultValue&&(r.value=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value})),n.props=r}t&&e.class!=e.className&&(G.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",G)),n.$$typeof=j,J&&J(n)};var K=preact__WEBPACK_IMPORTED_MODULE_1__.options.__r;preact__WEBPACK_IMPORTED_MODULE_1__.options.__r=function(n){K&&K(n),q=n.__c};var Q={ReactCurrentDispatcher:{current:{readContext:function(n){return q.__n[n.__c].props.value}}}},X="17.0.2";function nn(n){return preact__WEBPACK_IMPORTED_MODULE_1__.createElement.bind(null,n)}function tn(n){return!!n&&n.$$typeof===j}function en(n){return tn(n)?preact__WEBPACK_IMPORTED_MODULE_1__.cloneElement.apply(null,arguments):n}function rn(n){return!!n.__k&&((0,preact__WEBPACK_IMPORTED_MODULE_1__.render)(null,n),!0)}function un(n){return n&&(n.base||1===n.nodeType&&n)||null}var on=function(n,t){return n(t)},ln=function(n,t){return n(t)},fn=preact__WEBPACK_IMPORTED_MODULE_1__.Fragment;/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({useState:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState,useReducer:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useReducer,useEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect,useLayoutEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect,useRef:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef,useImperativeHandle:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle,useMemo:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useMemo,useCallback:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useCallback,useContext:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useContext,useDebugValue:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useDebugValue,version:"17.0.2",Children:k,render:z,hydrate:B,unmountComponentAtNode:rn,createPortal:W,createElement:preact__WEBPACK_IMPORTED_MODULE_1__.createElement,createContext:preact__WEBPACK_IMPORTED_MODULE_1__.createContext,createFactory:nn,cloneElement:en,createRef:preact__WEBPACK_IMPORTED_MODULE_1__.createRef,Fragment:preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,isValidElement:tn,findDOMNode:un,Component:preact__WEBPACK_IMPORTED_MODULE_1__.Component,PureComponent:E,memo:g,forwardRef:x,flushSync:ln,unstable_batchedUpdates:on,StrictMode:preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,Suspense:L,SuspenseList:M,lazy:F,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Q});
//# sourceMappingURL=compat.module.js.map


/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ S),
/* harmony export */   "hydrate": () => (/* binding */ q),
/* harmony export */   "createElement": () => (/* binding */ v),
/* harmony export */   "h": () => (/* binding */ v),
/* harmony export */   "Fragment": () => (/* binding */ d),
/* harmony export */   "createRef": () => (/* binding */ p),
/* harmony export */   "isValidElement": () => (/* binding */ i),
/* harmony export */   "Component": () => (/* binding */ _),
/* harmony export */   "cloneElement": () => (/* binding */ B),
/* harmony export */   "createContext": () => (/* binding */ D),
/* harmony export */   "toChildArray": () => (/* binding */ A),
/* harmony export */   "options": () => (/* binding */ l)
/* harmony export */ });
var n,l,u,i,t,o,r,f,e={},c=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(n,l){for(var u in l)n[u]=l[u];return n}function h(n){var l=n.parentNode;l&&l.removeChild(n)}function v(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return y(l,f,t,o,null)}function y(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u:r};return null!=l.vnode&&l.vnode(f),f}function p(){return{current:null}}function d(n){return n.children}function _(n,l){this.props=n,this.context=l}function k(n,l){if(null==l)return n.__?k(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?k(n):null}function b(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return b(n)}}function m(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!g.__r++||r!==l.debounceRendering)&&((r=l.debounceRendering)||o)(g)}function g(){for(var n;g.__r=t.length;)n=t.sort(function(n,l){return n.__v.__b-l.__v.__b}),t=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=a({},t)).__v=t.__v+1,j(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?k(t):o,t.__h),z(u,t),t.__e!=o&&b(t)))})}function w(n,l,u,i,t,o,r,f,s,a){var h,v,p,_,b,m,g,w=i&&i.__k||c,A=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y(null,_,null,null,_):Array.isArray(_)?y(d,{children:_},null,null,null):_.__b>0?y(_.type,_.props,_.key,null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(p=w[h])||p&&_.key==p.key&&_.type===p.type)w[h]=void 0;else for(v=0;v<A;v++){if((p=w[v])&&_.key==p.key&&_.type===p.type){w[v]=void 0;break}p=null}j(n,_,p=p||e,t,o,r,f,s,a),b=_.__e,(v=_.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(v,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&null!=_.__k&&_.__k===p.__k?_.__d=s=x(_,s,n):s=P(n,_,p,w,b,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&p.__e==s&&s.parentNode!=n&&(s=k(p))}for(u.__e=m,h=A;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=k(i,h+1)),N(w[h],w[h]));if(g)for(h=0;h<g.length;h++)M(g[h],g[++h],g[++h])}function x(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,l="function"==typeof t.type?x(t,l,u):P(u,t,t,n.__k,t.__e,l));return l}function A(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){A(n,l)}):l.push(n)),l}function P(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else{for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o}return void 0!==r?r:t.nextSibling}function C(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H(n,o,l[o],u[o],i)}function $(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||s.test(l)?u:u+"px"}function H(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T:I,o):n.removeEventListener(l,o?T:I,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l))}}function I(n){this.l[n.type+!1](l.event?l.event(n):n)}function T(n){this.l[n.type+!0](l.event?l.event(n):n)}function j(n,u,i,t,o,r,f,e,c){var s,h,v,y,p,k,b,m,g,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(s=l.__b)&&s(u);try{n:if("function"==typeof P){if(m=u.props,g=(s=P.contextType)&&t[s.__c],x=s?g?g.props.value:s.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(m,x):(u.__c=h=new _(m,x),h.constructor=P,h.render=O),g&&g.sub(h),h.props=m,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a({},h.__s)),a(h.__s,P.getDerivedStateFromProps(m,h.__s))),y=h.props,p=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==P.getDerivedStateFromProps&&m!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,x)||u.__v===i.__v){h.props=m,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u)}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,p,k)})}h.context=x,h.props=m,h.state=h.__s,(s=l.__r)&&s(u),h.__d=!1,h.__v=u,h.__P=n,s=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=a(a({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,p)),A=null!=s&&s.type===d&&null==s.key?s.props.children:s,w(n,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L(i.__e,u,i,t,o,r,f,c);(s=l.diffed)&&s(u)}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l.__e(n,u,i)}}function z(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function L(l,u,i,t,o,r,f,c){var s,a,v,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(o=!0),null!=r)for(;_<r.length;_++)if((s=r[_])&&(s===l||(d?s.localName==d:3==s.nodeType))){l=s,r[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1}if(null===d)y===p||c&&l.data===p||(l.data=p);else{if(r=r&&n.call(l.childNodes),a=(y=i.props||e).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(v||a)&&(v&&(a&&v.__html==a.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""))}if(C(l,p,y,o,c),v)u.__k=[];else if(_=u.props.children,w(l,Array.isArray(_)?_:[_],u,i,t,o&&"foreignObject"!==d,r,f,r?r[0]:i.__k&&k(i,0),c),null!=r)for(_=r.length;_--;)null!=r[_]&&h(r[_]);c||("value"in p&&void 0!==(_=p.value)&&(_!==l.value||"progress"===d&&!_)&&H(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&H(l,"checked",_,y.checked,!1))}return l}function M(n,u,i){try{"function"==typeof n?n(u):n.current=u}catch(n){l.__e(n,i)}}function N(n,u,i){var t,o;if(l.unmount&&l.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(n){l.__e(n,u)}t.base=t.__P=null}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N(t[o],u,"function"!=typeof n.type);i||null==n.__e||h(n.__e),n.__e=n.__d=void 0}function O(n,l,u){return this.constructor(n,u)}function S(u,i,t){var o,r,f;l.__&&l.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,f=[],j(i,u=(!o&&t||i).__k=v(d,null,[u]),r||e,e,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,f,!o&&t?t:r?r.__e:i.firstChild,o),z(f,u)}function q(n,l){S(n,l,q)}function B(l,u,i){var t,o,r,f=a({},l.props);for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),y(l.type,f,t||l.key,o||l.ref,null)}function D(n,l){var u={__c:l="__cC"+f++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(m)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=c.slice,l={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l}throw n}},u=0,i=function(n){return null!=n&&void 0===n.constructor},_.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof n&&(n=n(a({},u),this.props)),n&&a(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m(this))},_.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m(this))},_.prototype.render=d,t=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,f=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./node_modules/preact/hooks/dist/hooks.module.js":
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useState": () => (/* binding */ l),
/* harmony export */   "useReducer": () => (/* binding */ p),
/* harmony export */   "useEffect": () => (/* binding */ y),
/* harmony export */   "useLayoutEffect": () => (/* binding */ h),
/* harmony export */   "useRef": () => (/* binding */ s),
/* harmony export */   "useImperativeHandle": () => (/* binding */ _),
/* harmony export */   "useMemo": () => (/* binding */ d),
/* harmony export */   "useCallback": () => (/* binding */ A),
/* harmony export */   "useContext": () => (/* binding */ F),
/* harmony export */   "useDebugValue": () => (/* binding */ T),
/* harmony export */   "useErrorBoundary": () => (/* binding */ q)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var t,u,r,o=0,i=[],c=preact__WEBPACK_IMPORTED_MODULE_0__.options.__b,f=preact__WEBPACK_IMPORTED_MODULE_0__.options.__r,e=preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed,a=preact__WEBPACK_IMPORTED_MODULE_0__.options.__c,v=preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;function m(t,r){preact__WEBPACK_IMPORTED_MODULE_0__.options.__h&&preact__WEBPACK_IMPORTED_MODULE_0__.options.__h(u,t,o||r),o=0;var i=u.__H||(u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o=1,p(w,n)}function p(n,r,o){var i=m(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):w(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}))}],i.__c=u),i.__}function y(r,o){var i=m(t++,3);!preact__WEBPACK_IMPORTED_MODULE_0__.options.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__H.__h.push(i))}function h(r,o){var i=m(t++,4);!preact__WEBPACK_IMPORTED_MODULE_0__.options.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__h.push(i))}function s(n){return o=5,d(function(){return{current:n}},[])}function _(n,t,u){o=6,h(function(){"function"==typeof n?n(t()):n&&(n.current=t())},null==u?u:u.concat(n))}function d(n,u){var r=m(t++,7);return k(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function A(n,t){return o=8,d(function(){return n},t)}function F(n){var r=u.context[n.__c],o=m(t++,9);return o.c=n,r?(null==o.__&&(o.__=!0,r.sub(u)),r.props.value):n.__}function T(t,u){preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue&&preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue(u?u(t):t)}function q(n){var r=m(t++,10),o=l();return r.__=n,u.componentDidCatch||(u.componentDidCatch=function(n){r.__&&r.__(n),o[1](n)}),[o[0],function(){o[1](void 0)}]}function x(){i.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g),t.__H.__h.forEach(j),t.__H.__h=[]}catch(u){t.__H.__h=[],preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(u,t.__v)}}),i=[]}preact__WEBPACK_IMPORTED_MODULE_0__.options.__b=function(n){u=null,c&&c(n)},preact__WEBPACK_IMPORTED_MODULE_0__.options.__r=function(n){f&&f(n),t=0;var r=(u=n.__c).__H;r&&(r.__h.forEach(g),r.__h.forEach(j),r.__h=[])},preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed=function(t){e&&e(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i.push(o)&&r===preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame||((r=preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(u,100);b&&(t=requestAnimationFrame(u))})(x)),u=void 0},preact__WEBPACK_IMPORTED_MODULE_0__.options.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g),t.__h=t.__h.filter(function(n){return!n.__||j(n)})}catch(r){u.some(function(n){n.__h&&(n.__h=[])}),u=[],preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(r,t.__v)}}),a&&a(t,u)},preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount=function(t){v&&v(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g)}catch(t){preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(t,u.__v)}};var b="function"==typeof requestAnimationFrame;function g(n){var t=u;"function"==typeof n.__c&&n.__c(),u=t}function j(n){var t=u;n.__c=n.__(),u=t}function k(n,t){return!n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map


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
/*!******************************************************!*\
  !*** ./resources/js/components/Checkout/Checkout.js ***!
  \******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _Info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Info */ "./resources/js/components/Checkout/Info.js");
/* harmony import */ var _Orders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Orders */ "./resources/js/components/Checkout/Orders.js");
/* harmony import */ var _Accueils_MyContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Accueils/MyContext */ "./resources/js/components/Accueils/MyContext.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Checkout = function Checkout(_ref) {
  var dataReceive = _ref.data;

  var _useState = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)({
    orders: [],
    type: '',
    sommeOrders: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loadingButton = _useState6[0],
      setLoadingButton = _useState6[1];

  var _useContext = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Accueils_MyContext__WEBPACK_IMPORTED_MODULE_4__.default),
      orders = _useContext.orders,
      dispatch = _useContext.dispatch;

  (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (dataReceive && orders) {
      setData({
        type: dataReceive.type,
        sommeOrders: dataReceive.sommeOrders,
        orders: orders
      });
      setLoading(false);
    }
  }, [dataReceive, orders]);

  var handleClick = function handleClick() {
    setLoadingButton(true);

    if (data.orders.length === 0 || data.type === '') {
      // showNotify("Cart is empty. Add menu items.", "error");
      console.log("err");
      setLoadingButton(false);
      return;
    }

    console.log("yes");
    setLoadingButton(false);
  };

  if (loading) {
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      "class": "d-flex justify-content-center"
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      "class": "spinner-border m-5",
      role: "status"
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
      "class": "visually-hidden"
    }, "Loading...")));
  }

  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "container"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "row"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "col-md-8"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Info__WEBPACK_IMPORTED_MODULE_2__.default, {
    type: data.type
  })), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "col-md-4"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Orders__WEBPACK_IMPORTED_MODULE_3__.default, {
    orders: data.orders
  }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "d-flex justify-content-between align-items-center mb-2"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
    className: "text-uppercase"
  }, "total"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, data.sommeOrders, " DZD")), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "d-grid gap-2"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
    type: "button",
    className: "btn btn-primary text-uppercase fw-bold",
    onClick: handleClick,
    disabled: loadingButton
  }, loadingButton && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
    "class": "spinner-border spinner-border-sm",
    role: "status",
    "aria-hidden": "true"
  }), " ", "cr\xE9er une commande"))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkout);
})();

/******/ })()
;