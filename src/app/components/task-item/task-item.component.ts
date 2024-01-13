import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../serivces/task.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent implements OnInit{
  @Input() tasks:Task[]=[];
  faTimes=faTimes;
  
  constructor(private taskService:TaskService){
    
  } 
  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks)=>{
        this.tasks=tasks;
    });
  }
  deleteItem(task:Task){
    this.taskService.deleteTask(task).subscribe(()=>{
      this.tasks= this.tasks.filter((t)=>t.id !== task.id)
    });
  }
  onToggle(task:Task){
     task.reminder=!task.reminder;
     console.log("hello");
      this.taskService.updateTask(task).subscribe();
  }
  refresh(task:Task){
      this.tasks.push(task);
      this.ngOnInit();
  }
  toggleAddTask(){
      console.log('toiggle');
  }
}
