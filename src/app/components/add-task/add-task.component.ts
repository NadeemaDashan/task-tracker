import { Component, OnInit } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../../serivces/task.service';
import { UiServiceService } from '../../ui/ui-service.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent implements OnInit {
  text:string="";
  day:string="";
  reminder:boolean=false;
  showAddTask:boolean=false
  
  constructor(private taskService:TaskService, private uiservice?: UiServiceService){
    uiservice?.onToggle().subscribe((task:boolean)=>{
        this.showAddTask=task;
    })
  }
  

  ngOnInit(): void {
   
}
  onSubmit(){
  const task = {
    "text": this.text,
    "day": this.day,
    "reminder": this.reminder
  }
  if(this.text===""){
    alert("text field is empty try again...")
  }else{
  this.taskService.postTask(task).subscribe()
    this.text=""
    this.day=""
    this.reminder=false 
  }
 
}

}
