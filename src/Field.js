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
        if (!requiredField(this.field.value)) {
          this.field.classList.add('cat-form-invalid')
        } else {
          this.field.classList.remove('cat-form-invalid')
        }
        console.log('isValid: ', requiredField(this.field.value))
      })
    }
  }
}
