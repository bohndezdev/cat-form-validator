import { requiredField } from './validators'

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
        if (requiredField(e.target.value)) {
          this.addValidCssClass(this.field)
          this.isValid = true
        } else {
          this.removeValidCssClass(this.field)
          this.isValid = false
        }
        console.log('isValid: ', this.isValid)
      })
    }
  }

  validate () {
    if (requiredField(this.field.value)) {
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

  addValidCssClass (element) {
    element.classList.remove('cat-form-invalid')
    element.classList.add('cat-form-valid')
  }

  removeValidCssClass (element) {
    this.field.classList.remove('cat-form-valid')
    this.field.classList.add('cat-form-invalid')
  }
}
