'use strict';

/**
 * Has lower case characters
 */
module.exports = function hasLowerCase(value) {
  if (!value.match(/[a-z]/)) {
    throw new Error(`Missing lower case characters`);
  }
};
