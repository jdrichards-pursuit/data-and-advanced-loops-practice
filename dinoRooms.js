const dinosaurs = [
  {
    dinosaurId: 'YLtkN9R37',
    name: 'Allosaurus',
    pronunciation: 'AL-oh-sore-us',
    meaningOfName: 'other lizard',
    diet: 'carnivorous',
    lengthInMeters: 12,
    period: 'Late Jurassic',
    info: 'Allosaurus was an apex predator in the Late Jurassic in North America.'
  },
  {
    dinosaurId: 'GGvO1X9Zeh',
    name: 'Apatosaurus',
    pronunciation: 'ah-PAT-oh-sore-us',
    meaningOfName: 'deceptive lizard',
    diet: 'herbivorous',
    lengthInMeters: 21,
    period: 'Late Jurassic',
    info: "Named the 'deceptive lizard' because its skull was confused with those of other sauropods until 1909."
  },
  {
    dinosaurId: 'BFjjLjea-O',
    name: 'Brachiosaurus',
    pronunciation: 'BRAK-ee-oh-sore-us',
    meaningOfName: 'arm lizard',
    diet: 'herbivorous',
    lengthInMeters: 30,
    period: 'Late Jurassic',
    info: 'Brachiosaurus was a large, North American sauropod dinosaur with an arch encircling its nasal opening.'
  },
  {
    dinosaurId: 'iOVNUcv-ww',
    name: 'Compsognathus',
    pronunciation: 'komp-sog-NATH-us',
    meaningOfName: 'pretty jaw',
    diet: 'carnivorous',
    lengthInMeters: 0.65,
    period: 'Late Jurassic',
    info: 'Compsognathus was small and bipedal, roughly the size of a turkey. It lived in Europe and was the first dinosaur genus to be portrayed with feathers.'
  },
  {
    dinosaurId: 'U9vuZmgKwUr',
    name: 'Xenoceratops',
    pronunciation: 'ZEE-no-SEH-ruh-tops',
    meaningOfName: 'alien horned face',
    diet: 'herbivorous',
    lengthInMeters: 6,
    period: 'Early Cretaceous',
    info: 'Xenoceratops had horns and a bony frill with elaborate ornamentation of projections, knobs, and spikes.'
  }
];

const rooms = [
  {
    roomId: 'zwfsfPU5u', // 1
    name: 'Entrance Room',
    requiredTicketPermissions: [],
    dinosaurs: ['iOVNUcv-ww', 'BFjjLjea-O']
  },
  {
    roomId: 'A6QaYdyKra', // 2
    name: 'Ticket Center',
    requiredTicketPermissions: [],
    dinosaurs: ['GGvO1X9Zeh']
  },
  {
    roomId: 'aIA6tevTne', // 3
    name: 'Coat Check Room',
    requiredTicketPermissions: [],
    dinosaurs: []
  },
  {
    roomId: 'dpQnu5wgaN', // 4
    name: 'Ellis Family Hall',
    requiredTicketPermissions: [],
    dinosaurs: [
      'YLtkN9R37', // Apatosaurus
      'BFjjLjea-O', // Zephyrosaurus
      'iOVNUcv-ww' // Vulcanodon
    ]
  },
  {
    roomId: 'L72moIRcrX', // 5
    name: 'Kit Hopkins Education Wing',
    requiredTicketPermissions: ['education'],
    dinosaurs: ['U9vuZmgKwUr', 'BFjjLjea-O']
  }
];

module.exports = rooms;

/* List all dinosaurs associated with the room represented by the parameter id

   FOR EXAMPLE, If the roomId was 'L72moIRcrX' the output should be:

   Dinosaurs associated with the Kit Hopkins Education Wing:
   ----------------------------------------------------------
   Xenoceratops - (alien horned face)
   Brachiosaurus - (arm lizard)
*/

/* For information on creating a new line in JavaScript using \n, reference:
   https://sebhastian.com/new-line-javascript/
 */

function associateDinosaur(dinoRooms, dinos, id) {}

console.log(associateDinosaur(rooms, dinosaurs, 'L72moIRcrX'));
