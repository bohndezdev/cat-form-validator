/**
 * Remove "cat-form-valid" and Add "cat-form-invalid" CSS Classes.
 * @param  {HTMLElement} element Html Element to add and remove CSS Classes.
 * @return {void} It doesn't retrun anything.
 */
export const removeValidCssClass = (element) => {
  element.classList.remove('cat-form-valid')
  element.classList.add('cat-form-invalid')
}
