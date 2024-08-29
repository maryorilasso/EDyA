class Person {
    constructor(name, arrivedTime) {
        this.name = name;
        this.arrivedTime = arrivedTime;
    }

   
    toString() {
        return `${this.name} arrived at ${this.arrivedTime}`;
    }
}


class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "The queue is empty";
        }
        return this.items.shift();
    }

    peek() {
        if (this.isEmpty()) {
            return "The queue is empty";
        }
        return this.items[0];
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.map(person => person.toString()));
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

let atmQueue = new Queue();


atmQueue.enqueue(new Person("Juan", "08:00"));
atmQueue.enqueue(new Person("María", "08:05"));
atmQueue.enqueue(new Person("Pedro", "08:10"));
atmQueue.enqueue(new Person("Ana", "08:15"));

console.log("Initial ATM Queue:");
atmQueue.print();

console.log("Atendiendo a:", atmQueue.dequeue());

console.log("ATM restante:");
atmQueue.print();

console.log("Siguiente en la fila:", atmQueue.peek());