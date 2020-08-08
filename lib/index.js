(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["catForm"] = factory();
	else
		root["catForm"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Field.js":
/*!**********************!*\
  !*** ./src/Field.js ***!
  \**********************/
/*! exports provided: Field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validators */ "./src/validators/index.js");

class Field {
  constructor(field, validations, onEvent = null) {
    this.field = field;
    this.validations = validations;
    this.onEvent = onEvent;
    this.isValid = false;
  }

  validateWithEventListener() {
    if (this.onEvent) {
      this.field.addEventListener(this.onEvent, e => {
        if (this.validateByType(this.validations)) {
          this.addValidCssClass(this.field);
          this.isValid = true;
        } else {
          this.removeValidCssClass(this.field);
          this.isValid = false;
        }

        console.log('isValid: ', this.isValid);
      });
    }
  }

  validate() {
    if (_validators__WEBPACK_IMPORTED_MODULE_0__["requiredField"](this.field.value)) {
      this.field.classList.remove('cat-form-invalid');
      this.field.classList.add('cat-form-valid');
      this.isValid = true;
    } else {
      this.field.classList.remove('cat-form-valid');
      this.field.classList.add('cat-form-invalid');
    }

    console.log('isValid: ', this.isValid);
    return this.isValid;
  }
  /**
   * Validates a VALUE against a list of types of validations
   * @param  {Array<string>} validationsList An array of string
   * @return {boolean} if one of the validations doesn's pass return false.
   */


  validateByType(validationsList) {
    for (let i = validationsList.length - 1; i >= 0; i--) {
      const functionToCall = validationsList[i];
      console.log('validating: ', validationsList[i]);

      if (!_validators__WEBPACK_IMPORTED_MODULE_0__[functionToCall + 'Field'](this.field.value)) {
        return false;
      }
    }

    return true;
  }

  addValidCssClass(element) {
    element.classList.remove('cat-form-invalid');
    element.classList.add('cat-form-valid');
  }

  removeValidCssClass(element) {
    this.field.classList.remove('cat-form-valid');
    this.field.classList.add('cat-form-invalid');
  }

}

/***/ }),

/***/ "./src/Form.js":
/*!*********************!*\
  !*** ./src/Form.js ***!
  \*********************/
/*! exports provided: CreateForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateForm", function() { return CreateForm; });
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field */ "./src/Field.js");

class CreateForm {
  constructor(fields, submitElement = null) {
    this.fields = fields;
    this.isValid = false;
  }

  validateWithEventListener() {
    console.log('validando formulario con listeners');

    for (let i = 0; i < this.fields.length; i++) {
      const field = new _Field__WEBPACK_IMPORTED_MODULE_0__["Field"](this.fields[i].field, this.fields[i].validations, this.fields[i].onEvent);
      field.validateWithEventListener();
    }
  }

  validate() {
    console.log('validando formulario');

    for (let i = 0; i < this.fields.length; i++) {
      const field = new _Field__WEBPACK_IMPORTED_MODULE_0__["Field"](this.fields[i].field, this.fields[i].validations, this.fields[i].onEvent);
      field.validate();
    }
  }

}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Field, CreateForm, requiredField, textField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field */ "./src/Field.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return _Field__WEBPACK_IMPORTED_MODULE_0__["Field"]; });

/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ "./src/Form.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateForm", function() { return _Form__WEBPACK_IMPORTED_MODULE_1__["CreateForm"]; });

/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validators */ "./src/validators/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requiredField", function() { return _validators__WEBPACK_IMPORTED_MODULE_2__["requiredField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textField", function() { return _validators__WEBPACK_IMPORTED_MODULE_2__["textField"]; });





/***/ }),

/***/ "./src/validators/index.js":
/*!*********************************!*\
  !*** ./src/validators/index.js ***!
  \*********************************/
/*! exports provided: requiredField, textField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _requiredField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requiredField */ "./src/validators/requiredField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requiredField", function() { return _requiredField__WEBPACK_IMPORTED_MODULE_0__["requiredField"]; });

/* harmony import */ var _textField_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textField.validator */ "./src/validators/textField.validator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textField", function() { return _textField_validator__WEBPACK_IMPORTED_MODULE_1__["textField"]; });




/***/ }),

/***/ "./src/validators/requiredField.js":
/*!*****************************************!*\
  !*** ./src/validators/requiredField.js ***!
  \*****************************************/
/*! exports provided: requiredField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredField", function() { return requiredField; });
/**
 * Function to validate if a string has a text
 * @param  {string} value Value of the field
 * @return {boolean} Return true if has a value and false if not
 */
const requiredField = value => {
  if (value === null || value.length === 0 || /^\s+$/.test(value)) {
    return false;
  }

  return true;
};

/***/ }),

/***/ "./src/validators/textField.validator.js":
/*!***********************************************!*\
  !*** ./src/validators/textField.validator.js ***!
  \***********************************************/
/*! exports provided: textField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textField", function() { return textField; });
/**
 * Validate if a value has only letters.
 * @param  {string} value String to evaluate.
 * @return {boolean} Return true if has only letters and false if not.
 */
const textField = value => {
  const expr = /^[a-zA-Z]/;

  if (!expr.test(value)) {
    return false;
  } else {
    return true;
  }
};

/***/ })

/******/ });
});