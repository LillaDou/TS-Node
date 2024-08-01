
//Función genérica:
export const printObject = ( argument: any ) => {
    console.log( argument );
}

//Para convertir una función tradicional en genérica, añadimos el <>.
//Usualmente se utiliza <T>. Es el estandar para indicar que es un genérico
//Puede ser cualquier letra o palabra siempre y cuando esté dentro de <> y no sean palabras reservadas
//Esta T pasará a ser el tipo de nuestro argumento
export function genericFunction<T>( argument: T ): T {
    return argument;
}

export const genericFunctionArrow = <T>( argument: T ) => argument;
