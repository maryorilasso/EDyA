/* Funciones Array */

/* La propiedad Length devuelve el tamaño del array */

const vegetables = ["Berenjena", "Pepino", "Remolacha", "Pimenton"];
let size = vegetables. length; 

/* El metodo toString() convierte un array en una 
cadena de valores del array separados por comas*/

const vegetables = ["Berenjena", "Pepino", "Remolacha", "Pimenton"];
document.getElementById("demo").innerHTML = vegetables.toLocaleString();

/* El metodo join() es utilizado para unir todos los elementos de un array 
en una unica cadena de texto */

const vegetables = ["Berenjena", "Pepino", "Remolacha", "Pimenton"];
let result = vegetables.join();
console.log(result); // "Berenjena,Pepino,Remolacha,Pimenton"

/* Unir los elementos con un espacio */

const vegetables = ["Berenjena", "Pepino", "Remolacha", "Pimenton"];
let result = vegetables.join(" ");
console.log(result); // "Berenjena Pepino Remolacha Pimenton"


/* El metodo pop() elimina el ultimo elemento del array y devolver ese elemento */

const vegetables = ["Berenjena", "Pepino", "Remolacha", "Pimenton"];
let lastVegetable = vegetables.pop();
console.log(lastVegetable); // "Pimenton"
console.log(vegetables); // ["Berenjena", "Pepino", "Remolacha"]

/* El metodo push se utiliza para añadir uno o mas elementos al final de un array */

const vegetables = ["Berenjena", "Pepino", "Remolacha", "Pimenton"];
let newLength = vegetables.push("Pimenton");
console.log(vegetables); // ["Berenjena", "Pepino", "Remolacha", "Pimenton"]
console.log(newLength); // 4

/* El metodo shitf() elimina el primer elemento de un array y devolver ese elemento */

const vegetables =  ["Berenjena", "Pepino", "Remolacha", "Pimenton"];
let vegetalEliminado = vegetables.shift();
console.log(vegetalEliminado); // 'Berenjena'
console.log(vegetables); // ['Pepino', 'Remolacha', 'Pimenton']

/* El metodo unshift() añade uno o mas elementos al principio de un array 
y devuelve la nueva longitud del array */

const vegetables =  ["Berenjena", "Pepino", "Remolacha", "Pimenton"];
let nuevoArray = vegetables.unshift('Papa', 'Yuca');
console.log(nuevoArray); // 6
console.log(vegetables); // ['Papa', 'Yuca', 'Pepino', 'Remolacha', 'Pimenton']


function esParImparRegular(numero){
    if(number %2 === 0){
        console.log(`${numero} es par`);
    }else{
        console.log(`${numero} es impar`);
    }
}

esParImpar(5);
esParImpar(12);


function esParImparArrow = numero =>{
    if (numero % 2 === 0){
        console.log(`${numero} es par`);
    }else{
        console.log(`${numero} es impar`);
    }
}

esParImparArrow(5);
esParImparArrow(12);
