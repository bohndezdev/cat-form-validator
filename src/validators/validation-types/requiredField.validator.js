/**
 * Validate if a Field value has a text.
 * @param  {HTML <input>} field Field to evaluate.
 * @return {boolean} Return True if Field has a string. Flse if not.
 */
export const requiredField = (field) => {
  if (field.value === null || field.value.length === 0 || /^\s+$/.test(field.value)) {
    return false
  }

  return true
}
