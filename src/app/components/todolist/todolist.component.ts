import { Component, OnInit } from '@angular/core';
import { Todolist } from 'src/app/models/todolist';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit{
tasks: Todolist[]=[];
newTask: string =' ';
editingId: number | null = null;

private loadTodos(): void{
  const savedTodos = localStorage.getItem('tasks');
  if(savedTodos){
    this.tasks = JSON.parse(savedTodos);
  }
}

private savedTodos(): void{
  localStorage.setItem('tasks', JSON.stringify(this.tasks));
}

addOrUpdate(){
  if(this.editingId !== null){
const todoedit = this.tasks.find(task=>task.id === this.editingId);
console.log(todoedit);
console.log(this.newTask);


if(todoedit){
  todoedit.text = this.newTask;
}
this.editingId = null;
  }
 else if(this.newTask){
    this.tasks.push({text: this.newTask, id: Date.now()})
    console.log(this.tasks);
   
    
  }
  this.newTask=' ';
this.savedTodos();
}

deleteTask(id:number){
console.log(id);
this.tasks = this.tasks.filter(todo => todo.id !== id);
this.savedTodos();
}

startEditing(task: Todolist){
console.log(task);
this.editingId = task.id;
this.newTask = task.text;
this.savedTodos();
}


constructor(){

}
  ngOnInit(): void {
      this.loadTodos();
  }
}
