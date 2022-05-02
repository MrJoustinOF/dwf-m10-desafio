export const capitalizeWord = (word: string): string => {
  const firstChar = word.charAt(0).toUpperCase();
  const rest = word.slice(1, word.length);

  return firstChar + rest;
};
