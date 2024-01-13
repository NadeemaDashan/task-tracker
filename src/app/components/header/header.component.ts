import { Component, OnInit } from '@angular/core';
import { UiServiceService } from '../../ui/ui-service.service';
import { Subscription } from 'rxjs';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  title: string = "Task-Tracker"
  showAddTask: boolean = true;
  subscription: Subscription | undefined;
  constructor(private uiService: UiServiceService) {

    this.subscription = this.uiService.onToggle().subscribe((task: boolean) => {
      this.showAddTask = task

    })
  }
  ngOnInit(): void {

  }
  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
