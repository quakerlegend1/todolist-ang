import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, throwError } from 'rxjs'
import { environment } from 'src/environments/environment'
import { catchError, map } from 'rxjs/operators'

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
  todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([])
  httpOptions = {
    withCredentials: true,
    headers: {
      'API-KEY': environment.apiKey,
    },
  }
  constructor(private http: HttpClient) {}
  getTodos() {
    this.http
      .get<Todo[]>(`${environment.baseUrl}/todo-lists`, this.httpOptions)
      .pipe(
        catchError(err => {
          return throwError(err)
        })
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  createTodo(title: string) {
    this.http
      .post<
        BaseResponse<{
          item: Todo
        }>
      >(`${environment.baseUrl}/todo-lists`, { title }, this.httpOptions)
      .pipe(
        map(res => {
          const newTodo = res.data.item
          const stateTodos = this.todos$.getValue()
          return [newTodo, ...stateTodos]
        })
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  deleteTodo(id: string) {
    this.http
      .delete<BaseResponse>(`${environment.baseUrl}/todo-lists/${id}`, this.httpOptions)
      .pipe(
        map(() => {
          return this.todos$.getValue().filter(todo => todo.id !== id)
        })
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }
}
