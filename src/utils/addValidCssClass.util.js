/**
 * Remove "cat-form-invalid" and Add "cat-form-valid" CSS Classes.
 * @param  {HTMLElement} element Html Element to add and remove CSS Classes.
 * @return {void} It doesn't retrun anything.
 */
export const addValidCssClass = (element) => {
  element.classList.remove('cat-form-invalid')
  element.classList.add('cat-form-valid')
}
