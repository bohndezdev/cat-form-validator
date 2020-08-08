/**
 * Validate if a value has only letters.
 * @param  {string} value String to evaluate.
 * @return {boolean} Return true if has only letters and false if not.
 */
export const textField = (value) => {
  const expr = /^[a-zA-Z]/
  if (!expr.test(value)) {
    return false
  } else {
    return true
  }
}
