// TODO: https://tech-docs.corndel.com/js/functions.html

/**
 * Returns 'fizz' if the number is divisible by 3,
 * 'buzz' if divisible by 5, and 'fizzbuzz' if divisible by both.
 *
 * Returns an empty string if the number is not divisible by 3 or 5.
 *
 * @param {number} num The number to be checked.
 * @returns {string} 'fizz', 'buzz', 'fizzbuzz' or ''
 */
export function fizzBuzz(num) {
    if(num % 15 == 0){
      return 'fizzbuzz'
    } else if (num % 3 == 0){
      return 'fizz'
    } else if (num % 5 == 0){
      return 'buzz'
    } else {
      return ''
    }
}
