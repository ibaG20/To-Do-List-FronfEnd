import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../model/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url: string = 'http://localhost:8080/tasks';

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.url);
  }

}
