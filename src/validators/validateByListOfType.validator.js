import * as validations from './validation-types'

/**
 * Validates a Field against a list of validations Types
 * @param  {HTMLElement}                   field Field to evaluate
 * @param  {Array<string>} validationsList An array of string
 * @return {boolean}                       if one of the validations doesn't pass return false.
 */
export const validateByListOfType = (field, validationsList) => {
  let isValid = false
  let invalidMessage = ''
  for (let i = 0; i < validationsList.length; i++) {
    const functionToCall = validationsList[i].type
    if (validations[functionToCall + 'Field'](field)) {
      isValid = true
    } else {
      isValid = false
      invalidMessage = validationsList[i].invalidMessage
      break
    }
  }
  return {
    isValid,
    invalidMessage
  }
}
