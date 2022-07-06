const values = [
  ['one', 'two', 'three'],
  ['a', 'b', 'c'],
  { firstName: 'Carson', lastName: 'Mathers' },
  'gotcha',
  [1, 2, 3]
];

/**
 * logIt()
 * -----------
 * Given an array of values
 * dynamically log each value in the array

   OUTPUT:

   one
   two
   three
   a
   b
   c
   Carson
   Mathers
   gotcha
   1
   2
   3

 * @param {Array} array 
 */

function logIt(array) {
  for(const arr of array) {
    if(typeof arr === `string` || typeof arr === `number`) {
      console.log(arr);
    // } else if (Array.isArray(arr)) {
    //   for(const item of arr) {
    //     console.log(item);
    //   }
    } else {
      for(const k in arr) {
        console.log(arr[k]);
      }
    }
  }
}

logIt(values);
