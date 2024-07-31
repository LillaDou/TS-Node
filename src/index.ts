import { printObject, genericFunction } from "./generics/generics";


//Función genérica: función que puede recibir cualquier tipo de argumento
//Inconveniente: TS no está pendiente del posible tipo de los objetos. 

// printObject(123);
// printObject( new Date() );
// printObject( { a: 1, b: 2, c: 3 } );
// printObject( [1,2,3,4,5,6,7] );
// printObject( 'Hola Mundo' );

console.log( genericFunction(3.141618).toFixed(2) );//toFixed es para números
// console.log( genericFunction('Hola Mundo').toFixed(2) );//da error porque solo es para números, no string
console.log( genericFunction( new Date() ).toFixed(2) );






