/**
 * Validate if the field has some text.
 * @param  {<input> or <textarea>} field Element to evaluate.
 * @return {boolean} Return true if has some text.
 */
export const textRequired = (field) => {
  const expr = /^\s+$/
  if (field.value === null || field.value.length === 0 || expr.test(field.value)) {
    return false
  } else {
    return true
  }
}
