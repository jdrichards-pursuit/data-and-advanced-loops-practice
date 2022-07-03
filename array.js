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
 for(let i = 0; i < array.length; i++){
  if(typeof array[i] === `object`){
    for(val in array[i]){
      console.log(array[i][val])
    }
  }
  else{
    console.log(array[i])
  }
 }
}

logIt(values);

