/**
 * Validate if a radioButton is checked
 * @param  {HTML <input>} field Input radio
 * @return {boolean}      True if one is selected. False if it's not
 */
export const radioField = (field) => {
  const options = field
  let selected = false

  // If there are many input radio
  if (options.length > 0) {
    for (var i = 0; i < options.length; i++) {
      if (options[i].checked) {
        selected = true
        break
      }
    }
  } else { // If there is only 1 input radio
    if (options.checked) {
      selected = true
    }
  }
  return selected
}
