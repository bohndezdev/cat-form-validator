import { validateByListOfType } from './validators/validateByListOfType.validator'
import { fieldView } from './utils'

export class Field {
  constructor (field, invalidMessageElement, validations, onEvent = null) {
    this.field = field
    this.invalidMessageElement = invalidMessageElement
    this.validations = validations
    this.onEvent = onEvent
    this.isValid = false
  }

  /**
   * Validate adding an event listener to each form field.
   * @return {void} Doesn't return anything.
   */
  validateWithEventListener () {
    console.log()
    if (this.onEvent && !(this.field.length > 0)) {
      this.field.addEventListener(this.onEvent, (e) => {
        this.validate()
      })
    } else {
      for (let i = 0; i < this.field.length; i++) {
        this.field[i].addEventListener(this.onEvent, (e) => {
          this.validate()
        })
      }
    }
  }

  /**
   * Validate field.
   * @return {boolean} True if the field is valid, False if is not.
   */
  validate () {
    const validationResult = validateByListOfType(this.field, this.validations)

    if (validationResult.isValid) {
      this.isValid = true
      fieldView(this.field, this.invalidMessageElement, validationResult.invalidMessage, validationResult.isValid)
    } else {
      this.isValid = false
      fieldView(this.field, this.invalidMessageElement, validationResult.invalidMessage, validationResult.isValid)
    }
    return this.isValid
  }
}
