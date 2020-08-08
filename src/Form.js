import { Field } from './Field'

export class CreateForm {
  constructor (fields, submitElement = null) {
    this.fields = fields
    this.isValid = false
  }

  /**
   * Add an event listener to each field and validate all separately.
   * @return {void} Doesn't return anything.
   */
  validateWithEventListener () {
    for (let i = 0; i < this.fields.length; i++) {
      const field = new Field(this.fields[i].field, this.fields[i].validations, this.fields[i].onEvent)

      field.validateWithEventListener()
    }
  }

  /**
   * Validate all fields synchronously.
   * @return {boolean} True if all fields are valid. False id one or more are invalid.
   */
  validate () {
    for (let i = 0; i < this.fields.length; i++) {
      const field = new Field(this.fields[i].field, this.fields[i].validations, this.fields[i].onEvent)

      field.validate()
    }

    return this.isValid
  }
}
