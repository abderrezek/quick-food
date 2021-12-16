/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/components/Accueils/DetailPlat.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Accueils/DetailPlat.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _ui_Modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/Modal.js */ "./resources/js/ui/Modal.js");
/* harmony import */ var _MyContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyContext */ "./resources/js/components/Accueils/MyContext.js");





var DetailPlat = function DetailPlat(_ref) {
  var plat = _ref.plat,
      onClose = _ref.onClose,
      show = _ref.show;

  var _useContext = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext)(_MyContext__WEBPACK_IMPORTED_MODULE_3__.default),
      orders = _useContext.orders,
      dispatch = _useContext.dispatch;

  var incOrder = function incOrder(id) {
    dispatch({
      type: 'INC_ORDER',
      payload: id
    });
  };

  var decOrder = function decOrder(plat) {
    if (plat.numero === 1) {
      dispatch({
        type: "REMOVE_ORDER",
        payload: plat.id
      });
    } else {
      dispatch({
        type: "DEC_ORDER",
        payload: plat.id
      });
    }
  };

  var addOrder = function addOrder(plat) {
    if (plat.numero === 0) {
      plat.numero = 1;
      dispatch({
        type: 'ADD_ORDER',
        payload: plat
      });
    }
  };

  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_ui_Modal_js__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: "",
    onClose: onClose,
    show: show,
    footer: false
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "shadow-sm bg-body d-flex flex-column justify-content-between",
    style: {
      height: '200px'
    }
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("img", {
    "class": "card-img-top",
    src: "",
    alt: "image plat ".concat(plat.name)
  }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h4", null, plat.name), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h6", null, plat.ingredients))), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "pt-4 d-flex justify-content-evenly align-items-center"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    "class": "btn-group",
    role: "group",
    "aria-label": "Basic example"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
    type: "button",
    className: "btn btn-outline-primary",
    onClick: function onClick() {
      return decOrder(plat);
    }
  }, "-"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
    className: "py-1 ps-1 border border-dark",
    type: "text",
    value: plat.numero === 0 ? 1 : plat.numero
  }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
    type: "button",
    className: "btn btn-outline-primary",
    onClick: function onClick() {
      return incOrder(plat.id);
    }
  }, "+")), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
    className: "fs-4 mx-2"
  }, plat.price), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: function onClick() {
      return addOrder(plat);
    }
  }, "Ajouter au panier")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailPlat);

/***/ }),

/***/ "./resources/js/components/Accueils/MyContext.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/Accueils/MyContext.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");

var MyContext = (0,preact__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyContext);

/***/ }),

/***/ "./resources/js/components/Accueils/Order.js":
/*!***************************************************!*\
  !*** ./resources/js/components/Accueils/Order.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _DetailPlat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailPlat */ "./resources/js/components/Accueils/DetailPlat.js");
/* harmony import */ var _MyContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyContext */ "./resources/js/components/Accueils/MyContext.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Order = function Order(_ref) {
  var platReceive = _ref.plat,
      showNotify = _ref.showNotify;

  var _useState = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)({
    id: platReceive.id,
    name: platReceive.name,
    price: platReceive.price,
    description: platReceive.description,
    ingredients: platReceive.ingredients,
    numero: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      plat = _useState2[0],
      setPlat = _useState2[1];

  var _useState3 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showModal = _useState6[0],
      setShowModal = _useState6[1];

  var _useState7 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)('click'),
      _useState8 = _slicedToArray(_useState7, 2),
      click = _useState8[0],
      setClick = _useState8[1];

  var _useContext = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext)(_MyContext__WEBPACK_IMPORTED_MODULE_3__.default),
      orders = _useContext.orders,
      dispatch = _useContext.dispatch;

  (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setClick('no');
    var order = orders.filter(function (ord) {
      return ord.id === plat.id;
    });

    if (order.length > 0 && order[0].id === plat.id) {
      setPlat(order[0]);
    } else {
      setPlat(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          numero: 0
        });
      });
    }
  }, [orders]);
  (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (click === 'click') {
      if (plat.numero === 1) {
        dispatch({
          type: 'ADD_ORDER',
          payload: plat
        });
        setLoading(false);
      } else if (plat.numero > 1) {
        dispatch({
          type: 'INC_ORDER',
          payload: plat.id
        });
        setLoading(false);
      }
    }
  }, [plat.numero]);

  var clickHandled = function clickHandled() {
    setLoading(true);
    setClick('click');
    setPlat(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        numero: prevState.numero + 1
      });
    });
    showNotify("Menu item was added to your cart", "success");
  };

  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    "class": "card text-center"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("img", {
    "class": "card-img-top",
    style: {
      cursor: 'pointer'
    },
    src: "",
    alt: "image plat ".concat(plat.name),
    onClick: function onClick() {
      return setShowModal(true);
    }
  }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    "class": "card-body"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h5", {
    "class": "card-title"
  }, plat.name), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("p", {
    "class": "card-text"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, plat.description), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h4", null, plat.price, " DZD")), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    "class": "d-grid gap-2"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
    type: "button",
    "class": "btn btn-primary position-relative",
    disabled: loading,
    onClick: clickHandled
  }, loading && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
    "class": "spinner-border spinner-border-sm",
    role: "status",
    "aria-hidden": "true"
  }), " ", "Commandez maintenant", plat.numero > 0 ? (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
    "class": "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
  }, plat.numero, " ", (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
    "class": "visually-hidden"
  }, "unread messages")) : null)))), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_DetailPlat__WEBPACK_IMPORTED_MODULE_2__.default, {
    show: showModal,
    onClose: function onClose() {
      return setShowModal(false);
    },
    plat: plat
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Order);

/***/ }),

/***/ "./resources/js/components/Accueils/Panier.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Accueils/Panier.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var ziggy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ziggy */ "./vendor/tightenco/ziggy/dist/index.js");
/* harmony import */ var ziggy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ziggy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ziggy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ziggy */ "./resources/js/ziggy.js");
/* harmony import */ var _PlatOrder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlatOrder */ "./resources/js/components/Accueils/PlatOrder.js");
/* harmony import */ var _MyContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MyContext */ "./resources/js/components/Accueils/MyContext.js");
/* harmony import */ var _ui_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/Modal */ "./resources/js/ui/Modal.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var Panier = function Panier(_ref) {
  var showNotify = _ref.showNotify,
      modal = _ref.modal,
      setDataReceive = _ref.setData;

  var _useState = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)({
    orders: [],
    type: "delivery",
    sommeOrders: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      sommeOrders = _useState4[0],
      setSommeOrders = _useState4[1];

  var _useState5 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useContext = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext)(_MyContext__WEBPACK_IMPORTED_MODULE_5__.default),
      orders = _useContext.orders,
      dispatch = _useContext.dispatch;

  (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setSommeOrders(orders.reduce(function (t, cv, ci, ar) {
      return t + parseFloat(cv.price) * cv.numero;
    }, 0));
    setData(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        orders: orders
      });
    });
  }, [orders]);
  (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setData(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        sommeOrders: sommeOrders
      });
    });
  }, [sommeOrders]);

  var clickHandled = function clickHandled() {
    setLoading(true);

    if (data.orders.length === 0 || sommeOrders === 0 || data.type === '') {
      showNotify("Cart is empty. Add menu items.", "error");
      setLoading(false);
      return;
    }

    axios.post(ziggy__WEBPACK_IMPORTED_MODULE_2___default()('api.checkout.index', undefined, undefined, _ziggy__WEBPACK_IMPORTED_MODULE_3__.Ziggy), data).then(function (res) {
      // console.log('data.sommeOrders: ', data.sommeOrders);
      setDataReceive({
        // orders,
        type: data.type // sommeOrders: data.sommeOrders,

      });
    })["catch"](function (err) {
      console.log('error in Panier js : ', err.response);
    })["finally"](function () {
      setLoading(false);
      modal.show();
    });
  };

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

  var removeAllOrders = function removeAllOrders() {
    if (orders.length > 0) {
      dispatch({
        type: "REMOVE_ALL"
      });
    }
  };

  var handleChange = function handleChange(e) {
    return setData(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        type: e.target.value
      });
    });
  };

  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("select", {
    className: "form-select my-4",
    value: data.type,
    onChange: handleChange
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("option", {
    value: "delivery"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("i", {
    className: "fa fa-car",
    ariaHidden: "true"
  }), " Livraison"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("option", {
    value: "pickup"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("i", {
    className: "fa fa-shopping-bag",
    ariaHidden: "true"
  }), " ", "R\xE9cup\xE9rer")), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "d-flex justify-content-between align-items-center"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h6", {
    className: "text-uppercase"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("strong", null, "your order")), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
    type: "button",
    className: "btn btn-outline-danger btn-sm",
    onClick: removeAllOrders,
    disabled: data.orders.length === 0
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("i", {
    "class": "fa fa-trash-o",
    "aria-hidden": "true"
  }))), data.orders.length !== 0 ? (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("hr", {
    className: "my-2"
  }), data.orders.map(function (order, i) {
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_PlatOrder__WEBPACK_IMPORTED_MODULE_4__.default, {
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
  }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "d-flex justify-content-between align-items-center mb-2"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
    className: "text-uppercase"
  }, "total"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, sommeOrders, " DZD"))) : (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "text-center text-secondary"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("i", {
    className: "fa fa-shopping-cart fa-5x",
    ariaHidden: "true"
  }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("p", {
    className: "my-3"
  }, "Cart is empty. Add menu items.")), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "d-grid gap-2"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
    type: "button",
    className: "btn btn-primary text-uppercase fw-bold",
    disabled: loading && orders.length > 0,
    onClick: clickHandled
  }, loading && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
    "class": "spinner-border spinner-border-sm",
    role: "status",
    "aria-hidden": "true"
  }), " ", "Aller \xE0 la caisse")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Panier);

/***/ }),

/***/ "./resources/js/components/Accueils/PlatOrder.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/Accueils/PlatOrder.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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




var Address = function Address(_ref) {
  var setData = _ref.setData,
      errors = _ref.errors;

  var _useState = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)({
    // street: '',
    // zip: '',
    commune: '',
    city: '',
    address: '',
    apt: '',
    floor_number: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      form = _useState2[0],
      setForm = _useState2[1];

  var onChange = function onChange(e) {
    return setData(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, e.target.name, e.target.value));
    });
  };

  var cls = function cls(name) {
    return "form-control ".concat(errors && name in errors ? 'is-invalid' : '');
  };

  var showErrors = function showErrors(errMsg, name) {
    return errors && name in errors && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      className: "invalid-feedback"
    }, errMsg);
  };

  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "my-3"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h5", {
    className: "text-uppercase"
  }, "Adresse"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "row"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "col mb-3"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
    htmlFor: "communeId",
    className: "form-label"
  }, "Commune *"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
    type: "text",
    className: cls('commune'),
    id: "communeId",
    name: "commune",
    onChange: onChange
  }), showErrors(errors.commune, 'commune')), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "col mb-3"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
    htmlFor: "cityId",
    className: "form-label"
  }, "Ville *"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
    type: "text",
    className: cls('city'),
    id: "cityId",
    name: "city",
    onChange: onChange
  }), showErrors(errors.city, 'city'))), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "row"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "col-12 mb-3"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
    htmlFor: "addressId",
    className: "form-label"
  }, "Adresse *"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
    type: "text",
    className: cls('address'),
    id: "addressId",
    name: "address",
    onChange: onChange
  }), showErrors(errors.address, 'address'))), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "row"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "col mb-3"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
    htmlFor: "aptId",
    className: "form-label"
  }, "Apte"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
    type: "text",
    className: cls('apt'),
    id: "aptId",
    name: "apt",
    onChange: onChange
  }), showErrors(errors.apt, 'apt')), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "col mb-3"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
    htmlFor: "floorNumberId",
    className: "form-label"
  }, "Num\xE9ro d'\xE9tage"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
    type: "text",
    className: cls('floor_number'),
    id: "floorNumberId",
    name: "floor_number",
    onChange: onChange
  }), showErrors(errors.floor_number, 'floor_number'))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Address);

/***/ }),

/***/ "./resources/js/components/Checkout/Checkout.js":
/*!******************************************************!*\
  !*** ./resources/js/components/Checkout/Checkout.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var ziggy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ziggy */ "./vendor/tightenco/ziggy/dist/index.js");
/* harmony import */ var ziggy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ziggy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ziggy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ziggy */ "./resources/js/ziggy.js");
/* harmony import */ var _Info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Info */ "./resources/js/components/Checkout/Info.js");
/* harmony import */ var _Orders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Orders */ "./resources/js/components/Checkout/Orders.js");
/* harmony import */ var _Accueils_MyContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Accueils/MyContext */ "./resources/js/components/Accueils/MyContext.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var Checkout = function Checkout(_ref) {
  var dataReceive = _ref.data,
      showNotify = _ref.showNotify;

  var _useState = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)({
    orders: [],
    sommeOrders: 0,
    type: '',
    payment: '',
    when: '',
    // street: '',
    // zip: '',
    commune: '',
    city: '',
    address: '',
    apt: '',
    floor_number: '',
    prenom: '',
    nom: '',
    telephone: '',
    email: '',
    comment: ''
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

  var _useState7 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      errors = _useState8[0],
      setErrors = _useState8[1];

  var _useContext = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Accueils_MyContext__WEBPACK_IMPORTED_MODULE_6__.default),
      orders = _useContext.orders,
      dispatch = _useContext.dispatch;

  (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (dataReceive && orders) {
      setData(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          type: dataReceive.type,
          sommeOrders: orders.reduce(function (t, cv, ci, ar) {
            return t + parseFloat(cv.price) * cv.numero;
          }, 0),
          orders: orders
        });
      });
      setLoading(false);
    }
  }, [dataReceive, orders]);

  var handleClick = function handleClick() {
    setLoadingButton(true);

    if (data.orders.length === 0 || data.type === '') {
      showNotify("Cart is empty. Add menu items.", "error");
      setLoadingButton(false);
      return;
    }

    setErrors([]);
    axios.post(ziggy__WEBPACK_IMPORTED_MODULE_2___default()('api.checkout.create-order', undefined, undefined, _ziggy__WEBPACK_IMPORTED_MODULE_3__.Ziggy), data).then(function (res) {
      if (res.status === 201) {
        window.location.href = ziggy__WEBPACK_IMPORTED_MODULE_2___default()('checkout.index', undefined, undefined, _ziggy__WEBPACK_IMPORTED_MODULE_3__.Ziggy);
      }
    })["catch"](function (err) {
      if (err.response && 'errors' in err.response.data) {
        console.log(err.response);
        setErrors(err.response.data.errors);
      }
    });
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
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Info__WEBPACK_IMPORTED_MODULE_4__.default, {
    type: data.type,
    setData: setData,
    errors: errors
  })), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "col-md-4"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Orders__WEBPACK_IMPORTED_MODULE_5__.default, {
    orders: data.orders,
    sommes: data.sommeOrders
  }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
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

/***/ }),

/***/ "./resources/js/components/Checkout/Contact.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Checkout/Contact.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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




var Contact = function Contact(_ref) {
  var setData = _ref.setData,
      errors = _ref.errors;

  var _useState = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)({
    prenom: '',
    nom: '',
    telephone: '',
    email: '',
    comment: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      form = _useState2[0],
      setForm = _useState2[1];

  var _useState3 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  var labelClick = function labelClick() {
    return setOpen(function (prevState) {
      return !prevState;
    });
  }; // const onChange = (e) => setOpen(prevState => ({ ...prevState, [e.target.name]: e.target.value }));


  var onChange = function onChange(e) {
    return setData(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, e.target.name, e.target.value));
    });
  };

  var cls = function cls(name) {
    return "form-control ".concat(errors && name in errors ? 'is-invalid' : '');
  };

  var showErrors = function showErrors(errMsg, name) {
    return errors && name in errors && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      className: "invalid-feedback"
    }, errMsg);
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
    className: cls('prenom'),
    id: "prenomId",
    name: "prenom",
    onChange: onChange
  }), showErrors(errors.prenom, 'prenom')), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "col mb-3"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
    htmlFor: "nomId",
    className: "form-label"
  }, "Nom *"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
    type: "text",
    className: cls('nom'),
    id: "nomId",
    name: "nom",
    onChange: onChange
  }), showErrors(errors.nom, 'nom'))), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "row"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "col mb-3"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
    htmlFor: "phoneId",
    className: "form-label"
  }, "T\xE9l\xE9phone *"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
    type: "text",
    className: cls('telephone'),
    id: "phoneId",
    name: "telephone",
    onChange: onChange
  }), showErrors(errors.telephone, 'telephone')), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "col mb-3"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
    htmlFor: "emailId",
    className: "form-label"
  }, "E-mail *"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
    type: "email",
    className: cls('email'),
    id: "emailId",
    name: "email",
    onChange: onChange
  }), showErrors(errors.email, 'email'))), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "mb-3"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
    onClick: labelClick,
    htmlFor: "addCommentOrderId",
    className: "form-label",
    style: {
      cursor: 'pointer'
    }
  }, open ? (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, "-") : (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, "+"), ' ', "Ajouter un commentaire \xE0 la commande"), open ? (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("textarea", {
    className: cls('comment'),
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _Payment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Payment */ "./resources/js/components/Checkout/Payment.js");
/* harmony import */ var _Address__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Address */ "./resources/js/components/Checkout/Address.js");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Contact */ "./resources/js/components/Checkout/Contact.js");





var Info = function Info(_ref) {
  var type = _ref.type,
      setData = _ref.setData,
      errors = _ref.errors;
  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Payment__WEBPACK_IMPORTED_MODULE_1__.default, {
    type: type,
    setData: setData
  }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Address__WEBPACK_IMPORTED_MODULE_2__.default, {
    setData: setData,
    errors: errors
  }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Contact__WEBPACK_IMPORTED_MODULE_3__.default, {
    setData: setData,
    errors: errors
  }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("p", {
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _Accueils_PlatOrder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Accueils/PlatOrder */ "./resources/js/components/Accueils/PlatOrder.js");
/* harmony import */ var _Accueils_MyContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Accueils/MyContext */ "./resources/js/components/Accueils/MyContext.js");





var Orders = function Orders(_ref) {
  var orders = _ref.orders,
      sommes = _ref.sommes;

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
  }, "VOTRE COMMANDE"), orders.length > 0 ? (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("hr", {
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
  }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "d-flex justify-content-between align-items-center mb-2"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
    className: "text-uppercase"
  }, "total"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, sommes, " DZD"))) : (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "text-center text-secondary"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("i", {
    className: "fa fa-shopping-cart fa-5x",
    ariaHidden: "true"
  }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("p", {
    className: "my-3"
  }, "Cart is empty. Add menu items.")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Orders);

/***/ }),

/***/ "./resources/js/components/Checkout/Payment.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Checkout/Payment.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  var type = _ref.type,
      setData = _ref.setData;

  var _useState = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)({
    payment: 'card',
    order_type: '',
    when: 'as_soon_as_possible'
  }),
      _useState2 = _slicedToArray(_useState, 2),
      types = _useState2[0],
      setTypes = _useState2[1];

  (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (type) {
      setTypes(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          order_type: type
        });
      });
      setData(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          payment: types.payment,
          when: types.when
        });
      });
    }
  }, [type]);

  var clickPayment = function clickPayment(type) {
    setTypes(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        payment: type
      });
    });
    setData(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        payment: type
      });
    });
  };

  var clickOrderType = function clickOrderType(type) {
    setTypes(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        order_type: type
      });
    });
    setData(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        type: type
      });
    });
  };

  var clickWhen = function clickWhen(type) {
    setTypes(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        when: type
      });
    });
    setData(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        when: type
      });
    });
  };

  var clsPayment = function clsPayment() {
    return "btn btn-outline-".concat(types.payment === 'card' ? 'info' : 'info');
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
    className: "btn btn-outline-".concat(types.payment === 'card' ? 'primary' : 'secondary', " mb-2"),
    onClick: function onClick() {
      return clickPayment('card');
    }
  }, "Carte"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
    type: "button",
    className: "btn btn-outline-".concat(types.payment === 'cash' ? 'primary' : 'secondary'),
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
    className: "btn btn-outline-".concat(types.order_type === 'delivery' ? 'primary' : 'secondary', " mb-2"),
    onClick: function onClick() {
      return clickOrderType('delivery');
    }
  }, "Livraison"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
    type: "button",
    className: "btn btn-outline-".concat(types.order_type === 'pickup' ? 'primary' : 'secondary'),
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
    className: "btn btn-outline-".concat(types.when === 'as_soon_as_possible' ? 'primary' : 'secondary', " mb-2"),
    onClick: function onClick() {
      return clickWhen('as_soon_as_possible');
    }
  }, "D\xE8s que possible"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
    type: "button",
    className: "btn btn-outline-".concat(types.when === 'specific_time' ? 'primary' : 'secondary'),
    onClick: function onClick() {
      return clickWhen('specific_time');
    }
  }, "Temps sp\xE9cifique")))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Payment);

/***/ }),

/***/ "./resources/js/ui/Modal.js":
/*!**********************************!*\
  !*** ./resources/js/ui/Modal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");



var Modal = function Modal(_ref) {
  var title = _ref.title,
      show = _ref.show,
      onClose = _ref.onClose,
      footer = _ref.footer,
      children = _ref.children,
      fullWidth = _ref.fullWidth;
  (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var closeOnEscapeKeyDown = function closeOnEscapeKeyDown(e) {
      if ((e.charCode || e.keyCode) === 27) {
        onClose();
      }
    };

    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function () {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  });

  if (!show) {
    return null;
  }

  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "modall",
    onClick: onClose
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "modal__content ".concat(fullWidth ? 'modal__full__width' : ''),
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "modal__header ".concat(title ? '' : 'flex-row-reverse')
  }, title ? (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h4", {
    className: "modal__title"
  }, title) : null, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
    type: "button",
    className: "btn-close",
    onClick: onClose
  })), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "modal__body"
  }, children), footer ? (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "modal__footer"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: onClose
  }, "Close")) : null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./resources/js/ziggy.js":
/*!*******************************!*\
  !*** ./resources/js/ziggy.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ziggy": () => (/* binding */ Ziggy)
/* harmony export */ });
var Ziggy = {
  "url": "http:\/\/127.0.0.1:8000",
  "port": null,
  "defaults": {},
  "routes": {
    "debugbar.openhandler": {
      "uri": "_debugbar\/open",
      "methods": ["GET", "HEAD"]
    },
    "debugbar.clockwork": {
      "uri": "_debugbar\/clockwork\/{id}",
      "methods": ["GET", "HEAD"]
    },
    "debugbar.telescope": {
      "uri": "_debugbar\/telescope\/{id}",
      "methods": ["GET", "HEAD"]
    },
    "debugbar.assets.css": {
      "uri": "_debugbar\/assets\/stylesheets",
      "methods": ["GET", "HEAD"]
    },
    "debugbar.assets.js": {
      "uri": "_debugbar\/assets\/javascript",
      "methods": ["GET", "HEAD"]
    },
    "debugbar.cache.delete": {
      "uri": "_debugbar\/cache\/{key}\/{tags?}",
      "methods": ["DELETE"]
    },
    "login": {
      "uri": "login",
      "methods": ["GET", "HEAD"]
    },
    "logout": {
      "uri": "logout",
      "methods": ["POST"]
    },
    "password.request": {
      "uri": "forgot-password",
      "methods": ["GET", "HEAD"]
    },
    "password.reset": {
      "uri": "reset-password\/{token}",
      "methods": ["GET", "HEAD"]
    },
    "password.email": {
      "uri": "forgot-password",
      "methods": ["POST"]
    },
    "password.update": {
      "uri": "reset-password",
      "methods": ["POST"]
    },
    "register": {
      "uri": "register",
      "methods": ["GET", "HEAD"]
    },
    "verification.notice": {
      "uri": "email\/verify",
      "methods": ["GET", "HEAD"]
    },
    "verification.verify": {
      "uri": "email\/verify\/{id}\/{hash}",
      "methods": ["GET", "HEAD"]
    },
    "verification.send": {
      "uri": "email\/verification-notification",
      "methods": ["POST"]
    },
    "user-profile-information.update": {
      "uri": "user\/profile-information",
      "methods": ["PUT"]
    },
    "user-password.update": {
      "uri": "user\/password",
      "methods": ["PUT"]
    },
    "password.confirm": {
      "uri": "user\/confirm-password",
      "methods": ["GET", "HEAD"]
    },
    "password.confirmation": {
      "uri": "user\/confirmed-password-status",
      "methods": ["GET", "HEAD"]
    },
    "two-factor.login": {
      "uri": "two-factor-challenge",
      "methods": ["GET", "HEAD"]
    },
    "two-factor.enable": {
      "uri": "user\/two-factor-authentication",
      "methods": ["POST"]
    },
    "two-factor.disable": {
      "uri": "user\/two-factor-authentication",
      "methods": ["DELETE"]
    },
    "two-factor.qr-code": {
      "uri": "user\/two-factor-qr-code",
      "methods": ["GET", "HEAD"]
    },
    "two-factor.recovery-codes": {
      "uri": "user\/two-factor-recovery-codes",
      "methods": ["GET", "HEAD"]
    },
    "site.contact-store": {
      "uri": "api\/nous-contacter",
      "methods": ["POST"]
    },
    "abonnez-store": {
      "uri": "api\/abonnez-moi",
      "methods": ["POST"]
    },
    "profile-update-info": {
      "uri": "api\/profil\/info",
      "methods": ["PUT"]
    },
    "profile-update-pswd": {
      "uri": "api\/profil\/password",
      "methods": ["PUT"]
    },
    "profile-get-address": {
      "uri": "api\/profil\/address",
      "methods": ["GET", "HEAD"]
    },
    "profile-add-address": {
      "uri": "api\/profil\/address",
      "methods": ["POST"]
    },
    "profile-edit-address": {
      "uri": "api\/profil\/address\/{slug}",
      "methods": ["PUT"]
    },
    "profile-delete-address": {
      "uri": "api\/profil\/address\/{slug}",
      "methods": ["DELETE"]
    },
    "api.plats.index": {
      "uri": "api\/plats",
      "methods": ["GET", "HEAD"]
    },
    "api.checkout.index": {
      "uri": "api\/checkout",
      "methods": ["POST"]
    },
    "api.checkout.create-order": {
      "uri": "api\/checkout\/create-order",
      "methods": ["POST"]
    },
    "api.admin.plats.index": {
      "uri": "api\/admin\/plats",
      "methods": ["GET", "HEAD"]
    },
    "api.admin.plats.get": {
      "uri": "api\/admin\/plats\/{id}",
      "methods": ["GET", "HEAD"]
    },
    "api.admin.ingredients.index": {
      "uri": "api\/admin\/ingredients",
      "methods": ["GET", "HEAD"]
    },
    "api.admin.ingredients.store": {
      "uri": "api\/admin\/ingredients",
      "methods": ["POST"]
    },
    "api.admin.ingredients.show": {
      "uri": "api\/admin\/ingredients\/{ingredient}",
      "methods": ["GET", "HEAD"]
    },
    "api.admin.ingredients.update": {
      "uri": "api\/admin\/ingredients\/{ingredient}",
      "methods": ["PUT", "PATCH"]
    },
    "api.admin.ingredients.destroy": {
      "uri": "api\/admin\/ingredients\/{ingredient}",
      "methods": ["DELETE"]
    },
    "api.admin.ingredients.get": {
      "uri": "api\/admin\/ingredients?page={page?}",
      "methods": ["GET", "HEAD"]
    },
    "site.index": {
      "uri": "\/",
      "methods": ["GET", "HEAD"]
    },
    "site.contact": {
      "uri": "nous-contacter",
      "methods": ["GET", "HEAD"]
    },
    "site.about": {
      "uri": "a-propos-de",
      "methods": ["GET", "HEAD"]
    },
    "checkout.index": {
      "uri": "checkout",
      "methods": ["GET", "HEAD"]
    },
    "profile": {
      "uri": "profil",
      "methods": ["GET", "HEAD"]
    },
    "admin.index": {
      "uri": "admin",
      "methods": ["GET", "HEAD"]
    },
    "admin.logout": {
      "uri": "admin\/logout",
      "methods": ["POST"]
    },
    "admin.plats.index": {
      "uri": "admin\/plats",
      "methods": ["GET", "HEAD"]
    },
    "admin.plats.create": {
      "uri": "admin\/plats\/create",
      "methods": ["GET", "HEAD"]
    },
    "admin.plats.edit": {
      "uri": "admin\/plats\/edit\/{id}",
      "methods": ["GET", "HEAD"]
    },
    "admin.plats.delete": {
      "uri": "admin\/plats\/delete\/{id}",
      "methods": ["DELETE"]
    },
    "admin.plats.store": {
      "uri": "admin\/plats",
      "methods": ["POST"]
    },
    "admin.ingredients.index": {
      "uri": "admin\/ingredients",
      "methods": ["GET", "HEAD"]
    },
    "admin.ingredients.show": {
      "uri": "admin\/ingredients\/{ingredient}",
      "methods": ["GET", "HEAD"]
    },
    "admin.ingredients.edit": {
      "uri": "admin\/ingredients\/{ingredient}\/edit",
      "methods": ["GET", "HEAD"]
    },
    "admin.ingredients.update": {
      "uri": "admin\/ingredients\/{ingredient}",
      "methods": ["PUT", "PATCH"]
    },
    "admin.ingredients.destroy": {
      "uri": "admin\/ingredients\/{ingredient}",
      "methods": ["DELETE"]
    }
  }
};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}



/***/ }),

/***/ "./vendor/tightenco/ziggy/dist/index.js":
/*!**********************************************!*\
  !*** ./vendor/tightenco/ziggy/dist/index.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, n) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? module.exports = n() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (n),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function () {
  function t(t, n) {
    for (var r = 0; r < n.length; r++) {
      var e = n[r];
      e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e);
    }
  }

  function n(n, r, e) {
    return r && t(n.prototype, r), e && t(n, e), n;
  }

  function r() {
    return (r = Object.assign || function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var r = arguments[n];

        for (var e in r) {
          Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
        }
      }

      return t;
    }).apply(this, arguments);
  }

  function e(t) {
    return (e = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  function i(t, n) {
    return (i = Object.setPrototypeOf || function (t, n) {
      return t.__proto__ = n, t;
    })(t, n);
  }

  function o() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (t) {
      return !1;
    }
  }

  function u(t, n, r) {
    return (u = o() ? Reflect.construct : function (t, n, r) {
      var e = [null];
      e.push.apply(e, n);
      var o = new (Function.bind.apply(t, e))();
      return r && i(o, r.prototype), o;
    }).apply(null, arguments);
  }

  function f(t) {
    var n = "function" == typeof Map ? new Map() : void 0;
    return (f = function f(t) {
      if (null === t || -1 === Function.toString.call(t).indexOf("[native code]")) return t;
      if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");

      if (void 0 !== n) {
        if (n.has(t)) return n.get(t);
        n.set(t, r);
      }

      function r() {
        return u(t, arguments, e(this).constructor);
      }

      return r.prototype = Object.create(t.prototype, {
        constructor: {
          value: r,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), i(r, t);
    })(t);
  }

  var c = Object.prototype.hasOwnProperty,
      a = Array.isArray,
      l = function () {
    for (var t = [], n = 0; n < 256; ++n) {
      t.push("%" + ((n < 16 ? "0" : "") + n.toString(16)).toUpperCase());
    }

    return t;
  }(),
      s = function s(t, n) {
    for (var r = n && n.plainObjects ? Object.create(null) : {}, e = 0; e < t.length; ++e) {
      void 0 !== t[e] && (r[e] = t[e]);
    }

    return r;
  },
      v = {
    arrayToObject: s,
    assign: function assign(t, n) {
      return Object.keys(n).reduce(function (t, r) {
        return t[r] = n[r], t;
      }, t);
    },
    combine: function combine(t, n) {
      return [].concat(t, n);
    },
    compact: function compact(t) {
      for (var n = [{
        obj: {
          o: t
        },
        prop: "o"
      }], r = [], e = 0; e < n.length; ++e) {
        for (var i = n[e], o = i.obj[i.prop], u = Object.keys(o), f = 0; f < u.length; ++f) {
          var c = u[f],
              l = o[c];
          "object" == _typeof(l) && null !== l && -1 === r.indexOf(l) && (n.push({
            obj: o,
            prop: c
          }), r.push(l));
        }
      }

      return function (t) {
        for (; t.length > 1;) {
          var n = t.pop(),
              r = n.obj[n.prop];

          if (a(r)) {
            for (var e = [], i = 0; i < r.length; ++i) {
              void 0 !== r[i] && e.push(r[i]);
            }

            n.obj[n.prop] = e;
          }
        }
      }(n), t;
    },
    decode: function decode(t, n, r) {
      var e = t.replace(/\+/g, " ");
      if ("iso-8859-1" === r) return e.replace(/%[0-9a-f]{2}/gi, unescape);

      try {
        return decodeURIComponent(e);
      } catch (t) {
        return e;
      }
    },
    encode: function encode(t, n, r) {
      if (0 === t.length) return t;
      var e = t;
      if ("symbol" == _typeof(t) ? e = Symbol.prototype.toString.call(t) : "string" != typeof t && (e = String(t)), "iso-8859-1" === r) return escape(e).replace(/%u[0-9a-f]{4}/gi, function (t) {
        return "%26%23" + parseInt(t.slice(2), 16) + "%3B";
      });

      for (var i = "", o = 0; o < e.length; ++o) {
        var u = e.charCodeAt(o);
        45 === u || 46 === u || 95 === u || 126 === u || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 ? i += e.charAt(o) : u < 128 ? i += l[u] : u < 2048 ? i += l[192 | u >> 6] + l[128 | 63 & u] : u < 55296 || u >= 57344 ? i += l[224 | u >> 12] + l[128 | u >> 6 & 63] + l[128 | 63 & u] : (u = 65536 + ((1023 & u) << 10 | 1023 & e.charCodeAt(o += 1)), i += l[240 | u >> 18] + l[128 | u >> 12 & 63] + l[128 | u >> 6 & 63] + l[128 | 63 & u]);
      }

      return i;
    },
    isBuffer: function isBuffer(t) {
      return !(!t || "object" != _typeof(t) || !(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t)));
    },
    isRegExp: function isRegExp(t) {
      return "[object RegExp]" === Object.prototype.toString.call(t);
    },
    maybeMap: function maybeMap(t, n) {
      if (a(t)) {
        for (var r = [], e = 0; e < t.length; e += 1) {
          r.push(n(t[e]));
        }

        return r;
      }

      return n(t);
    },
    merge: function t(n, r, e) {
      if (!r) return n;

      if ("object" != _typeof(r)) {
        if (a(n)) n.push(r);else {
          if (!n || "object" != _typeof(n)) return [n, r];
          (e && (e.plainObjects || e.allowPrototypes) || !c.call(Object.prototype, r)) && (n[r] = !0);
        }
        return n;
      }

      if (!n || "object" != _typeof(n)) return [n].concat(r);
      var i = n;
      return a(n) && !a(r) && (i = s(n, e)), a(n) && a(r) ? (r.forEach(function (r, i) {
        if (c.call(n, i)) {
          var o = n[i];
          o && "object" == _typeof(o) && r && "object" == _typeof(r) ? n[i] = t(o, r, e) : n.push(r);
        } else n[i] = r;
      }), n) : Object.keys(r).reduce(function (n, i) {
        var o = r[i];
        return n[i] = c.call(n, i) ? t(n[i], o, e) : o, n;
      }, i);
    }
  },
      d = String.prototype.replace,
      p = /%20/g,
      y = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  },
      h = v.assign({
    "default": y.RFC3986,
    formatters: {
      RFC1738: function RFC1738(t) {
        return d.call(t, p, "+");
      },
      RFC3986: function RFC3986(t) {
        return String(t);
      }
    }
  }, y),
      b = Object.prototype.hasOwnProperty,
      g = {
    brackets: function brackets(t) {
      return t + "[]";
    },
    comma: "comma",
    indices: function indices(t, n) {
      return t + "[" + n + "]";
    },
    repeat: function repeat(t) {
      return t;
    }
  },
      j = Array.isArray,
      m = Array.prototype.push,
      O = function O(t, n) {
    m.apply(t, j(n) ? n : [n]);
  },
      w = Date.prototype.toISOString,
      R = h["default"],
      E = {
    addQueryPrefix: !1,
    allowDots: !1,
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encoder: v.encode,
    encodeValuesOnly: !1,
    format: R,
    formatter: h.formatters[R],
    indices: !1,
    serializeDate: function serializeDate(t) {
      return w.call(t);
    },
    skipNulls: !1,
    strictNullHandling: !1
  },
      k = function t(n, r, e, i, o, u, f, c, a, l, s, d, p) {
    var y,
        h = n;

    if ("function" == typeof f ? h = f(r, h) : h instanceof Date ? h = l(h) : "comma" === e && j(h) && (h = v.maybeMap(h, function (t) {
      return t instanceof Date ? l(t) : t;
    }).join(",")), null === h) {
      if (i) return u && !d ? u(r, E.encoder, p, "key") : r;
      h = "";
    }

    if ("string" == typeof (y = h) || "number" == typeof y || "boolean" == typeof y || "symbol" == _typeof(y) || "bigint" == typeof y || v.isBuffer(h)) return u ? [s(d ? r : u(r, E.encoder, p, "key")) + "=" + s(u(h, E.encoder, p, "value"))] : [s(r) + "=" + s(String(h))];
    var b,
        g = [];
    if (void 0 === h) return g;
    if (j(f)) b = f;else {
      var m = Object.keys(h);
      b = c ? m.sort(c) : m;
    }

    for (var w = 0; w < b.length; ++w) {
      var R = b[w],
          k = h[R];

      if (!o || null !== k) {
        var S = j(h) ? "function" == typeof e ? e(r, R) : r : r + (a ? "." + R : "[" + R + "]");
        O(g, t(k, S, e, i, o, u, f, c, a, l, s, d, p));
      }
    }

    return g;
  },
      S = Object.prototype.hasOwnProperty,
      x = Array.isArray,
      C = {
    allowDots: !1,
    allowPrototypes: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decoder: v.decode,
    delimiter: "&",
    depth: 5,
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictNullHandling: !1
  },
      D = function D(t) {
    return t.replace(/&#(\d+);/g, function (t, n) {
      return String.fromCharCode(parseInt(n, 10));
    });
  },
      N = function N(t, n) {
    return t && "string" == typeof t && n.comma && t.indexOf(",") > -1 ? t.split(",") : t;
  },
      T = function T(t, n, r, e) {
    if (t) {
      var i = r.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
          o = /(\[[^[\]]*])/g,
          u = r.depth > 0 && /(\[[^[\]]*])/.exec(i),
          f = u ? i.slice(0, u.index) : i,
          c = [];

      if (f) {
        if (!r.plainObjects && S.call(Object.prototype, f) && !r.allowPrototypes) return;
        c.push(f);
      }

      for (var a = 0; r.depth > 0 && null !== (u = o.exec(i)) && a < r.depth;) {
        if (a += 1, !r.plainObjects && S.call(Object.prototype, u[1].slice(1, -1)) && !r.allowPrototypes) return;
        c.push(u[1]);
      }

      return u && c.push("[" + i.slice(u.index) + "]"), function (t, n, r, e) {
        for (var i = e ? n : N(n, r), o = t.length - 1; o >= 0; --o) {
          var u,
              f = t[o];
          if ("[]" === f && r.parseArrays) u = [].concat(i);else {
            u = r.plainObjects ? Object.create(null) : {};
            var c = "[" === f.charAt(0) && "]" === f.charAt(f.length - 1) ? f.slice(1, -1) : f,
                a = parseInt(c, 10);
            r.parseArrays || "" !== c ? !isNaN(a) && f !== c && String(a) === c && a >= 0 && r.parseArrays && a <= r.arrayLimit ? (u = [])[a] = i : u[c] = i : u = {
              0: i
            };
          }
          i = u;
        }

        return i;
      }(c, n, r, e);
    }
  },
      F = function () {
    function t(t, n, r) {
      var e;
      this.name = t, this.definition = n, this.bindings = null != (e = n.bindings) ? e : {}, this.config = r;
    }

    var r = t.prototype;
    return r.matchesUrl = function (t) {
      if (!this.definition.methods.includes("GET")) return !1;
      var n = this.template.replace(/\/{[^}?]*\?}/g, "(/[^/?]+)?").replace(/{[^}]+}/g, "[^/?]+").replace(/^\w+:\/\//, "");
      return new RegExp("^" + n + "$").test(t.replace(/\/+$/, "").split("?").shift());
    }, r.compile = function (t) {
      var n = this;
      return this.parameterSegments.length ? this.template.replace(/{([^}?]+)\??}/g, function (r, e) {
        var i;
        if ([null, void 0].includes(t[e]) && n.parameterSegments.find(function (t) {
          return t.name === e;
        }).required) throw new Error("Ziggy error: '" + e + "' parameter is required for route '" + n.name + "'.");
        return encodeURIComponent(null != (i = t[e]) ? i : "");
      }).replace(/\/+$/, "") : this.template;
    }, n(t, [{
      key: "template",
      get: function get() {
        return ((this.config.absolute ? this.definition.domain ? "" + this.config.url.match(/^\w+:\/\//)[0] + this.definition.domain + (this.config.port ? ":" + this.config.port : "") : this.config.url : "") + "/" + this.definition.uri).replace(/\/+$/, "");
      }
    }, {
      key: "parameterSegments",
      get: function get() {
        var t, n;
        return null != (t = null === (n = this.template.match(/{[^}?]+\??}/g)) || void 0 === n ? void 0 : n.map(function (t) {
          return {
            name: t.replace(/{|\??}/g, ""),
            required: !/\?}$/.test(t)
          };
        })) ? t : [];
      }
    }]), t;
  }(),
      $ = function (t) {
    var e, i;

    function o(n, e, i, o) {
      var u, f;

      if (void 0 === i && (i = !0), (f = t.call(this) || this).t = null != (u = null != o ? o : Ziggy) ? u : null === globalThis || void 0 === globalThis ? void 0 : globalThis.Ziggy, f.t = r({}, f.t, {
        absolute: i
      }), n) {
        if (!f.t.routes[n]) throw new Error("Ziggy error: route '" + n + "' is not in the route list.");
        f.i = new F(n, f.t.routes[n], f.t), f.u = f.l(e);
      }

      return f;
    }

    i = t, (e = o).prototype = Object.create(i.prototype), e.prototype.constructor = e, e.__proto__ = i;
    var u = o.prototype;
    return u.toString = function () {
      var t = this,
          n = Object.keys(this.u).filter(function (n) {
        return !t.i.parameterSegments.some(function (t) {
          return t.name === n;
        });
      }).filter(function (t) {
        return "_query" !== t;
      }).reduce(function (n, e) {
        var i;
        return r({}, n, ((i = {})[e] = t.u[e], i));
      }, {});
      return this.i.compile(this.u) + function (t, n) {
        var r,
            e = t,
            i = function (t) {
          if (!t) return E;
          if (null != t.encoder && "function" != typeof t.encoder) throw new TypeError("Encoder has to be a function.");
          var n = t.charset || E.charset;
          if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
          var r = h["default"];

          if (void 0 !== t.format) {
            if (!b.call(h.formatters, t.format)) throw new TypeError("Unknown format option provided.");
            r = t.format;
          }

          var e = h.formatters[r],
              i = E.filter;
          return ("function" == typeof t.filter || j(t.filter)) && (i = t.filter), {
            addQueryPrefix: "boolean" == typeof t.addQueryPrefix ? t.addQueryPrefix : E.addQueryPrefix,
            allowDots: void 0 === t.allowDots ? E.allowDots : !!t.allowDots,
            charset: n,
            charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : E.charsetSentinel,
            delimiter: void 0 === t.delimiter ? E.delimiter : t.delimiter,
            encode: "boolean" == typeof t.encode ? t.encode : E.encode,
            encoder: "function" == typeof t.encoder ? t.encoder : E.encoder,
            encodeValuesOnly: "boolean" == typeof t.encodeValuesOnly ? t.encodeValuesOnly : E.encodeValuesOnly,
            filter: i,
            formatter: e,
            serializeDate: "function" == typeof t.serializeDate ? t.serializeDate : E.serializeDate,
            skipNulls: "boolean" == typeof t.skipNulls ? t.skipNulls : E.skipNulls,
            sort: "function" == typeof t.sort ? t.sort : null,
            strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : E.strictNullHandling
          };
        }(n);

        "function" == typeof i.filter ? e = (0, i.filter)("", e) : j(i.filter) && (r = i.filter);
        var o = [];
        if ("object" != _typeof(e) || null === e) return "";
        var u = g[n && n.arrayFormat in g ? n.arrayFormat : n && "indices" in n ? n.indices ? "indices" : "repeat" : "indices"];
        r || (r = Object.keys(e)), i.sort && r.sort(i.sort);

        for (var f = 0; f < r.length; ++f) {
          var c = r[f];
          i.skipNulls && null === e[c] || O(o, k(e[c], c, u, i.strictNullHandling, i.skipNulls, i.encode ? i.encoder : null, i.filter, i.sort, i.allowDots, i.serializeDate, i.formatter, i.encodeValuesOnly, i.charset));
        }

        var a = o.join(i.delimiter),
            l = !0 === i.addQueryPrefix ? "?" : "";
        return i.charsetSentinel && (l += "iso-8859-1" === i.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), a.length > 0 ? l + a : "";
      }(r({}, n, this.u._query), {
        addQueryPrefix: !0,
        arrayFormat: "indices",
        encodeValuesOnly: !0,
        skipNulls: !0,
        encoder: function encoder(t, n) {
          return "boolean" == typeof t ? Number(t) : n(t);
        }
      });
    }, u.current = function (t, n) {
      var r = this,
          e = this.t.absolute ? this.s().host + this.s().pathname : this.s().pathname.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/"),
          i = Object.entries(this.t.routes).find(function (n) {
        return new F(t, n[1], r.t).matchesUrl(e);
      }) || [void 0, void 0],
          o = i[0],
          u = i[1];
      if (!t) return o;
      var f = new RegExp("^" + t.replace(".", "\\.").replace("*", ".*") + "$").test(o);
      if ([null, void 0].includes(n) || !f) return f;
      var c = new F(o, u, this.t);
      n = this.l(n, c);
      var a = this.v(u);
      return !(!Object.values(n).every(function (t) {
        return !t;
      }) || Object.values(a).length) || Object.entries(n).every(function (t) {
        return a[t[0]] == t[1];
      });
    }, u.s = function () {
      var t,
          n,
          r,
          e,
          i,
          o,
          u = "undefined" != typeof window ? window.location : {},
          f = u.host,
          c = u.pathname,
          a = u.search;
      return {
        host: null != (t = null === (n = this.t.location) || void 0 === n ? void 0 : n.host) ? t : void 0 === f ? "" : f,
        pathname: null != (r = null === (e = this.t.location) || void 0 === e ? void 0 : e.pathname) ? r : void 0 === c ? "" : c,
        search: null != (i = null === (o = this.t.location) || void 0 === o ? void 0 : o.search) ? i : void 0 === a ? "" : a
      };
    }, u.has = function (t) {
      return Object.keys(this.t.routes).includes(t);
    }, u.l = function (t, n) {
      var e = this;
      void 0 === t && (t = {}), void 0 === n && (n = this.i), t = ["string", "number"].includes(_typeof(t)) ? [t] : t;
      var i = n.parameterSegments.filter(function (t) {
        return !e.t.defaults[t.name];
      });
      if (Array.isArray(t)) t = t.reduce(function (t, n, e) {
        var o, u;
        return r({}, t, i[e] ? ((o = {})[i[e].name] = n, o) : ((u = {})[n] = "", u));
      }, {});else if (1 === i.length && !t[i[0].name] && (t.hasOwnProperty(Object.values(n.bindings)[0]) || t.hasOwnProperty("id"))) {
        var o;
        (o = {})[i[0].name] = t, t = o;
      }
      return r({}, this.p(n), this.h(t, n.bindings));
    }, u.p = function (t) {
      var n = this;
      return t.parameterSegments.filter(function (t) {
        return n.t.defaults[t.name];
      }).reduce(function (t, e, i) {
        var o,
            u = e.name;
        return r({}, t, ((o = {})[u] = n.t.defaults[u], o));
      }, {});
    }, u.h = function (t, n) {
      return void 0 === n && (n = {}), Object.entries(t).reduce(function (t, e) {
        var i,
            o,
            u = e[0],
            f = e[1];
        if (!f || "object" != _typeof(f) || Array.isArray(f) || "_query" === u) return r({}, t, ((o = {})[u] = f, o));

        if (!f.hasOwnProperty(n[u])) {
          if (!f.hasOwnProperty("id")) throw new Error("Ziggy error: object passed as '" + u + "' parameter is missing route model binding key '" + n[u] + "'.");
          n[u] = "id";
        }

        return r({}, t, ((i = {})[u] = f[n[u]], i));
      }, {});
    }, u.v = function (t) {
      var n,
          e = this.s().pathname.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, ""),
          i = function i(t, n, e) {
        void 0 === n && (n = "");
        var i = [t, n].map(function (t) {
          return t.split(e);
        }),
            o = i[0];
        return i[1].reduce(function (t, n, e) {
          var i;
          return /^{[^}?]+\??}$/.test(n) && o[e] ? r({}, t, ((i = {})[n.replace(/^{|\??}$/g, "")] = o[e], i)) : t;
        }, {});
      };

      return r({}, i(this.s().host, t.domain, "."), i(e, t.uri, "/"), function (t, n) {
        var r = C;
        if ("" === t || null == t) return r.plainObjects ? Object.create(null) : {};

        for (var e = "string" == typeof t ? function (t, n) {
          var r,
              e = {},
              i = (n.ignoreQueryPrefix ? t.replace(/^\?/, "") : t).split(n.delimiter, Infinity === n.parameterLimit ? void 0 : n.parameterLimit),
              o = -1,
              u = n.charset;
          if (n.charsetSentinel) for (r = 0; r < i.length; ++r) {
            0 === i[r].indexOf("utf8=") && ("utf8=%E2%9C%93" === i[r] ? u = "utf-8" : "utf8=%26%2310003%3B" === i[r] && (u = "iso-8859-1"), o = r, r = i.length);
          }

          for (r = 0; r < i.length; ++r) {
            if (r !== o) {
              var f,
                  c,
                  a = i[r],
                  l = a.indexOf("]="),
                  s = -1 === l ? a.indexOf("=") : l + 1;
              -1 === s ? (f = n.decoder(a, C.decoder, u, "key"), c = n.strictNullHandling ? null : "") : (f = n.decoder(a.slice(0, s), C.decoder, u, "key"), c = v.maybeMap(N(a.slice(s + 1), n), function (t) {
                return n.decoder(t, C.decoder, u, "value");
              })), c && n.interpretNumericEntities && "iso-8859-1" === u && (c = D(c)), a.indexOf("[]=") > -1 && (c = x(c) ? [c] : c), e[f] = S.call(e, f) ? v.combine(e[f], c) : c;
            }
          }

          return e;
        }(t, r) : t, i = r.plainObjects ? Object.create(null) : {}, o = Object.keys(e), u = 0; u < o.length; ++u) {
          var f = o[u],
              c = T(f, e[f], r, "string" == typeof t);
          i = v.merge(i, c, r);
        }

        return v.compact(i);
      }(null === (n = this.s().search) || void 0 === n ? void 0 : n.replace(/^\?/, "")));
    }, u.valueOf = function () {
      return this.toString();
    }, u.check = function (t) {
      return this.has(t);
    }, n(o, [{
      key: "params",
      get: function get() {
        return this.v(this.t.routes[this.current()]);
      }
    }]), o;
  }(f(String));

  return function (t, n, r, e) {
    var i = new $(t, n, r, e);
    return t ? i.toString() : i;
  };
});

/***/ }),

/***/ "./node_modules/goober/dist/goober.modern.js":
/*!***************************************************!*\
  !*** ./node_modules/goober/dist/goober.modern.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "css": () => (/* binding */ p),
/* harmony export */   "extractCss": () => (/* binding */ r),
/* harmony export */   "glob": () => (/* binding */ g),
/* harmony export */   "keyframes": () => (/* binding */ b),
/* harmony export */   "setup": () => (/* binding */ h),
/* harmony export */   "styled": () => (/* binding */ j)
/* harmony export */ });
let e={data:""},t=t=>"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||e,r=e=>{let r=t(e),l=r.data;return r.data="",l},l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/g,a=/\/\*[^]*?\*\/|\s\s+|\n/g,o=(e,t)=>{let r,l="",a="",n="";for(let c in e){let s=e[c];"object"==typeof s?(r=t?t.replace(/([^,])+/g,e=>c.replace(/([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):c,a+="@"==c[0]?"f"==c[1]?o(s,c):c+"{"+o(s,"k"==c[1]?"":t)+"}":o(s,r)):"@"==c[0]&&"i"==c[1]?l=c+" "+s+";":(c=c.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=o.p?o.p(c,s):c+":"+s+";")}return n[0]?(r=t?t+"{"+n+"}":n,l+r+a):l+a},n={},c=e=>{let t="";for(let r in e)t+=r+("object"==typeof e[r]?c(e[r]):e[r]);return t},s=(e,t,r,s,i)=>{let p="object"==typeof e?c(e):e,u=n[p]||(n[p]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(p));if(!n[u]){let t="object"==typeof e?e:(e=>{let t,r=[{}];for(;t=l.exec(e.replace(a,""));)t[4]&&r.shift(),t[3]?r.unshift(r[0][t[3]]=r[0][t[3]]||{}):t[4]||(r[0][t[1]]=t[2]);return r[0]})(e);n[u]=o(i?{["@keyframes "+u]:t}:t,r?"":"."+u)}return((e,t,r)=>{-1==t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(n[u],t,s),u},i=(e,t,r)=>e.reduce((e,l,a)=>{let n=t[a];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":o(e,""):e}return e+l+(null==n?"":n)},"");function p(e){let r=this||{},l=e.call?e(r.p):e;return s(l.unshift?l.raw?i(l,[].slice.call(arguments,1),r.p):l.reduce((e,t)=>t?Object.assign(e,t.call?t(r.p):t):e,{}):l,t(r.target),r.g,r.o,r.k)}let u,f,d,g=p.bind({g:1}),b=p.bind({k:1});function h(e,t,r,l){o.p=t,u=e,f=r,d=l}function j(e,t){let r=this||{};return function(){let l=arguments;function a(o,n){let c=Object.assign({},o),s=c.className||a.className;r.p=Object.assign({theme:f&&f()},c),r.o=/ *go\d+/.test(s),c.className=p.apply(r,l)+(s?" "+s:""),t&&(c.ref=n);let i=c.as||e;return d&&i[0]&&d(c),u(i,c)}return t?t(a):a}}


/***/ }),

/***/ "./node_modules/preact-custom-element/dist/preact-custom-element.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/preact-custom-element/dist/preact-custom-element.esm.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function i(t){this.getChildContext=function(){return t.context};var e=t.children,n=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)e.indexOf(n=i[o])>=0||(r[n]=t[n]);return r}(t,["context","children"]);return (0,preact__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(e,n)}function a(){var o=new CustomEvent("_preact",{detail:{},bubbles:!0,cancelable:!0});this.dispatchEvent(o),this._vdom=(0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(i,r({},this._props,{context:o.detail.context}),function e(n,o){if(3===n.nodeType)return n.data;if(1!==n.nodeType)return null;var r=[],i={},a=0,c=n.attributes,l=n.childNodes;for(a=c.length;a--;)"slot"!==c[a].name&&(i[c[a].name]=c[a].value,i[s(c[a].name)]=c[a].value);for(a=l.length;a--;){var p=e(l[a],null),d=l[a].slot;d?i[d]=(0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(u,{name:d},p):r[a]=p}var h=o?(0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(u,null,r):r;return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(o||n.nodeName.toLowerCase(),i,h)}(this,this._vdomComponent)),(this.hasAttribute("hydrate")?preact__WEBPACK_IMPORTED_MODULE_0__.hydrate:preact__WEBPACK_IMPORTED_MODULE_0__.render)(this._vdom,this._root)}function s(t){return t.replace(/-(\w)/g,function(t,e){return e?e.toUpperCase():""})}function c(t,e,r){if(this._vdom){var i={};i[t]=r=null==r?void 0:r,i[s(t)]=r,this._vdom=(0,preact__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(this._vdom,i),(0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(this._vdom,this._root)}}function l(){(0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(this._vdom=null,this._root)}function u(e,n){var o=this;return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("slot",r({},e,{ref:function(t){t?(o.ref=t,o._listener||(o._listener=function(t){t.stopPropagation(),t.detail.context=n},t.addEventListener("_preact",o._listener))):o.ref.removeEventListener("_preact",o._listener)}}))}/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(t,e,n,o){function r(){var e=Reflect.construct(HTMLElement,[],r);return e._vdomComponent=t,e._root=o&&o.shadow?e.attachShadow({mode:"open"}):e,e}return(r.prototype=Object.create(HTMLElement.prototype)).constructor=r,r.prototype.connectedCallback=a,r.prototype.attributeChangedCallback=c,r.prototype.disconnectedCallback=l,n=n||t.observedAttributes||Object.keys(t.propTypes||{}),r.observedAttributes=n,n.forEach(function(t){Object.defineProperty(r.prototype,t,{get:function(){return this._vdom.props[t]},set:function(e){this._vdom?this.attributeChangedCallback(t,null,e):(this._props||(this._props={}),this._props[t]=e,this.connectedCallback());var n=typeof e;null!=e&&"string"!==n&&"boolean"!==n&&"number"!==n||this.setAttribute(t,e)}})}),customElements.define(e||t.tagName||t.displayName||t.name,r)}
//# sourceMappingURL=preact-custom-element.esm.js.map


/***/ }),

/***/ "./node_modules/preact/compat/dist/compat.module.js":
/*!**********************************************************!*\
  !*** ./node_modules/preact/compat/dist/compat.module.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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


/***/ }),

/***/ "./node_modules/react-hot-toast/dist/react-hot-toast.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-hot-toast/dist/react-hot-toast.esm.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "CheckmarkIcon": () => (/* binding */ CheckmarkIcon),
/* harmony export */   "ErrorIcon": () => (/* binding */ ErrorIcon),
/* harmony export */   "LoaderIcon": () => (/* binding */ LoaderIcon),
/* harmony export */   "ToastBar": () => (/* binding */ ToastBar),
/* harmony export */   "ToastIcon": () => (/* binding */ ToastIcon),
/* harmony export */   "Toaster": () => (/* binding */ Toaster),
/* harmony export */   "resolveValue": () => (/* binding */ resolveValue),
/* harmony export */   "toast": () => (/* binding */ toast),
/* harmony export */   "useToaster": () => (/* binding */ useToaster),
/* harmony export */   "useToasterStore": () => (/* binding */ useStore)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var goober__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! goober */ "./node_modules/goober/dist/goober.modern.js");



function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var isFunction = function isFunction(valOrFunction) {
  return typeof valOrFunction === 'function';
};

var resolveValue = function resolveValue(valOrFunction, arg) {
  return isFunction(valOrFunction) ? valOrFunction(arg) : valOrFunction;
};

var genId = /*#__PURE__*/function () {
  var count = 0;
  return function () {
    return (++count).toString();
  };
}();
var createRectRef = function createRectRef(onRect) {
  return function (el) {
    if (el) {
      setTimeout(function () {
        var boundingRect = el.getBoundingClientRect();
        onRect(boundingRect);
      });
    }
  };
};
var prefersReducedMotion = /*#__PURE__*/function () {
  // Cache result
  var shouldReduceMotion = undefined;
  return function () {
    if (shouldReduceMotion === undefined) {
      var mediaQuery = matchMedia('(prefers-reduced-motion: reduce)');
      shouldReduceMotion = !mediaQuery || mediaQuery.matches;
    }

    return shouldReduceMotion;
  };
}();

var TOAST_LIMIT = 20;
var ActionType;

(function (ActionType) {
  ActionType[ActionType["ADD_TOAST"] = 0] = "ADD_TOAST";
  ActionType[ActionType["UPDATE_TOAST"] = 1] = "UPDATE_TOAST";
  ActionType[ActionType["UPSERT_TOAST"] = 2] = "UPSERT_TOAST";
  ActionType[ActionType["DISMISS_TOAST"] = 3] = "DISMISS_TOAST";
  ActionType[ActionType["REMOVE_TOAST"] = 4] = "REMOVE_TOAST";
  ActionType[ActionType["START_PAUSE"] = 5] = "START_PAUSE";
  ActionType[ActionType["END_PAUSE"] = 6] = "END_PAUSE";
})(ActionType || (ActionType = {}));

var toastTimeouts = /*#__PURE__*/new Map();

var addToRemoveQueue = function addToRemoveQueue(toastId) {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  var timeout = setTimeout(function () {
    toastTimeouts["delete"](toastId);
    dispatch({
      type: ActionType.REMOVE_TOAST,
      toastId: toastId
    });
  }, 1000);
  toastTimeouts.set(toastId, timeout);
};

var clearFromRemoveQueue = function clearFromRemoveQueue(toastId) {
  var timeout = toastTimeouts.get(toastId);

  if (timeout) {
    clearTimeout(timeout);
  }
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case ActionType.ADD_TOAST:
      return _extends({}, state, {
        toasts: [action.toast].concat(state.toasts).slice(0, TOAST_LIMIT)
      });

    case ActionType.UPDATE_TOAST:
      //  ! Side effects !
      if (action.toast.id) {
        clearFromRemoveQueue(action.toast.id);
      }

      return _extends({}, state, {
        toasts: state.toasts.map(function (t) {
          return t.id === action.toast.id ? _extends({}, t, action.toast) : t;
        })
      });

    case ActionType.UPSERT_TOAST:
      var toast = action.toast;
      return state.toasts.find(function (t) {
        return t.id === toast.id;
      }) ? reducer(state, {
        type: ActionType.UPDATE_TOAST,
        toast: toast
      }) : reducer(state, {
        type: ActionType.ADD_TOAST,
        toast: toast
      });

    case ActionType.DISMISS_TOAST:
      var toastId = action.toastId; // ! Side effects ! - This could be execrated into a dismissToast() action, but I'll keep it here for simplicity

      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach(function (toast) {
          addToRemoveQueue(toast.id);
        });
      }

      return _extends({}, state, {
        toasts: state.toasts.map(function (t) {
          return t.id === toastId || toastId === undefined ? _extends({}, t, {
            visible: false
          }) : t;
        })
      });

    case ActionType.REMOVE_TOAST:
      if (action.toastId === undefined) {
        return _extends({}, state, {
          toasts: []
        });
      }

      return _extends({}, state, {
        toasts: state.toasts.filter(function (t) {
          return t.id !== action.toastId;
        })
      });

    case ActionType.START_PAUSE:
      return _extends({}, state, {
        pausedAt: action.time
      });

    case ActionType.END_PAUSE:
      var diff = action.time - (state.pausedAt || 0);
      return _extends({}, state, {
        pausedAt: undefined,
        toasts: state.toasts.map(function (t) {
          return _extends({}, t, {
            pauseDuration: t.pauseDuration + diff
          });
        })
      });
  }
};
var listeners = [];
var memoryState = {
  toasts: [],
  pausedAt: undefined
};
var dispatch = function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach(function (listener) {
    listener(memoryState);
  });
};
var defaultTimeouts = {
  blank: 4000,
  error: 4000,
  success: 2000,
  loading: Infinity,
  custom: 4000
};
var useStore = function useStore(toastOptions) {
  if (toastOptions === void 0) {
    toastOptions = {};
  }

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(memoryState),
      state = _useState[0],
      setState = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    listeners.push(setState);
    return function () {
      var index = listeners.indexOf(setState);

      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  var mergedToasts = state.toasts.map(function (t) {
    var _toastOptions$t$type, _toastOptions, _toastOptions$t$type2;

    return _extends({}, toastOptions, toastOptions[t.type], t, {
      duration: t.duration || ((_toastOptions$t$type = toastOptions[t.type]) == null ? void 0 : _toastOptions$t$type.duration) || ((_toastOptions = toastOptions) == null ? void 0 : _toastOptions.duration) || defaultTimeouts[t.type],
      style: _extends({}, toastOptions.style, (_toastOptions$t$type2 = toastOptions[t.type]) == null ? void 0 : _toastOptions$t$type2.style, t.style)
    });
  });
  return _extends({}, state, {
    toasts: mergedToasts
  });
};

var createToast = function createToast(message, type, opts) {
  if (type === void 0) {
    type = 'blank';
  }

  return _extends({
    createdAt: Date.now(),
    visible: true,
    type: type,
    ariaProps: {
      role: 'status',
      'aria-live': 'polite'
    },
    message: message,
    pauseDuration: 0
  }, opts, {
    id: (opts == null ? void 0 : opts.id) || genId()
  });
};

var createHandler = function createHandler(type) {
  return function (message, options) {
    var toast = createToast(message, type, options);
    dispatch({
      type: ActionType.UPSERT_TOAST,
      toast: toast
    });
    return toast.id;
  };
};

var toast = function toast(message, opts) {
  return createHandler('blank')(message, opts);
};

toast.error = /*#__PURE__*/createHandler('error');
toast.success = /*#__PURE__*/createHandler('success');
toast.loading = /*#__PURE__*/createHandler('loading');
toast.custom = /*#__PURE__*/createHandler('custom');

toast.dismiss = function (toastId) {
  dispatch({
    type: ActionType.DISMISS_TOAST,
    toastId: toastId
  });
};

toast.remove = function (toastId) {
  return dispatch({
    type: ActionType.REMOVE_TOAST,
    toastId: toastId
  });
};

toast.promise = function (promise, msgs, opts) {
  var id = toast.loading(msgs.loading, _extends({}, opts, opts == null ? void 0 : opts.loading));
  promise.then(function (p) {
    toast.success(resolveValue(msgs.success, p), _extends({
      id: id
    }, opts, opts == null ? void 0 : opts.success));
    return p;
  })["catch"](function (e) {
    toast.error(resolveValue(msgs.error, e), _extends({
      id: id
    }, opts, opts == null ? void 0 : opts.error));
  });
  return promise;
};

var useToaster = function useToaster(toastOptions) {
  var _useStore = useStore(toastOptions),
      toasts = _useStore.toasts,
      pausedAt = _useStore.pausedAt;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (pausedAt) {
      return;
    }

    var now = Date.now();
    var timeouts = toasts.map(function (t) {
      if (t.duration === Infinity) {
        return;
      }

      var durationLeft = (t.duration || 0) + t.pauseDuration - (now - t.createdAt);

      if (durationLeft < 0) {
        if (t.visible) {
          toast.dismiss(t.id);
        }

        return;
      }

      return setTimeout(function () {
        return toast.dismiss(t.id);
      }, durationLeft);
    });
    return function () {
      timeouts.forEach(function (timeout) {
        return timeout && clearTimeout(timeout);
      });
    };
  }, [toasts, pausedAt]);
  var handlers = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      startPause: function startPause() {
        dispatch({
          type: ActionType.START_PAUSE,
          time: Date.now()
        });
      },
      endPause: function endPause() {
        if (pausedAt) {
          dispatch({
            type: ActionType.END_PAUSE,
            time: Date.now()
          });
        }
      },
      updateHeight: function updateHeight(toastId, height) {
        return dispatch({
          type: ActionType.UPDATE_TOAST,
          toast: {
            id: toastId,
            height: height
          }
        });
      },
      calculateOffset: function calculateOffset(toast, opts) {
        var _relevantToasts$filte;

        var _ref = opts || {},
            _ref$reverseOrder = _ref.reverseOrder,
            reverseOrder = _ref$reverseOrder === void 0 ? false : _ref$reverseOrder,
            _ref$gutter = _ref.gutter,
            gutter = _ref$gutter === void 0 ? 8 : _ref$gutter,
            defaultPosition = _ref.defaultPosition;

        var relevantToasts = toasts.filter(function (t) {
          return (t.position || defaultPosition) === (toast.position || defaultPosition) && t.height;
        });
        var toastIndex = relevantToasts.findIndex(function (t) {
          return t.id === toast.id;
        });
        var toastsBefore = relevantToasts.filter(function (toast, i) {
          return i < toastIndex && toast.visible;
        }).length;

        var offset = (_relevantToasts$filte = relevantToasts.filter(function (t) {
          return t.visible;
        })).slice.apply(_relevantToasts$filte, reverseOrder ? [toastsBefore + 1] : [0, toastsBefore]).reduce(function (acc, t) {
          return acc + (t.height || 0) + gutter;
        }, 0);

        return offset;
      }
    };
  }, [toasts, pausedAt]);
  return {
    toasts: toasts,
    handlers: handlers
  };
};

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ", ";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: ", " 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: ", " 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ", ";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: ", " 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var circleAnimation = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)( /*#__PURE__*/_templateObject());
var firstLineAnimation = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)( /*#__PURE__*/_templateObject2());
var secondLineAnimation = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)( /*#__PURE__*/_templateObject3());
var ErrorIcon = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div')( /*#__PURE__*/_templateObject4(), function (p) {
  return p.primary || '#ff4b4b';
}, circleAnimation, firstLineAnimation, function (p) {
  return p.secondary || '#fff';
}, secondLineAnimation);

function _templateObject2$1() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ", ";\n  border-right-color: ", ";\n  animation: ", " 1s linear infinite;\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var rotate = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)( /*#__PURE__*/_templateObject$1());
var LoaderIcon = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div')( /*#__PURE__*/_templateObject2$1(), function (p) {
  return p.secondary || '#e0e0e0';
}, function (p) {
  return p.primary || '#616161';
}, rotate);

function _templateObject3$1() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ", ";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: ", " 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: ", " 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ", ";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteralLoose(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var circleAnimation$1 = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)( /*#__PURE__*/_templateObject$2());
var checkmarkAnimation = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)( /*#__PURE__*/_templateObject2$2());
var CheckmarkIcon = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div')( /*#__PURE__*/_templateObject3$1(), function (p) {
  return p.primary || '#61d345';
}, circleAnimation$1, checkmarkAnimation, function (p) {
  return p.secondary || '#fff';
});

function _templateObject4$1() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: ", " 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteralLoose(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var StatusWrapper = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div')( /*#__PURE__*/_templateObject$3());
var IndicatorWrapper = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div')( /*#__PURE__*/_templateObject2$3());
var enter = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)( /*#__PURE__*/_templateObject3$2());
var AnimatedIconWrapper = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div')( /*#__PURE__*/_templateObject4$1(), enter);
var ToastIcon = function ToastIcon(_ref) {
  var toast = _ref.toast;
  var icon = toast.icon,
      type = toast.type,
      iconTheme = toast.iconTheme;

  if (icon !== undefined) {
    if (typeof icon === 'string') {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AnimatedIconWrapper, null, icon);
    } else {
      return icon;
    }
  }

  if (type === 'blank') {
    return null;
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(IndicatorWrapper, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(LoaderIcon, Object.assign({}, iconTheme)), type !== 'loading' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StatusWrapper, null, type === 'error' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ErrorIcon, Object.assign({}, iconTheme)) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckmarkIcon, Object.assign({}, iconTheme))));
};

function _templateObject2$4() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}

var enterAnimation = function enterAnimation(factor) {
  return "\n0% {transform: translate3d(0," + factor * -200 + "%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n";
};

var exitAnimation = function exitAnimation(factor) {
  return "\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0," + factor * -150 + "%,-1px) scale(.6); opacity:0;}\n";
};

var fadeInAnimation = "0%{opacity:0;} 100%{opacity:1;}";
var fadeOutAnimation = "0%{opacity:1;} 100%{opacity:0;}";
var ToastBarBase = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div', react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)( /*#__PURE__*/_templateObject$4());
var Message = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div')( /*#__PURE__*/_templateObject2$4());

var getAnimationStyle = function getAnimationStyle(position, visible) {
  var top = position.includes('top');
  var factor = top ? 1 : -1;

  var _ref = prefersReducedMotion() ? [fadeInAnimation, fadeOutAnimation] : [enterAnimation(factor), exitAnimation(factor)],
      enter = _ref[0],
      exit = _ref[1];

  return {
    animation: visible ? (0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)(enter) + " 0.35s cubic-bezier(.21,1.02,.73,1) forwards" : (0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)(exit) + " 0.4s forwards cubic-bezier(.06,.71,.55,1)"
  };
};

var ToastBar = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function (_ref2) {
  var toast = _ref2.toast,
      position = _ref2.position,
      style = _ref2.style,
      children = _ref2.children;
  var animationStyle = toast != null && toast.height ? getAnimationStyle(toast.position || position || 'top-center', toast.visible) : {
    opacity: 0
  };
  var icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToastIcon, {
    toast: toast
  });
  var message = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Message, Object.assign({}, toast.ariaProps), resolveValue(toast.message, toast));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToastBarBase, {
    className: toast.className,
    style: _extends({}, animationStyle, style, toast.style)
  }, typeof children === 'function' ? children({
    icon: icon,
    message: message
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, icon, message));
});

function _templateObject$5() {
  var data = _taggedTemplateLiteralLoose(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
(0,goober__WEBPACK_IMPORTED_MODULE_1__.setup)(react__WEBPACK_IMPORTED_MODULE_0__.createElement);

var getPositionStyle = function getPositionStyle(position, offset) {
  var top = position.includes('top');
  var verticalStyle = top ? {
    top: 0
  } : {
    bottom: 0
  };
  var horizontalStyle = position.includes('center') ? {
    justifyContent: 'center'
  } : position.includes('right') ? {
    justifyContent: 'flex-end'
  } : {};
  return _extends({
    left: 0,
    right: 0,
    display: 'flex',
    position: 'absolute',
    transition: prefersReducedMotion() ? undefined : "all 230ms cubic-bezier(.21,1.02,.73,1)",
    transform: "translateY(" + offset * (top ? 1 : -1) + "px)"
  }, verticalStyle, horizontalStyle);
};

var activeClass = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.css)( /*#__PURE__*/_templateObject$5());
var DEFAULT_OFFSET = 16;
var Toaster = function Toaster(_ref) {
  var reverseOrder = _ref.reverseOrder,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'top-center' : _ref$position,
      toastOptions = _ref.toastOptions,
      gutter = _ref.gutter,
      children = _ref.children,
      containerStyle = _ref.containerStyle,
      containerClassName = _ref.containerClassName;

  var _useToaster = useToaster(toastOptions),
      toasts = _useToaster.toasts,
      handlers = _useToaster.handlers;

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: _extends({
      position: 'fixed',
      zIndex: 9999,
      top: DEFAULT_OFFSET,
      left: DEFAULT_OFFSET,
      right: DEFAULT_OFFSET,
      bottom: DEFAULT_OFFSET,
      pointerEvents: 'none'
    }, containerStyle),
    className: containerClassName,
    onMouseEnter: handlers.startPause,
    onMouseLeave: handlers.endPause
  }, toasts.map(function (t) {
    var toastPosition = t.position || position;
    var offset = handlers.calculateOffset(t, {
      reverseOrder: reverseOrder,
      gutter: gutter,
      defaultPosition: position
    });
    var positionStyle = getPositionStyle(toastPosition, offset);
    var ref = t.height ? undefined : createRectRef(function (rect) {
      handlers.updateHeight(t.id, rect.height);
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ref: ref,
      className: t.visible ? activeClass : '',
      key: t.id,
      style: positionStyle
    }, t.type === 'custom' ? resolveValue(t.message, t) : children ? children(t) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToastBar, {
      toast: t,
      position: toastPosition
    }));
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toast);

//# sourceMappingURL=react-hot-toast.esm.js.map


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************************************!*\
  !*** ./resources/js/components/Accueils/Accueil.js ***!
  \*****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var preact_custom_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact-custom-element */ "./node_modules/preact-custom-element/dist/preact-custom-element.esm.js");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/react-hot-toast.esm.js");
/* harmony import */ var ziggy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ziggy */ "./vendor/tightenco/ziggy/dist/index.js");
/* harmony import */ var ziggy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ziggy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ziggy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ziggy */ "./resources/js/ziggy.js");
/* harmony import */ var _Order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Order */ "./resources/js/components/Accueils/Order.js");
/* harmony import */ var _Panier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Panier */ "./resources/js/components/Accueils/Panier.js");
/* harmony import */ var _MyContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MyContext */ "./resources/js/components/Accueils/MyContext.js");
/* harmony import */ var _Checkout_Checkout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Checkout/Checkout */ "./resources/js/components/Checkout/Checkout.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }











var initialState = [];

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_ORDER':
      var order = state.filter(function (ord) {
        return ord.id === action.payload.id;
      });

      if (order.length === 0) {
        return [].concat(_toConsumableArray(state), [action.payload]);
      }

      return state;

    case 'REMOVE_ORDER':
      return state.filter(function (ord) {
        return ord.id !== action.payload;
      });

    case 'INC_ORDER':
      var prevStateI = state.map(function (ord) {
        if (ord.id === action.payload) {
          ord.numero += 1;
        }

        return ord;
      });
      return prevStateI;

    case 'DEC_ORDER':
      var prevStateD = state.map(function (ord, i) {
        if (ord.id === action.payload) {
          ord.numero -= 1;
        }

        return ord;
      });
      return prevStateD;

    case 'REMOVE_ALL':
      return [];

    default:
      return state;
  }
};

var Accueil = function Accueil(_ref) {
  var checkout = _ref.checkout;

  var _useState = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      categories = _useState2[0],
      setCategories = _useState2[1];

  var _useState3 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      plats = _useState4[0],
      setPlats = _useState4[1];

  var _useState5 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useReducer = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      orders = _useReducer2[0],
      dispatch = _useReducer2[1];

  var modalRef = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  var _useState7 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      modal = _useState8[0],
      setModal = _useState8[1];

  var _useState9 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      data = _useState10[0],
      setData = _useState10[1]; // load data


  (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    axios.get(ziggy__WEBPACK_IMPORTED_MODULE_3___default()('api.plats.index', undefined, undefined, _ziggy__WEBPACK_IMPORTED_MODULE_4__.Ziggy)).then(function (res) {
      // console.log(res);
      if (res.status === 200) {
        setCategories(res.data.categories);
        setPlats(res.data.plats);
      }
    })["catch"](function (err) {
      console.log(err.response);
    })["finally"](function () {
      setLoading(false);
    });
    setModal(new bootstrap.Modal(modalRef.current));
  }, []);

  var showNotify = function showNotify(msg, type) {
    if (type === "success") {
      react_hot_toast__WEBPACK_IMPORTED_MODULE_9__.default.success(msg);
    } else if (type === "error") {
      react_hot_toast__WEBPACK_IMPORTED_MODULE_9__.default.error(msg);
    }
  };

  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_MyContext__WEBPACK_IMPORTED_MODULE_7__.default.Provider, {
    value: {
      dispatch: dispatch,
      orders: orders
    }
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "row"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(react_hot_toast__WEBPACK_IMPORTED_MODULE_9__.Toaster, {
    position: "top-center",
    reverseOrder: true,
    toastOptions: {
      success: {
        duration: 3000,
        theme: {
          primary: 'green',
          secondary: 'black'
        }
      }
    }
  }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "col-9"
  }, loading ? (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "text-center my-5"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "spinner-border",
    role: "status"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
    className: "visually-hidden"
  }, "Loading..."))) : (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("nav", {
    id: "navbar-cat",
    className: "navbar navbar-expand-lg navbar-dark bg-dark sticky-top"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "collapse navbar-collapse"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("ul", {
    className: "navbar-nav"
  }, categories && categories.map(function (cat, i) {
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("li", {
      className: "nav-item",
      key: i
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("a", {
      className: "nav-link",
      href: "#".concat(cat.name)
    }, cat.name));
  })))), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "my-4",
    dataBsSpy: "scroll",
    dataBsTarget: "#navbar-cat",
    dataBsOffset: "0",
    tabIndex: "0"
  }, plats && plats.map(function (catPlats, i) {
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: i
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h4", {
      id: categories && categories[i].name
    }, categories && categories[i].name), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      className: "row"
    }, catPlats ? catPlats.map(function (p, i) {
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
        className: "col-4 my-2",
        key: i
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Order__WEBPACK_IMPORTED_MODULE_5__.default, {
        plat: p,
        showNotify: showNotify
      }));
    }) : null));
  })))), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "col-3"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "mt-4"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Panier__WEBPACK_IMPORTED_MODULE_6__.default, {
    showNotify: showNotify,
    modal: modal,
    setData: setData
  })))), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "modal",
    id: "checkout-modal",
    ref: modalRef,
    tabindex: "-1"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "modal-dialog modal-fullscreen"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "modal-content"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "modal-header flex-row-reverse"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
    type: "button",
    className: "btn-close",
    "data-bs-dismiss": "modal",
    "aria-label": "Close"
  })), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "modal-body"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Checkout_Checkout__WEBPACK_IMPORTED_MODULE_8__.default, {
    data: data,
    showNotify: showNotify
  }))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accueil);
(0,preact_custom_element__WEBPACK_IMPORTED_MODULE_2__.default)(Accueil, "accueil-form", []);
})();

/******/ })()
;