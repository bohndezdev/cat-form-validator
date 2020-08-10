import { showInvalidMessage } from './showInvalidMessage.util'
import { hideInvalidMessage } from './hideInvalidMessage.util'
import { addValidCssClass } from './addValidCssClass.util'
import { removeValidCssClass } from './removeValidCssClass.util'

/**
 * Changes add CSS classes and show messages in order the Field is valid or not
 * @param  {HTMLElement}  field           The field (input, textarea, etc)
 * @param  {HTMLElement}  elementMessage  The element to put the validation message
 * @param  {string}  message              Validation message
 * @param  {Boolean} isValid              True if Field is valid or false if is not
 * @return {void}                         Doesn't return anything
 */
export const fieldView = (field, elementMessage, message, isValid) => {
  if (field.length > 0) { // For Fields that have many inputs. For expample: input radio
    if (isValid) {
      for (let i = 0; i < field.length; i++) {
        addValidCssClass(field[i])
      }
      hideInvalidMessage(elementMessage, message)
    } else {
      for (let i = 0; i < field.length; i++) {
        removeValidCssClass(field[i])
      }
      showInvalidMessage(elementMessage, message)
    }
  } else { // For unique fields: input text, textarea, etc
    if (isValid) {
      addValidCssClass(field)
      hideInvalidMessage(elementMessage, message)
    } else {
      removeValidCssClass(field)
      showInvalidMessage(elementMessage, message)
    }
  }
}
