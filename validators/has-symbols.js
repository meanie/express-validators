'use strict';

/**
 * Has symbol characters
 */
module.exports = function hasSymbols(value) {
  if (!value.match(/[^a-zA-Z0-9 ]/)) {
    throw new Error(`Missing symbols`);
  }
};
