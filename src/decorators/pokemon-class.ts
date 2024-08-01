//Hicimos un decorador (simple función que expande o añade funcionalidades a un objeto)
//En este caso, al hacer el decorador imprimió todo el constructor de nuestra clase 
//de Pokemon
function printToConsole( constructor: Function) {
    console.log(constructor)
}

//* Factory decorators: 
//puede ser una función de flecha. Pero se suele ver como una función tradicional
//Para ser un factory decorator, debe de retornar una función. 
//Ventaja: Se le puede añadir un argumento a la hora de utilizarlo
const printToConsoleConditional = ( print: boolean = false ): Function => {
    // return () => console.log('Hola Mundo')
    if ( print ) {
        return printToConsole;//Estamos mandando como referencia a la función, no la queremos ejecutar con los ()
    } else {
        return () => {};
    }
}

//@printToConsole
@printToConsoleConditional( false ) //true o false en base a si queremos imprimirlo en consola
export class Pokemon {

    public publicApi: string = 'https://pokeapi.co';

    constructor(
        public name: string,
    ){}
}

