/**
 * Function to validate if a string has a text
 * @param  {string} value Value of the field
 * @return {boolean} Return true if has a value and false if not
 */
export const requiredField = (value) => {
  if (value === null || value.length === 0 || /^\s+$/.test(value)) {
    return false
  }

  return true
}
