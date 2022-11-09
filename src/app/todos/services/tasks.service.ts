import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { GetTasksResponse, Task } from 'src/app/todos/models/tasks.models'
import { environment } from 'src/environments/environment'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}
  getTasks(todoId: string): Observable<Task[]> {
    return this.http
      .get<GetTasksResponse>(`${environment.baseUrl}/todo-lists/${todoId}/tasks`)
      .pipe(map(res => res.items))
  }
}
