import { validateByListOfType } from './validators/validateByListOfType.validator'
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
        if (validateByListOfType(this.field.value, this.validations)) {
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
    if (validateByListOfType(this.field.value, this.validations)) {
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
}
