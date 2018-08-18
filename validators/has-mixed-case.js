'use strict';

/**
 * Has both upper and lower case characters
 */
module.exports = function hasMixedCase(value) {
  if (!value.match(/[A-Z]/) || !value.match(/[a-z]/)) {
    throw new Error(`Needs both upper case and lower case characters`);
  }
};
