export class formField {
  constructor (field, validations) {
    this.field = field
    this.validations = validations
  }

  validate () {
    console.log(`validating ${this.field} and ${this.validations[0]}`)
  }
}
