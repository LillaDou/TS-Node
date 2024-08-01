import { Hero } from "../classes/Hero"; //Export manual

//* import powers from "./data/powers"; //Expor por defecto

//Se puede crear alias de las importaciones añadiendo lo siguiente: 
//* import { Hero as Superhero} from "./classes/Hero";
//Luego utilizamos Superhero como el nombre de la clase

//* import * as HeroClasses from "./classes/Hero";
//Indicamos que queremos exportar todos los elementos exportados del archivo de Hero (*), 
//y lo usaremos con el alias HeroClasses
//Se usaría luego de la siguiente manera: 
//const ironman = new HeroClasses.Hero(...)



const ironman = new Hero('IronMan', 1, 55);

console.log(ironman);
console.log(ironman.power);








