function isPalindrome(word) {
  // Stop condition: an empty word or a word containing a single character is a palindrome
  if (word.length <= 1) {
    return true;
  }

  // Compare the characters located at the ends of the word
  if (word[0] === word[word.length - 1]) {
    // Recursively test the rest of the word
    return isPalindrome(word.slice(1, -1));
  } else {
    // If there is a difference, the word is not a palindrome
    return false;
  }
}
