import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { BehaviorSubject } from 'rxjs'
import { Todo } from 'src/app/todos/models/todos.models'
import { CommonResponseType } from 'src/app/core/models/core.models'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos$ = new BehaviorSubject<Todo[]>([])

  constructor(private http: HttpClient) {}

  getTodos() {
    this.http.get<Todo[]>(`${environment.baseUrl}/todo-lists`).subscribe(res => {
      this.todos$.next(res)
    })
  }

  addTodo(title: string) {
    this.http
      .post<
        CommonResponseType<{
          item: Todo
        }>
      >(`${environment.baseUrl}/todo-lists`, { title })
      .pipe(
        map(res => {
          const stateTodos = this.todos$.getValue()
          const newTodo = res.data.item
          return [newTodo, ...stateTodos]
        })
      )
      .subscribe(res => {
        this.todos$.next(res)
      })
  }

  deleteTodo(todoId: string) {
    this.http
      .delete<CommonResponseType>(`${environment.baseUrl}/todo-lists/${todoId}`)
      .pipe(
        map(() => {
          const stateTodo = this.todos$.getValue()
          return stateTodo.filter(el => el.id !== todoId)
        })
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }
  updateTodoTitle(todoId: string, title: string) {
    this.http
      .put<CommonResponseType>(`${environment.baseUrl}/todo-lists/${todoId}`, { title })
      .pipe(
        map(() => {
          const stateTodo = this.todos$.getValue()
          return stateTodo.map(todo => (todo.id === todoId ? { ...todo, title } : todo))
        })
      )
      .subscribe(res => {
        this.todos$.next(res)
      })
  }
}
