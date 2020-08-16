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
    this.validateWithEventListener();
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
    if (this.onEvent && this.field.length > 0 && !(this.field instanceof HTMLTextAreaElement) && !(this.field instanceof HTMLSelectElement)) {
      for (let i = 0; i < this.field.length; i++) {
        this.field[i].addEventListener(this.onEvent, e => {
          this.validate();
        });
      }
    } else if (this.onEvent) {
      this.field.addEventListener(this.onEvent, e => {
        this.validate();
      });
    }
  }
  /**
   * Validate field.
   * @return {boolean} True if the field is valid, False if is not.
   */


  validate() {
    const validationResult = Object(_validators_validateByListOfType_validator__WEBPACK_IMPORTED_MODULE_0__["validateByListOfType"])(this.field, this.validations);

    if (validationResult.isValid) {
      this.isValid = true;
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["fieldView"])(this.field, this.invalidMessageElement, validationResult.invalidMessage, validationResult.isValid);
    } else {
      this.isValid = false;
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["fieldView"])(this.field, this.invalidMessageElement, validationResult.invalidMessage, validationResult.isValid);
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

/***/ "./src/utils/fieldView.util.js":
/*!*************************************!*\
  !*** ./src/utils/fieldView.util.js ***!
  \*************************************/
/*! exports provided: fieldView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldView", function() { return fieldView; });
/* harmony import */ var _showInvalidMessage_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showInvalidMessage.util */ "./src/utils/showInvalidMessage.util.js");
/* harmony import */ var _hideInvalidMessage_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hideInvalidMessage.util */ "./src/utils/hideInvalidMessage.util.js");
/* harmony import */ var _addValidCssClass_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addValidCssClass.util */ "./src/utils/addValidCssClass.util.js");
/* harmony import */ var _removeValidCssClass_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeValidCssClass.util */ "./src/utils/removeValidCssClass.util.js");




/**
 * Changes add CSS classes and show messages in order the Field is valid or not
 * @param  {HTMLElement}  field           The field (input, textarea, etc)
 * @param  {HTMLElement}  elementMessage  The element to put the validation message
 * @param  {string}  message              Validation message
 * @param  {Boolean} isValid              True if Field is valid or false if is not
 * @return {void}                         Doesn't return anything
 */

const fieldView = (field, elementMessage, message, isValid) => {
  if (field.length > 0) {
    // For Fields that have many inputs. For expample: input radio
    if (isValid) {
      for (let i = 0; i < field.length; i++) {
        Object(_addValidCssClass_util__WEBPACK_IMPORTED_MODULE_2__["addValidCssClass"])(field[i]);
      }

      Object(_hideInvalidMessage_util__WEBPACK_IMPORTED_MODULE_1__["hideInvalidMessage"])(elementMessage, message);
    } else {
      for (let i = 0; i < field.length; i++) {
        Object(_removeValidCssClass_util__WEBPACK_IMPORTED_MODULE_3__["removeValidCssClass"])(field[i]);
      }

      Object(_showInvalidMessage_util__WEBPACK_IMPORTED_MODULE_0__["showInvalidMessage"])(elementMessage, message);
    }
  } else {
    // For unique fields: input text, textarea, etc
    if (isValid) {
      Object(_addValidCssClass_util__WEBPACK_IMPORTED_MODULE_2__["addValidCssClass"])(field);
      Object(_hideInvalidMessage_util__WEBPACK_IMPORTED_MODULE_1__["hideInvalidMessage"])(elementMessage, message);
    } else {
      Object(_removeValidCssClass_util__WEBPACK_IMPORTED_MODULE_3__["removeValidCssClass"])(field);
      Object(_showInvalidMessage_util__WEBPACK_IMPORTED_MODULE_0__["showInvalidMessage"])(elementMessage, message);
    }
  }
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
/*! exports provided: fieldView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fieldView_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fieldView.util */ "./src/utils/fieldView.util.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fieldView", function() { return _fieldView_util__WEBPACK_IMPORTED_MODULE_0__["fieldView"]; });



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
 * Validates a Field against a list of validations Types
 * @param  {HTMLElement}                   field Field to evaluate
 * @param  {Array<string>} validationsList An array of string
 * @return {boolean}                       if one of the validations doesn't pass return false.
 */

const validateByListOfType = (field, validationsList) => {
  let isValid = false;
  let invalidMessage = '';

  for (let i = 0; i < validationsList.length; i++) {
    const functionToCall = validationsList[i].type;

    if (_validation_types__WEBPACK_IMPORTED_MODULE_0__[functionToCall + 'Field'](field)) {
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

/***/ "./src/validators/validation-types/checkboxField.validator.js":
/*!********************************************************************!*\
  !*** ./src/validators/validation-types/checkboxField.validator.js ***!
  \********************************************************************/
/*! exports provided: checkboxField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkboxField", function() { return checkboxField; });
/**
 * Validate if a checkbox is checked
 * @param  {HTML <input>} checkbox Input checkbox
 * @return {boolean}      True if it's checked. False if it's not
 */
const checkboxField = checkbox => {
  if (!checkbox.checked) {
    return false;
  }

  return true;
};

/***/ }),

/***/ "./src/validators/validation-types/emailField.validator.js":
/*!*****************************************************************!*\
  !*** ./src/validators/validation-types/emailField.validator.js ***!
  \*****************************************************************/
/*! exports provided: emailField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailField", function() { return emailField; });
/**
 * Validate email Field string.
 * @param  {HTML <input>} field Email Feild to evaluate.
 * @return {boolean} True if is a valid email. False if is not.
 */
const emailField = field => {
  const emailExpression = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

  if (!emailExpression.test(field.value) || field.value.length === 0 || /^\s+$/.test(field.value)) {
    return false;
  }

  return true;
};

/***/ }),

/***/ "./src/validators/validation-types/index.js":
/*!**************************************************!*\
  !*** ./src/validators/validation-types/index.js ***!
  \**************************************************/
/*! exports provided: requiredField, textField, emailField, checkboxField, radioField, selectField, textRequired */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _requiredField_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requiredField.validator */ "./src/validators/validation-types/requiredField.validator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requiredField", function() { return _requiredField_validator__WEBPACK_IMPORTED_MODULE_0__["requiredField"]; });

/* harmony import */ var _textField_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textField.validator */ "./src/validators/validation-types/textField.validator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textField", function() { return _textField_validator__WEBPACK_IMPORTED_MODULE_1__["textField"]; });

/* harmony import */ var _emailField_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emailField.validator */ "./src/validators/validation-types/emailField.validator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emailField", function() { return _emailField_validator__WEBPACK_IMPORTED_MODULE_2__["emailField"]; });

/* harmony import */ var _checkboxField_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkboxField.validator */ "./src/validators/validation-types/checkboxField.validator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkboxField", function() { return _checkboxField_validator__WEBPACK_IMPORTED_MODULE_3__["checkboxField"]; });

/* harmony import */ var _radioField_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radioField.validator */ "./src/validators/validation-types/radioField.validator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "radioField", function() { return _radioField_validator__WEBPACK_IMPORTED_MODULE_4__["radioField"]; });

/* harmony import */ var _selectField_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectField.validator */ "./src/validators/validation-types/selectField.validator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectField", function() { return _selectField_validator__WEBPACK_IMPORTED_MODULE_5__["selectField"]; });

/* harmony import */ var _textRequired_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./textRequired.validator */ "./src/validators/validation-types/textRequired.validator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textRequired", function() { return _textRequired_validator__WEBPACK_IMPORTED_MODULE_6__["textRequired"]; });









/***/ }),

/***/ "./src/validators/validation-types/radioField.validator.js":
/*!*****************************************************************!*\
  !*** ./src/validators/validation-types/radioField.validator.js ***!
  \*****************************************************************/
/*! exports provided: radioField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radioField", function() { return radioField; });
/**
 * Validate if a radioButton is checked
 * @param  {HTML <input>} field Input radio
 * @return {boolean}      True if one is selected. False if it's not
 */
const radioField = field => {
  const options = field;
  let selected = false; // If there are many input radio

  if (options.length > 0) {
    for (var i = 0; i < options.length; i++) {
      if (options[i].checked) {
        selected = true;
        break;
      }
    }
  } else {
    // If there is only 1 input radio
    if (options.checked) {
      selected = true;
    }
  }

  return selected;
};

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
/* harmony import */ var _selectField_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectField.validator */ "./src/validators/validation-types/selectField.validator.js");
/* harmony import */ var _radioField_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radioField.validator */ "./src/validators/validation-types/radioField.validator.js");
/* harmony import */ var _checkboxField_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkboxField.validator */ "./src/validators/validation-types/checkboxField.validator.js");
/* harmony import */ var _textRequired_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textRequired.validator */ "./src/validators/validation-types/textRequired.validator.js");




/**
 * Validate if a Field value has a text.
 * @param  {HTML <input>} field Field to evaluate.
 * @return {boolean} Return True if Field has a string. Flse if not.
 */

const requiredField = field => {
  // For all input fields
  if (field instanceof HTMLInputElement) {
    // Text
    if (field.type === 'text') {
      return Object(_selectField_validator__WEBPACK_IMPORTED_MODULE_0__["selectField"])(field);
    } // Single radio button selected by Id,  querySelector or other that return only one element.


    if (field.type === 'radio') {
      return Object(_radioField_validator__WEBPACK_IMPORTED_MODULE_1__["radioField"])(field);
    } // Checkbox


    if (field.type === 'checkbox') {
      return Object(_checkboxField_validator__WEBPACK_IMPORTED_MODULE_2__["checkboxField"])(field);
    }
  } // Textarea


  if (field instanceof HTMLTextAreaElement) {
    return Object(_textRequired_validator__WEBPACK_IMPORTED_MODULE_3__["textRequired"])(field);
  } // Select element


  if (field instanceof HTMLSelectElement) {
    return Object(_selectField_validator__WEBPACK_IMPORTED_MODULE_0__["selectField"])(field);
  } // A list of radio buttons. When there are many radios with the same name.


  if (field instanceof NodeList) {
    if (field[0].type === 'radio') {
      return Object(_radioField_validator__WEBPACK_IMPORTED_MODULE_1__["radioField"])(field);
    }
  }

  return true;
};

/***/ }),

/***/ "./src/validators/validation-types/selectField.validator.js":
/*!******************************************************************!*\
  !*** ./src/validators/validation-types/selectField.validator.js ***!
  \******************************************************************/
/*! exports provided: selectField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectField", function() { return selectField; });
const selectField = field => {
  if (field.value === null || field.value.length === 0) {
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
 * Validate if a Field has only letters.
 * @param  {HTML <input>} field Input element to evaluate.
 * @return {boolean} Return true if has only letters and false if not.
 */
const textField = field => {
  const expr = /^[a-zA-Z\s]*$/;

  if (!expr.test(field.value)) {
    return false;
  } else {
    return true;
  }
};

/***/ }),

/***/ "./src/validators/validation-types/textRequired.validator.js":
/*!*******************************************************************!*\
  !*** ./src/validators/validation-types/textRequired.validator.js ***!
  \*******************************************************************/
/*! exports provided: textRequired */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textRequired", function() { return textRequired; });
/**
 * Validate if the field has some text.
 * @param  {<input> or <textarea>} field Element to evaluate.
 * @return {boolean} Return true if has some text.
 */
const textRequired = field => {
  const expr = /^\s+$/;

  if (field.value === null || field.value.length === 0 || expr.test(field.value)) {
    return false;
  } else {
    return true;
  }
};

/***/ })

/******/ });
});