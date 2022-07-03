// PERSON ARGUMENT DATA:
const user = {
  firstName: 'Carol',
  lastName: 'Woods',
  favColors: ['red', 'blue', 'green'],
  address: {
    street: '223 Constitution Rd',
    city: 'Bochum',
    zip: '33944-3394'
  }
};

/**
 *
 * listPerson()
 * -------------
 * Independently log every item in an object. Make sure your solution
 * is dynamic and does not just serve the given object.
 * 
 * OUTPUT SHOULD BE:
   Carol
   Woods
   red
   blue
   green
   223 Constitution Rd
   Bochum
   33944-3394
 
 * @param {Object} person
 */

function listPerson(person) {
  for(key in person){
    if(typeof person[key] === `object`){
      for(let val in person[key]){
        console.log(person[key][val])
      }
    }
    else{
      console.log(person[key])
    }
  }
}

listPerson(user);
