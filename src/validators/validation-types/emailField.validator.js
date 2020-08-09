/**
 * Validate email string.
 * @param  {string} email Email string.
 * @return {boolean} True if is a valid email. False if is not.
 */
export const emailField = (email) => {
  const emailExpression = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/
  if (!emailExpression.test(email) || email.length === 0 || /^\s+$/.test(email)) {
    return false
  }
  return true
}
