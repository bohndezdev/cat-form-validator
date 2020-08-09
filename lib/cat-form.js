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

/***/ "./src/CatForm.js":
/*!************************!*\
  !*** ./src/CatForm.js ***!
  \************************/
/*! exports provided: CreateCatForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCatForm", function() { return CreateCatForm; });
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field */ "./src/Field.js");

class CreateCatForm {
  constructor(fields, submitElement = null) {
    this.fields = fields;
    this.isValid = false;
  }
  /**
   * Add an event listener to each field and validate all separately.
   * @return {void} Doesn't return anything.
   */


  validateWithEventListener() {
    for (let i = 0; i < this.fields.length; i++) {
      const field = new _Field__WEBPACK_IMPORTED_MODULE_0__["Field"](this.fields[i].field, this.fields[i].invalidMessageElement, this.fields[i].validations, this.fields[i].onEvent);
      field.validateWithEventListener();
    }
  }
  /**
   * Validate all fields synchronously.
   * @return {boolean} True if all fields are valid. False id one or more are invalid.
   */


  validate() {
    this.isValid = true;

    for (let i = 0; i < this.fields.length; i++) {
      const field = new _Field__WEBPACK_IMPORTED_MODULE_0__["Field"](this.fields[i].field, this.fields[i].invalidMessageElement, this.fields[i].validations, this.fields[i].onEvent);

      if (!field.validate()) {
        this.isValid = false;
      }
    }

    return this.isValid;
  }

}

/***/ }),

/***/ "./src/Field.js":
/*!**********************!*\
  !*** ./src/Field.js ***!
  \**********************/
/*! exports provided: Field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony import */ var _validators_validateByListOfType_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validators/validateByListOfType.validator */ "./src/validators/validateByListOfType.validator.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils/index.js");


class Field {
  constructor(field, invalidMessageElement, validations, onEvent = null) {
    this.field = field;
    this.invalidMessageElement = invalidMessageElement;
    this.validations = validations;
    this.onEvent = onEvent;
    this.isValid = false;
  }
  /**
   * Validate adding an event listener to each form field.
   * @return {void} Doesn't return anything.
   */


  validateWithEventListener() {
    if (this.onEvent) {
      this.field.addEventListener(this.onEvent, e => {
        const validationResult = Object(_validators_validateByListOfType_validator__WEBPACK_IMPORTED_MODULE_0__["validateByListOfType"])(this.field.value, this.validations);

        if (validationResult.isValid) {
          this.isValid = true;
          Object(_utils__WEBPACK_IMPORTED_MODULE_1__["addValidCssClass"])(this.field);
          Object(_utils__WEBPACK_IMPORTED_MODULE_1__["hideInvalidMessage"])(this.invalidMessageElement, validationResult.invalidMessage);
          console.log(validationResult.invalidMessage);
        } else {
          this.isValid = false;
          Object(_utils__WEBPACK_IMPORTED_MODULE_1__["removeValidCssClass"])(this.field);
          Object(_utils__WEBPACK_IMPORTED_MODULE_1__["showInvalidMessage"])(this.invalidMessageElement, validationResult.invalidMessage);
          console.log(validationResult.invalidMessage);
        }
      });
    }
  }
  /**
   * Validate field.
   * @return {boolean} True if the field is valid, False if is not.
   */


  validate() {
    const validationResult = Object(_validators_validateByListOfType_validator__WEBPACK_IMPORTED_MODULE_0__["validateByListOfType"])(this.field.value, this.validations);

    if (validationResult.isValid) {
      this.isValid = true;
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["addValidCssClass"])(this.field);
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["hideInvalidMessage"])(this.invalidMessageElement, validationResult.invalidMessage);
      console.log(validationResult.invalidMessage);
    } else {
      this.isValid = false;
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["removeValidCssClass"])(this.field);
      console.log(validationResult.invalidMessage);
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["showInvalidMessage"])(this.invalidMessageElement, validationResult.invalidMessage);
    }

    return this.isValid;
  }

}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: CreateCatForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CatForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CatForm */ "./src/CatForm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateCatForm", function() { return _CatForm__WEBPACK_IMPORTED_MODULE_0__["CreateCatForm"]; });



/***/ }),

/***/ "./src/utils/addValidCssClass.util.js":
/*!********************************************!*\
  !*** ./src/utils/addValidCssClass.util.js ***!
  \********************************************/
/*! exports provided: addValidCssClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addValidCssClass", function() { return addValidCssClass; });
/**
 * Remove "cat-form-invalid" and Add "cat-form-valid" CSS Classes.
 * @param  {HTMLElement} element Html Element to add and remove CSS Classes.
 * @return {void} It doesn't retrun anything.
 */
const addValidCssClass = element => {
  element.classList.remove('cat-form-invalid');
  element.classList.add('cat-form-valid');
};

/***/ }),

/***/ "./src/utils/hideInvalidMessage.util.js":
/*!**********************************************!*\
  !*** ./src/utils/hideInvalidMessage.util.js ***!
  \**********************************************/
/*! exports provided: hideInvalidMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideInvalidMessage", function() { return hideInvalidMessage; });
const hideInvalidMessage = (element, message) => {
  element.innerHTML = '';
  element.style.display = 'none';
};

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: addValidCssClass, removeValidCssClass, showInvalidMessage, hideInvalidMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addValidCssClass_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addValidCssClass.util */ "./src/utils/addValidCssClass.util.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addValidCssClass", function() { return _addValidCssClass_util__WEBPACK_IMPORTED_MODULE_0__["addValidCssClass"]; });

/* harmony import */ var _removeValidCssClass_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeValidCssClass.util */ "./src/utils/removeValidCssClass.util.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeValidCssClass", function() { return _removeValidCssClass_util__WEBPACK_IMPORTED_MODULE_1__["removeValidCssClass"]; });

/* harmony import */ var _showInvalidMessage_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showInvalidMessage.util */ "./src/utils/showInvalidMessage.util.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showInvalidMessage", function() { return _showInvalidMessage_util__WEBPACK_IMPORTED_MODULE_2__["showInvalidMessage"]; });

/* harmony import */ var _hideInvalidMessage_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hideInvalidMessage.util */ "./src/utils/hideInvalidMessage.util.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideInvalidMessage", function() { return _hideInvalidMessage_util__WEBPACK_IMPORTED_MODULE_3__["hideInvalidMessage"]; });






/***/ }),

/***/ "./src/utils/removeValidCssClass.util.js":
/*!***********************************************!*\
  !*** ./src/utils/removeValidCssClass.util.js ***!
  \***********************************************/
/*! exports provided: removeValidCssClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeValidCssClass", function() { return removeValidCssClass; });
/**
 * Remove "cat-form-valid" and Add "cat-form-invalid" CSS Classes.
 * @param  {HTMLElement} element Html Element to add and remove CSS Classes.
 * @return {void} It doesn't retrun anything.
 */
const removeValidCssClass = element => {
  element.classList.remove('cat-form-valid');
  element.classList.add('cat-form-invalid');
};

/***/ }),

/***/ "./src/utils/showInvalidMessage.util.js":
/*!**********************************************!*\
  !*** ./src/utils/showInvalidMessage.util.js ***!
  \**********************************************/
/*! exports provided: showInvalidMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showInvalidMessage", function() { return showInvalidMessage; });
const showInvalidMessage = (element, message) => {
  element.innerHTML = message;
  element.style.display = 'block';
};

/***/ }),

/***/ "./src/validators/validateByListOfType.validator.js":
/*!**********************************************************!*\
  !*** ./src/validators/validateByListOfType.validator.js ***!
  \**********************************************************/
/*! exports provided: validateByListOfType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateByListOfType", function() { return validateByListOfType; });
/* harmony import */ var _validation_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation-types */ "./src/validators/validation-types/index.js");

/**
 * Validates a VALUE against a list of validations Types
 * @param  {string} value                  Value to evaluate
 * @param  {Array<string>} validationsList An array of string
 * @return {boolean}                       if one of the validations doesn's pass return false.
 */

const validateByListOfType = (value, validationsList) => {
  let isValid = false;
  let invalidMessage = '';

  for (let i = validationsList.length - 1; i >= 0; i--) {
    const functionToCall = validationsList[i].type;

    if (_validation_types__WEBPACK_IMPORTED_MODULE_0__[functionToCall + 'Field'](value)) {
      isValid = true;
    } else {
      isValid = false;
      invalidMessage = validationsList[i].invalidMessage;
      break;
    }
  }

  return {
    isValid,
    invalidMessage
  };
};

/***/ }),

/***/ "./src/validators/validation-types/index.js":
/*!**************************************************!*\
  !*** ./src/validators/validation-types/index.js ***!
  \**************************************************/
/*! exports provided: requiredField, textField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _requiredField_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requiredField.validator */ "./src/validators/validation-types/requiredField.validator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requiredField", function() { return _requiredField_validator__WEBPACK_IMPORTED_MODULE_0__["requiredField"]; });

/* harmony import */ var _textField_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textField.validator */ "./src/validators/validation-types/textField.validator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textField", function() { return _textField_validator__WEBPACK_IMPORTED_MODULE_1__["textField"]; });




/***/ }),

/***/ "./src/validators/validation-types/requiredField.validator.js":
/*!********************************************************************!*\
  !*** ./src/validators/validation-types/requiredField.validator.js ***!
  \********************************************************************/
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

/***/ "./src/validators/validation-types/textField.validator.js":
/*!****************************************************************!*\
  !*** ./src/validators/validation-types/textField.validator.js ***!
  \****************************************************************/
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
  const expr = /^[a-zA-Z]*$/;

  if (!expr.test(value)) {
    return false;
  } else {
    return true;
  }
};

/***/ })

/******/ });
});