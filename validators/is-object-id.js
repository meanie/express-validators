'use strict';

/**
 * Dependencies
 */
const mongoose = require('mongoose');
const {ObjectId} = mongoose.Types;

/**
 * Object ID validator
 */
module.exports = function isObjectId(value, allowEmpty = false) {

  //Handle arrays
  if (Array.isArray(value)) {
    if (allowEmpty) {
      value = value.filter(id => !!id);
    }
    if (!value.every(id => ObjectId.isValid(id))) {
      throw new Error(`Expected an array of ObjectId's`);
    }
  }

  //Single ID
  else {
    if (allowEmpty && !value) {
      return;
    }
    if (!ObjectId.isValid(value)) {
      throw new Error('Expected an ObjectId');
    }
  }
};
