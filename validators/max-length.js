'use strict';

/**
 * Max length
 */
module.exports = function maxLength(value, length) {
  if (value.length > length) {
    throw new Error(`Maximum length is ${length}`);
  }
};
