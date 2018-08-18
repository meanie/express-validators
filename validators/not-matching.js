'use strict';

/**
 * Not match a set of values
 */
module.exports = function notMatching(value, check) {
  for (const item of check) {
    const regex = new RegExp(item, 'i');
    if (value.match(regex)) {
      throw new Error(`Should not match ${item}`);
    }
  }
};
