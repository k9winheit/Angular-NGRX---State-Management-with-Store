import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import {TodoReducer} from './reducers/task.reducer'
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './components/task/task-list.component';
import { TaskEditorComponent } from './components/task-editor/task-editor.component';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';
import { TaskChartComponent } from './components/task-chart/task-chart.component';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [AppComponent, TaskListComponent, TaskEditorComponent, TaskChartComponent],
  imports: [
    BrowserModule,
    FormsModule, 
    ChartsModule,  
    StoreModule.forRoot({
      tasks: TodoReducer,
    }),
    StoreDevtoolsModule.instrument({})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
