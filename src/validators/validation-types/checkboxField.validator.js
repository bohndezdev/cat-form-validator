/**
 * Validate if a checkbox is checked
 * @param  {HTML <input>} checkbox Input checkbox
 * @return {boolean}      True if it's checked. False if it's not
 */
export const checkboxField = (checkbox) => {
  if (!checkbox.checked) {
    return false
  }
  return true
}
