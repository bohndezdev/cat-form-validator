import { selectField } from './selectField.validator'
import { radioField } from './radioField.validator'
import { checkboxField } from './checkboxField.validator'
import { textRequired } from './textRequired.validator'

/**
 * Validate if a Field value has a text.
 * @param  {HTML <input>} field Field to evaluate.
 * @return {boolean} Return True if Field has a string. Flse if not.
 */
export const requiredField = (field) => {
  // For all input fields
  if (field instanceof HTMLInputElement) {
    // Text
    if (field.type === 'text') {
      return selectField(field)
    }

    // Single radio button selected by Id,  querySelector or other that return only one element.
    if (field.type === 'radio') {
      return radioField(field)
    }

    // Checkbox
    if (field.type === 'checkbox') {
      return checkboxField(field)
    }
  }

  // Textarea
  if (field instanceof HTMLTextAreaElement) {
    return textRequired(field)
  }

  // Select element
  if (field instanceof HTMLSelectElement) {
    return selectField(field)
  }

  // A list of radio buttons. When there are many radios with the same name.
  if (field instanceof NodeList) {
    if (field[0].type === 'radio') {
      return radioField(field)
    }
  }

  return true
}
