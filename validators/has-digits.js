'use strict';

/**
 * Has digit characters
 */
module.exports = function hasDigits(value) {
  if (!value.match(/[0-9]/)) {
    throw new Error(`Missing digits`);
  }
};
