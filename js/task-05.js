const checkForSpam = function(message) {
  const lowerString = message.toLowerCase();

  const result = lowerString.includes('spam') || lowerString.includes('sale');
  return result;

  // ВАРИАНТ ЧУТЬ ДЛИННЕЕ

  // if (lowerString.includes('spam') || lowerString.includes('sale')) {
  //   return true;
  // } else {
  //   return false;
  // }
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
