
import { printObject, genericFunction, genericFunctionArrow } from './generics/generics';
import { Hero } from './interfaces/hero';
import { Villain } from './interfaces/villains';


//* Función genérica: función que puede recibir cualquier tipo de argumento
//* Ayudan a dar mucha flexibilidad a nuestra aplicación
//* Inconveniente: TS no está pendiente del posible tipo de los objetos. 

// printObject(123);
// printObject( new Date() );
// printObject( { a: 1, b: 2, c: 3 } );
// printObject( [1,2,3,4,5,6,7] );
// printObject( 'Hola Mundo' );
// const name: string = 'Fernando';

//* Al hacer la función genérica, automáticamente identifica el tipo en base al argumento
//* que mandamos. 
// console.log( genericFunction(3.141618).toFixed(2) );//toFixed = números
// console.log( genericFunction( name ).toUpperCase() );//error = toFixed no es string
// console.log( genericFunction( new Date() ).getDate() );

// console.log( genericFunctionArrow(3.141618).toFixed(2) );
// console.log( genericFunctionArrow( name ).toUpperCase() );
// console.log( genericFunctionArrow( new Date() ).getDate() );

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130,
}

console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);




