class Todo {
   constructor(title, description){
      this.title = title;
      this.description = description;
      this.next = null;
   }
}

class TodoList {
   constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
   }

   append(title, description){
      const newTodo = new Todo(title, description);
      if(!this.head){
         this.head = newTodo;
         this.tail = newTodo;
      }else{
         this.tail.next = newTodo;
         this.tail = newTodo;
      }
      this.length++;
   }

   printTodos(){
      let current = this.head;
      while(current){
         console.log(`Titulo: ${current.title}\nDescripcion: ${current.description}\n`);
         current = current.next;
      }
   }
}

const myTodoList = new TodoList();

myTodoList.append("Comprar el mercado", "Ir al super y mercar");
myTodoList.append("Terminar proyecto", "Terminar el proyecto de EDyA");
myTodoList.append("Hacer cardio", "Hacer burpees"); 

myTodoList.printTodos();