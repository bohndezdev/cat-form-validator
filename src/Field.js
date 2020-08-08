import { validateByListOfType } from './validators/validateByListOfType.validator'
import { addValidCssClass, removeValidCssClass } from './utils'

export class Field {
  constructor (field, validations, onEvent = null) {
    this.field = field
    this.validations = validations
    this.onEvent = onEvent
    this.isValid = false
  }

  /**
   * Validate adding an event listener to each form field.
   * @return {void} Doesn't return anything.
   */
  validateWithEventListener () {
    if (this.onEvent) {
      this.field.addEventListener(this.onEvent, (e) => {
        if (validateByListOfType(this.field.value, this.validations)) {
          addValidCssClass(this.field)
          this.isValid = true
        } else {
          removeValidCssClass(this.field)
          this.isValid = false
        }
      })
    }
  }

  /**
   * Validate field.
   * @return {boolean} True if the field is valid, False if is not.
   */
  validate () {
    if (validateByListOfType(this.field.value, this.validations)) {
      addValidCssClass(this.field)
      this.isValid = true
    } else {
      removeValidCssClass(this.field)
    }
    return this.isValid
  }
}
