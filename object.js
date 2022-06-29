//INSTRUCTION: Log every item in object

/**
 * OUTPUT SHOULD BE:
 Carol
 Woods
 red
 blue
 green
 223 Constitution Rd
 Bochum
 33944-3394
 */

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
 
 * @param {object} person
 */

function listPerson(person) {}

listPerson(user);
