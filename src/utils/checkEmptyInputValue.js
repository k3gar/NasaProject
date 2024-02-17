export const isInputValueEmpty = (inputValue = "") =>
  inputValue.replace(/\s/g, "").length === 0;
