import { Component } from '@angular/core';
import { Task } from '../../Task';
import { TASK } from '../../mock-task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Task[] = TASK;

}
