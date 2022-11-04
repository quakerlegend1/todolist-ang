import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

export interface Todo {
  addedDate: string
  id: string
  order: number
  title: string
}

export interface BaseResponse<T = {}> {
  data: T
  messages: string[]
  fieldErrors: string[]
  resultCode: number
}

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  httpOptions = {
    withCredentials: true,
    headers: {
      'API-KEY': environment.apiKey,
    },
  }
  constructor(private http: HttpClient) {}
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.baseUrl}/todo-lists`, this.httpOptions)
  }

  createTodo(title: string): Observable<
    BaseResponse<{
      item: Todo
    }>
  > {
    return this.http.post<
      BaseResponse<{
        item: Todo
      }>
    >(`${environment.baseUrl}/todo-lists`, { title }, this.httpOptions)
  }

  deleteTodo(id: string): Observable<BaseResponse> {
    return this.http.delete<BaseResponse>(
      `${environment.baseUrl}/todo-lists/${id}`,
      this.httpOptions
    )
  }
}
