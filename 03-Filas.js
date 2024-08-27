class books {
    constructor(){
        this.stack = {};
        this.name ,
        this.ISBN ,
        this.autor,
        this.editorial, 
        this.count = 0;   
     }
    
     push(book){
        this.stack[this.count] = book;
        this.count++;
        return this.stack;
     }

     pop(){
        this.count--;
        const book = this.stack[this.count];
        delete this.stack[this.count];
        return books; 
     }

     peek(){
        return this.stack[this.count -1];
     }

     size(){
        return this.count;
     }

     print(){
        console.log(this.stack);
     }
}