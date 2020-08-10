/**
 * Validate if a radioButton is checked
 * @param  {HTML <input>} field Input radio
 * @return {boolean}      True if one is selected. False if it's not
 */
export const radioField = (field) => {
  const options = field
  let selected = false

  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      selected = true
      break
    }
  }
  return selected
}
