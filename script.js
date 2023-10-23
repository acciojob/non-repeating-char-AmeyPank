function firstNonRepeatedChar(str) {
  const charMap = {};
  for (let i = 0; i < str.length; i++) {
    if (charMap[str[i]]) {
      charMap[str[i]]++;
    } else {
      charMap[str[i]] = 1;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (charMap[str[i]] === 1) {
      return str[i];
    }
  }
  return null;
}

const input = prompt("Enter a string");
const result = firstNonRepeatedChar(input);
if (result) {
  alert(`The first non-repeated character is:${result}`);
} else {
  alert("There are no non-repeated characters in the string.");
}
