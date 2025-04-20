export function pointsForWord(word) {
    if (typeof word !== "string") {
      throw new Error("Input must be a string");
    }
  
    let points = 0;
  
    for (const char of word) {
      // Only consider alphabet letters
      if (!/[a-z]/i.test(char)) {
        continue; // skip non-alphabetic characters
      }
  
      // Vowels get 1 point, consonants get 2
      points += /[aeiou]/i.test(char) ? 1 : 2;
    }
  
    return points;
  }
  