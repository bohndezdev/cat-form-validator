/**
 * Validate email Field string.
 * @param  {HTML <input>} field Email Feild to evaluate.
 * @return {boolean} True if is a valid email. False if is not.
 */
export const emailField = (field) => {
  const emailExpression = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/
  if (!emailExpression.test(field.value) || field.value.length === 0 || /^\s+$/.test(field.value)) {
    return false
  }
  return true
}
