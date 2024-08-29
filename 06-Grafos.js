class person {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.city = null;
        this.nodes = [];
       
    }   
}

class city{
    constructor(name){
        this.name = name;
        this.personas = [];
    }   
}

class Grafo {
    constructor(){
        this.cities = new Map();
        this.personas = new Map();
    }

    addCity(name){
        const city = new City(name);
        this.cities.set(name, city);
        return city;
    }
    addPersona(name, age, nameCity){
        const city = this.cities.get(nameCity);
        if(!city){
            throw new Error(`La ciudad ${nameCity} no existe`);
        }
       
        const persona = new Persona(name, age);
        persona.city = city;
        city.personas.push(persona);
        this.personas.set(name, persona);
        return persona;
    }

    hacerAmigos(nombreP1, nombreP2){
        const persona1 = this.personas.get(nombreP1);
        const persona2 = this.personas.get(nombreP2);
        if (!persona1 || !persona2){
            throw new Error(`Una o ambas personas no existen`);
        }

        persona1.nodes.push(persona2);
        persona2.nodes.push(persona1);
    }
    personasPorCiudad(nameCity){
        const city = this.cities.get(nameCity);
        if(!city){
            throw new Error(`La ciudad ${nameCity} no exite`);
        }

        console.log(`Personas que viven en ${nameCity}:`);
        city.personas.forEach(persona => {
            console.log(`${persona.name}, ${persona.age} años`);   
        });
    }
}

const grafo = new Grafo();
const city1 = grafo.addCity("Barranquilla");
const city2 = grafo.addCity("Medellin");
const city3 = grafo.addCity("Cali");

grafo.addPersona("Alejandra", 20, "Medellin");
grafo.addPersona("Jonathan", 38, "Cali");
grafo.addPersona("Santiago", 18, "Barranquilla");

grafo.hacerAmigos("Jonathan", "Santiago");

grafo.personasPorCiudad("Cali");
grafo.personasPorCiudad("Barranquilla");


