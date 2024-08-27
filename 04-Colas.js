class filaCajero {
    constructor(){
        this.queue = [];
    
    }
    enqueue(persona){
        this.queue.push(persona);
        return this.queue;
    }
    dequeue(){
        return this.queue.shift();
    }
    peek(){
        return this.queue[0];
    }
    size(){
        return this.queue.length;
    }
    isEmpty(){
        return this.queue.length === 0;
    }
    print(){
        return this.queue;
    }

}

const atmQueue = new filaCajero();

console.log(atmQueue.enqueue( name= 'Alejandra', ATM= '14:00'));
console.log(atmQueue.enqueue(name ='Alejandro', ATM = '22:00'));
console.log(atmQueue.enqueue('Mariana', '21:00'));
console.log(atmQueue.enqueue('Leticia', '22:00'));

console.log(atmQueue.dequeue());
console.log(atmQueue.peek());