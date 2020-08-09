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
        const validationResult = validateByListOfType(this.field.value, this.validations)

        if (validationResult.isValid) {
          this.isValid = true
          addValidCssClass(this.field)
          console.log(validationResult.invalidMessage)
        } else {
          this.isValid = false
          removeValidCssClass(this.field)
          console.log(validationResult.invalidMessage)
        }
      })
    }
  }

  /**
   * Validate field.
   * @return {boolean} True if the field is valid, False if is not.
   */
  validate () {
    const validationResult = validateByListOfType(this.field.value, this.validations)

    if (validationResult.isValid) {
      this.isValid = true
      addValidCssClass(this.field)
      console.log(validationResult.invalidMessage)
    } else {
      this.isValid = false
      removeValidCssClass(this.field)
      console.log(validationResult.invalidMessage)
    }
    return this.isValid
  }
}
