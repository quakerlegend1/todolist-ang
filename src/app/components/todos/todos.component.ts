import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

interface Todo {
  addedDate: string
  id: string
  order: number
  title: string
}

interface BaseResponse<T = {}> {
  data: T
  messages: string[]
  fieldErrors: string[]
  resultCode: number
}

@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = []
  httpOptions = {
    withCredentials: true,
    headers: {
      'API-KEY': '1cdd9f77-c60e-4af5-b194-659e4ebd5d41',
    },
  }
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos() {
    this.http
      .get<Todo[]>('https://social-network.samuraijs.com/api/1.0/todo-lists', this.httpOptions)
      .subscribe((res: Todo[]) => {
        this.todos = res
      })
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular' + randomNumber
    this.http
      .post<
        BaseResponse<{
          item: Todo
        }>
      >('https://social-network.samuraijs.com/api/1.0/todo-lists', { title }, this.httpOptions)
      .subscribe(res => {
        const newTodo = res.data.item
        this.todos.unshift(newTodo)
      })
  }

  deleteTodo(id: string) {
    this.http
      .delete<BaseResponse>(
        `https://social-network.samuraijs.com/api/1.0/todo-lists/${id}`,
        this.httpOptions
      )
      .subscribe(() => {
        this.todos.filter(todo => todo.id !== id)
      })
  }
}
