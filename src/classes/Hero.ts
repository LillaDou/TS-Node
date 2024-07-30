import powers from "../data/powers";


export class Hero {
    constructor(
        public name: string,
        public powerId: number, 
        public age: number
    ){}

    //Return: busca dentro de los poderes, el poder cuyo id es igual al powerId. Y después, 
    //incicame el desc. Si esto no existe, indica 'Not found'
    get power(): string {
        return powers.find( power => power.id === this.powerId )?.desc || 'Not Found';
    }
    // el ? hace un null check: esto da null o undefined?
    // el ! obliga a TS que confie en nuestro criterio, que hay algo ahí
}

export class Hero2 {}
export class Hero3 {}

