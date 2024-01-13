import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Task } from '../Task';
import { Observable } from 'rxjs';

const httpOption = {
  headers : new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  private apiUrl='http://localhost:8888/tasks';

  constructor(private http:HttpClient) { }

  getTask():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }
  deleteTask(task: Task){
    let url = `${this.apiUrl}/${task.id}`;
    console.log(task.id)
    return this.http.delete<Task>(url);
  }
  updateTask(task:Task){
    let url = `${this.apiUrl}/${task.id}`;
    return this.http.patch(url,task,httpOption);
  }
  postTask(task:any):Observable<Task>{
    return this.http.post<Task>(this.apiUrl,task,httpOption);
  }
}
