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

/**
 * Returns nested field of an Object if exists, otherwise return undefined.
 * @param {Object} obj The object to query
 * @param {string} chain The path to the field we want to check
 * @return {undefined|*} The field from path or undefined
 */
export function optionalChaining(obj, chain) {
  return chain
      .split('.')
      .reduce(function(acc, val) {
        return acc ? acc[val] : undefined;
      }, obj);
}
