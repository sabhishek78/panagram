// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function panagram(str){
  // define the alphabet
  var letters = "abcdefghijklmnopqrstuvwxyz"
  // make all letters in string lowercase
  string = string.toLowerCase().replace(/[^a-z]/g,'')
  // iterate through up until the length of the alphabet
  for (var i = 0; i < 26; i++)
    // if the string does not include the letter return false
    if (string.indexOf(letters[i]) < 0) return false;
    // otherwise return true
    return true;
}