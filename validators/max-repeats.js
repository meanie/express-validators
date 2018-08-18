'use strict';

/**
 * Max repeats
 */
module.exports = function maxRepeats(value, max) {

  //Helpers
  let repeats = 0;
  let longest = 0;

  //Loop characters
  for (let i = 0; i < value.length; i++) {

    //Get character and it's code
    let char = value.charAt(i);

    //Check repeats (next to each other)
    if (i > 0) {
      let vChar = value.charAt(i - 1);
      if (char === vChar) {
        repeats++;
        if (repeats > longest) {
          longest = repeats;
        }
      }
      else {
        repeats = 0;
      }
    }
  }

  //Return result (equals check because we don't count the first char)
  if (longest >= max) {
    throw new Error(`Too many repeating characters`);
  }
};
