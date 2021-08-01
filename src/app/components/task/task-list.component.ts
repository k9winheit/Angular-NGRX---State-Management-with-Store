import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/Task';
import { Store } from '@ngrx/store';
 import { TaskToggle, TaskRemove } from 'src/app/actions/task.actions';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {

  tasks: Observable<Task[]> ;
  constructor(private store: Store<{ tasks: Task[] }>) {

  }

  ngOnInit(): void {    
    this.tasks = this.store.select(state => state.tasks);
   }

   toggleTask(index: number) {   
    this.store.dispatch(new TaskToggle(index))
  }

  removeTask(index: number) {  
    this.store.dispatch(new TaskRemove(index))
  }

}
