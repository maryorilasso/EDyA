javascript

class Libro {
  constructor(nombre, isbn, autor, editorial) {
    this.nombre = nombre;
    this.isbn = isbn;
    this.autor = autor;
    this.editorial = editorial;
  }

  descripcionLibro() {
    console.log(
      `Nombre: ${this.nombre}\nISBN: ${this.isbn}\nAutor: ${this.autor}\nEditorial: ${this.editorial}\n`
    );
  }
}

class PilaLibros {
  constructor() {
    this.libros = [];
  }

  agregarLibro(libro) {
    this.libros.push(libro);
    console.log(`${libro.nombre} añadido a la pila.`);
  }

  sacarLibro() {
    if (this.estaVacia()) {
      console.log("La pila está vacía.");
      return null;
    }
    const libro = this.libros.pop();
    console.log(`${libro.nombre} sacado de la pila.`);
    return libro;
  }

  ultimoLibro() {
    if (this.estaVacia()) {
      console.log("La pila está vacía.");
      return null;
    }
    return this.libros[this.libros.length - 1];
  }
  
  tamano(){
    return this.libros.length;
  }

  estaVacia() {
    return this.libros.length === 0;
  }

  mostrarLibros() {
    if (this.estaVacia()) {
      console.log("La pila está vacía.");
      return;
    }
    console.log("Libros en la pila:");
    this.libros.forEach((libro, indice) => {
      console.log(`${indice + 1}. ${libro.nombre}`);
    });
  }
}

const libro1 = new Libro("Código limpio", "978-0132350884", "Robert C. Martin", "Prentice Hall");
const libro2 = new Libro("Programación estructurada", "978-8441527642", "Kernighan y Ritchie", "Pearson");
const libro3 = new Libro("Design Patterns", "978-0201633612", "Erich Gamma", "Addison-Wesley");

const pilaLibros = new PilaLibros();
pilaLibros.agregarLibro(libro1);
pilaLibros.agregarLibro(libro2);
pilaLibros.agregarLibro(libro3);

pilaLibros.mostrarLibros();