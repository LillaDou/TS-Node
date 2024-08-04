import { Pokemon } from "./decorators/pokemon-class";


const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu';
//Con esto estamos intentando expandir el prototipo de la clase de Pokemon 
//añadiendo una nueva propiedad. Ponemos 'as any' para ver el ejemplo y que no nos salte
//un error

// console.log(charmander);
// charmander.savePokemonToDB(50);

charmander.publicApi = 'https:...';
console.log(charmander);
