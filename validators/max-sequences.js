'use strict';

/**
 * Max sequences
 */
module.exports = function maxSequences(value, max) {

  //Helpers
  let sequencesUp = 0;
  let sequencesDown = 0;
  let longest = 0;

  //Loop characters
  for (let i = 0; i < value.length; i++) {

    //Get character and it's code
    let code = value.charCodeAt(i);

    //Check sequences and repeats (next to each other)
    if (i > 0) {
      let vCode = value.charCodeAt(i - 1);
      if ((code - vCode) === 1) {
        sequencesUp++;
        if (sequencesUp > longest) {
          longest = sequencesUp;
        }
      }
      else {
        sequencesUp = 0;
      }
      if ((code - vCode) === -1) {
        sequencesDown++;
        if (sequencesDown > longest) {
          longest = sequencesDown;
        }
      }
      else {
        sequencesDown = 0;
      }
    }
  }

  //Return result (equals check because we don't count the first char)
  if (longest >= max) {
    throw new Error(`Too many characters in sequence`);
  }
};
