export const selectField = (field) => {
  if (field.value === null || field.value.length === 0) {
    return false
  }
  return true
}
