'use strict';

/**
 * Is object
 */
module.exports = function isObject(value) {
  if (typeof value !== 'object') {
    throw new Error('Expected object value');
  }
};
