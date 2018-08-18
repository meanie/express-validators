'use strict';

/**
 * Has upper case characters
 */
module.exports = function hasUpperCase(value) {
  if (!value.match(/[A-Z]/)) {
    throw new Error(`Missing upper case characters`);
  }
};
