import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Store } from '@ngrx/store';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-task-chart',
  templateUrl: './task-chart.component.html',
  styleUrls: ['./task-chart.component.css']
})
export class TaskChartComponent implements OnInit {

  pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Completed', 'Pending'];
  pieChartType: ChartType = 'pie';
  pieChartLegend = true;
  pieChartPlugins = [];

  public pieChartData: ChartDataSets[] = [];

  constructor(private store: Store<{ tasks: Task[] }>) { }

  ngOnInit(): void {
    this.store.select(state => state.tasks).subscribe((res: Task[]) => {

      let completed = res.filter(t => t.isCompleted).length;
      let pending   = res.filter(t => !t.isCompleted).length;

      this.pieChartData = [...this.pieChartData = [], {
        data: [completed, pending],
        label: "Series A"
      }]
    })
  }

}
