'use strict';

/**
 * Min length
 */
module.exports = function minLength(value, length) {
  if (value.length < length) {
    throw new Error(`Minimum length is ${length}`);
  }
};
