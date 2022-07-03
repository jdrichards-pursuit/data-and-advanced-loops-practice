// DINOSAUR DATA:
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

//ROOMS DATA:
const rooms = [
  {
    roomId: 'zwfsfPU5u',
    name: 'Entrance Room',
    requiredTicketPermissions: [],
    dinosaurs: ['iOVNUcv-ww', 'BFjjLjea-O']
  },
  {
    roomId: 'A6QaYdyKra',
    name: 'Ticket Center',
    requiredTicketPermissions: [],
    dinosaurs: ['GGvO1X9Zeh']
  },
  {
    roomId: 'aIA6tevTne',
    name: 'Coat Check Room',
    requiredTicketPermissions: [],
    dinosaurs: []
  },
  {
    roomId: 'dpQnu5wgaN',
    name: 'Ellis Family Hall',
    requiredTicketPermissions: [],
    dinosaurs: [
      'YLtkN9R37', // Allosaurus
      'BFjjLjea-O', // Brachiosaurus
      'iOVNUcv-ww' // Compsognathus
    ]
  },
  {
    roomId: 'L72moIRcrX',
    name: 'Kit Hopkins Education Wing',
    requiredTicketPermissions: ['education'],
    dinosaurs: ['U9vuZmgKwUr', 'BFjjLjea-O']
  }
];

/**
 * associateDinosaur()
 * -------------------
 * 
 * Return a string of all dinosaurs associated with the room 
 * represented by the parameter `id` in the 
 * associateDinosaur function.

   FOR EXAMPLE if the roomId argument input was 'L72moIRcrX',
   the output should be:

   EXAMPLE OUTPUT:
 
    Dinosaurs associated with the Kit Hopkins Education Wing:
    ----------------------------------------------------------
    Xenoceratops - (alien horned face)
    Brachiosaurus - (arm lizard)

    For information on creating a new line in JavaScript using \n, reference:
    https://sebhastian.com/new-line-javascript/

 * @param {Object[]} dinoRooms
 * @param {Object[]} dinos
 * @param {string} id
 * @returns {string} Returns a dynamic string
 */

function associateDinosaur(dinoRooms, dinos, id) {
  let location = ``
  let idArr = null
  let dinoNames = ``
  for(let obj of rooms){
    if(obj[`roomId`] === id){
      location = obj[`name`]
      idArr = obj[`dinosaurs`]
      for (let i= 0; i < dinosaurs.length; i++){
        if(idArr.includes(dinosaurs[i][`dinosaurId`])){
          dinoNames += `${dinosaurs[i][`name`]} - (${dinosaurs[i][`meaningOfName`]}) \n`
        }
      }
    }
  }
   return `Dinosaurs associated with the ${location}:\n${dinoNames}`
}

console.log(associateDinosaur(rooms, dinosaurs, 'zwfsfPU5u',));
