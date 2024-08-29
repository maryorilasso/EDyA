class Persona {
    constructor(nombre, fechaNacimiento) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.hijos = [];
    }

    addHijo(hijo) {
        this.hijos.push(hijo);
    }
}

let visAbuelo = new Persona("Tomas", "1900-01-01");

let abuelo = new Persona("Diego", "1925-01-03");
visAbuelo.addHijo(abuelo);

let padre = new Persona("Cristian", "1986-07-11");  
abuelo.addHijo(padre);

let hijo1 = new Persona("Sofia", "2004-02-03");
let hijo2 = new Persona("Alejandro", "2007-03-06");

padre.addHijo(hijo1);
padre.addHijo(hijo2);

function preOrder(persona) {
    if (persona) {
        console.log(`${persona.nombre} (${persona.fechaNacimiento})`);
        persona.hijos.forEach(hijo => preOrder(hijo)); 
    }
}

function postOrder(persona) {
    if (persona) {
        persona.hijos.forEach(hijo => postOrder(hijo));
        console.log(`${persona.nombre} (${persona.fechaNacimiento})`);
    }
}

function inOrder(persona) {
    if (persona) {
        if (persona.hijos.length > 0) {
            inOrder(persona.hijos[0]);
        }

        console.log(`${persona.nombre} (${persona.fechaNacimiento})`);
        for (let i = 1; i < persona.hijos.length; i++) {
            inOrder(persona.hijos[i]);
        }
    }
}

console.log("Pre-order traversal:");
preOrder(visAbuelo);  

console.log("\nPost-order traversal:");
postOrder(visAbuelo);  

console.log("\nIn-order traversal:");
inOrder(visAbuelo);  
