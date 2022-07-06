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
  for(const k in person) {
    if(typeof person[k] === `string` || typeof person[k] === `number`) {
      console.log(person[k]);
    } else {
      for(const i in person[k]) {
        console.log(person[k][i]);
      }
    }
  }
}

listPerson(user);
