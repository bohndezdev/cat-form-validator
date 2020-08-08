import { Field } from './Field'

export class CreateForm {
  constructor (fields) {
    this.fields = fields
    this.isValid = false
  }

  validate () {
    console.log('validando formulario')

    for (let i = 0; i < this.fields.length; i++) {
      const field = new Field(this.fields[i].field, this.fields[i].validations, this.fields[i].onEvent)

      field.validate()
    }
  }
}
