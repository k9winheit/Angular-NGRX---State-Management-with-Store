import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from 'src/app/models/Task';
import { TodoActionTypes } from 'src/app/shared/enum/todo-action-types.enum';
 import { TaskAdd } from 'src/app/actions/task.actions';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.css']
})
export class TaskEditorComponent implements OnInit {

  id : number ; 
  constructor(private store : Store<{tasks :Task[]}>) { } 

  ngOnInit(): void {   
    this.getMaxIdByStore();
  }


  createTask(taskForm : NgForm){  
    let newTask: Task = {
      id: this.id,
      name: taskForm.value.name,
      place: taskForm.value.place,
      isCompleted: false
    }   
    this.store.dispatch(new TaskAdd(newTask));    
    taskForm.reset();   
    this.getMaxIdByStore();
  }
  

  getMaxIdByStore = ()=>{
    this.store.select(state => state.tasks).subscribe((res)=>{     
      this.id = res.length > 0 ? res.map(t => t.id).length + 1 : 1 
    });
  }


}
