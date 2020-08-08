import * as validations from './validation-types'

/**
 * Validates a VALUE against a list of validations Types
 * @param  {string} value                  Value to evaluate
 * @param  {Array<string>} validationsList An array of string
 * @return {boolean}                       if one of the validations doesn's pass return false.
 */
export const validateByListOfType = (value, validationsList) => {
  let isValid = false
  for (let i = validationsList.length - 1; i >= 0; i--) {
    const functionToCall = validationsList[i]
    if (validations[functionToCall + 'Field'](value)) {
      isValid = true
    } else {
      isValid = false
      break
    }
  }
  return isValid
}
