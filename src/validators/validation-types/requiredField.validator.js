import { selectField } from './selectField.validator'
import { radioField } from './radioField.validator'

/**
 * Validate if a Field value has a text.
 * @param  {HTML <input>} field Field to evaluate.
 * @return {boolean} Return True if Field has a string. Flse if not.
 */
export const requiredField = (field) => {
  // Select element
  if (field instanceof HTMLSelectElement) {
    return selectField(field)
  }

  // A list of radio buttons (When it has more then 1 radio)
  if (field instanceof NodeList) {
    if (field[0].type === 'radio') {
      return radioField(field)
    }
  }

  if (field.type === 'radio') {
    return radioField(field)
  }

  if (field.value === null || field.value.length === 0 || /^\s+$/.test(field.value)) {
    return false
  }
  return true
}
