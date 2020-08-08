import { requiredField } from './validators'

export class Field {
  constructor (field, validations, onEvent = null) {
    this.field = field
    this.validations = validations
    this.onEvent = onEvent
  }

  validate () {
    if (this.onEvent) {
      this.field.addEventListener(this.onEvent, (e) => {
        if (requiredField(e.target.value)) {
          this.field.classList.remove('cat-form-invalid')
          this.field.classList.add('cat-form-valid')
        } else {
          this.field.classList.remove('cat-form-valid')
          this.field.classList.add('cat-form-invalid')
        }
        console.log('isValid: ', requiredField(e.target.value))
      })
    }
  }
}
