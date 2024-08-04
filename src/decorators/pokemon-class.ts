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



//* Decorador para bloquear prototipo
//este va a prevenir que accidentalmente/intencionadamente alguien vaya a hacer una
//expansión de ciertas propiedades/métodos en una clase. 
const bloquearPrototipo = function( constructor: Function) {
    Object.seal( constructor )
    Object.seal( constructor.prototype )
}
//Si no pusiésemos este decorador, tal y como vemos en el index, podríamos añadir 
//el prototipo de Pikachu a nuestra clase. Con este decorador, no permitimos que se hagan
//cambios al constructor y al prototipo, o en general, que se sobreescriban datos en nuestras clases 


//*Factory decorator para un método:
//Target: dependerá de lo que coloquemos
//PropertyKey: nombre de nuestro método para el cual pondremos el decorador
//Descriptor: puede servir para hacer el read only. Solo se utiliza cuando queremos decorar un método. 
function CheckValidPokemonId() {
    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        
        const originalMethod = descriptor.value;

        //El argumento del descriptor.value va a ser el mismo argumento de la función
        //a la que queremos añadir el decorador
        descriptor.value = ( id: number ) => {
            if( id < 1 || id > 800 ) {
                return console.error('El id del pokemon debe de estar entre 1 y 800');
            } else {
                originalMethod( id );
            }
        }
        // descriptor.value = () => console.log('Hola Mundo');

    }
}


//*Decorador de propiedades - read-only
//Es un factory decorator, por lo que debe de regresar otra función
//Al decorar una propiedad, no existe un descriptor como tal. 
//Cuando decoramos una propiedad, deberíamos retornar un property descriptor (crear el descriptor)
//El this es una instancia de nuestra clase
function readOnly ( isWritable: boolean = true ): Function {
    return function( target: any, propertyKey: string ) {

        const descriptor: PropertyDescriptor = {
            get( ) {
                console.log(this);
                return 'Fernando';
            },
            set(this, val) {
            //3 argumentos: this (instancia de la clase)
            //propertyKey: nombre de la propiedad que vamos a decorar
            //{}: Property Descriptor. Definimos cómo queremos que funcione
                Object.defineProperty( this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false,
                })
            }
        }

        return descriptor;
    }
}



//Se pueden anidar decoradores. Se van a ejecutar en orden secuencial
//@printToConsole
@bloquearPrototipo
@printToConsoleConditional( false ) //true o false en base a si queremos imprimirlo en consola
export class Pokemon {

    @readOnly()//si le ponemos false, si podemos hacer cambio. En true, solo es readonly
    public publicApi: string = 'https://pokeapi.co';

    constructor(
        public name: string,
    ){}

    @CheckValidPokemonId()
    savePokemonToDB( id: number) {
        console.log(`Pokemon guardado en DB ${ id }`)
    }
    //Con los decoradores de métodos, podemos hacer validaciones. De esta manera no
    //tenemos que copiar código múltiples veces en métodos, sino que ya irá incorporado
    //el método con el decorador 
    //Ponemos los paréntesis al decorador pues es un factory decorator
}

