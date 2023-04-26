export class Character{
    HP: number;
    ATK: number;

    constructor(HPc: number, ATKc: number){
        this.HP = HPc;
        this.ATK = ATKc
    }
}

export function createCharacter(HP: number, ATK: number){
    return new Character(HP, ATK)
}

//Manejo de listas de personajes
export interface CharactersData{
    characters: Character[];
}

export function saveCharacters(datos: CharactersData) {
    localStorage.setItem('characters', JSON.stringify(datos));
}

export function loadCharacters(){
    const storedData = localStorage.getItem('characters');
    if (storedData) {
        const parsedData: CharactersData = JSON.parse(storedData);
        return parsedData.characters
    }
    else{
        const dataVacia: Character[] = []
        return dataVacia
    }
}