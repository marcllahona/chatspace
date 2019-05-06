/**
 * Returns a boolean indicating if the string is valid input or not.
 * @param {String} s
 * @returns {Boolean}
 */

export function invalidInputString(s) {
  return !s || /^\s*$/.test(s);
}

/**
 * Returns a boolean indicating if the string is valid input or not.
 * @param {Array<String>} inputs
 * @returns {Boolean}
 */
export function invalidInputRegistration(inputs) {
  return inputs.some(invalidInputString);
}
