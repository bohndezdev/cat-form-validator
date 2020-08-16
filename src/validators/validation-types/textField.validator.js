/**
 * Validate if a Field has only letters.
 * @param  {HTML <input>} field Input element to evaluate.
 * @return {boolean} Return true if has only letters and false if not.
 */
export const textField = (field) => {
  const expr = /^[a-zA-Z\s]*$/
  if (!expr.test(field.value)) {
    return false
  } else {
    return true
  }
}
