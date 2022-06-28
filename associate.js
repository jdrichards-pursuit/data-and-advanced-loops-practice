const ticketTypes = {
  general: {
    description: 'General Admission',
    priceInCents: {
      child: 2000,
      adult: 3000,
      senior: 2500
    }
  },
  membership: {
    description: 'Membership Admission',
    priceInCents: {
      child: 1500,
      adult: 2800,
      senior: 2300
    }
  },
  extras: {
    movie: {
      description: 'Movie Access',
      priceInCents: {
        child: 1000,
        adult: 1000,
        senior: 1000
      }
    },
    education: {
      description: 'Education Access',
      priceInCents: {
        child: 1000,
        adult: 1200,
        senior: 1200
      }
    },
    terrace: {
      description: 'Terrace Access',
      priceInCents: {
        child: 500,
        adult: 1000,
        senior: 1000
      }
    }
  }
};

//Given this object that will be used for the info argument when the function is called,
const ticketInfo = {
  ticketType: 'general',
  entrantType: 'child'
};

/*  along with the ticketTypes object, above, which will be used as the tickets argument when the function is called...

INSTRUCTIONS:
 Return a string that says:

'General Admission for a child is $20.00'

*/

function findPrice(tickets, info) {}

console.log(findPrice(ticketTypes, ticketInfo));
