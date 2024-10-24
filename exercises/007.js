// TODO: https://tech-docs.corndel.com/js/functions.html

/**
 * Calls the functions in the correct order to log the messages:
 * 'first!', 'middle!', 'last!'
 *
 * @returns {number} The product of the three returned values (i.e. multiply them)
 */
export function main() {
    let product = 1
    product *= meFirst()
    product *= meMiddle()
    product *= meLast()
    return product
}

function meFirst() {
  console.log('first!')
  return 17
}

function meMiddle() {
  console.log('middle!')
  return 19
}

function meLast() {
  console.log('last!')
  return 23
}
