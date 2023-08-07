export function rot13(str) {
  // set alphabet and shift length
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const shift = 13;
  // split input into an array
  const split = str.toUpperCase().split("");
  // map each item in array
  const cipher = split.map((char) => {
    // find where each char is located in the alphabet
    const location = alphabet.indexOf(char);
    // check if the current char is a letter
    if (location !== -1) {
      // set how much you want to shift the letter
      const newLocation = (location + shift) % alphabet.length;
      return alphabet[newLocation];
    }
    // return the same char if not a letter
    return char;
  });

  return cipher.join("");
}
