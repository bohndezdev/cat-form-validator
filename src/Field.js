import * as validator from './validators'
import { addValidCssClass, removeValidCssClass } from './utils'

export class Field {
  constructor (field, validations, onEvent = null) {
    this.field = field
    this.validations = validations
    this.onEvent = onEvent
    this.isValid = false
  }

  validateWithEventListener () {
    if (this.onEvent) {
      this.field.addEventListener(this.onEvent, (e) => {
        if (this.validateByType(this.field.value, this.validations)) {
          addValidCssClass(this.field)
          this.isValid = true
        } else {
          removeValidCssClass(this.field)
          this.isValid = false
        }
        console.log('isValid: ', this.isValid)
      })
    }
  }

  validate () {
    if (this.validateByType(this.field.value, this.validations)) {
      this.field.classList.remove('cat-form-invalid')
      this.field.classList.add('cat-form-valid')
      this.isValid = true
    } else {
      this.field.classList.remove('cat-form-valid')
      this.field.classList.add('cat-form-invalid')
    }
    console.log('isValid: ', this.isValid)
    return this.isValid
  }

  /**
   * Validates a VALUE against a list of types of validations
   * @param  {Array<string>} validationsList An array of string
   * @return {boolean} if one of the validations doesn's pass return false.
   */
  validateByType (value, validationsList) {
    let isValid = false
    for (let i = validationsList.length - 1; i >= 0; i--) {
      const functionToCall = validationsList[i]
      console.log('validating: ', validationsList[i])
      if (validator[functionToCall + 'Field'](value)) {
        isValid = true
      } else {
        isValid = false
        break
      }
    }
    return isValid
  }
}
