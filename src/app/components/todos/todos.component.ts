import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

interface Todo {
  addedDate: string
  id: string
  order: number
  title: string
}

@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = []
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos() {
    this.http
      .get<Todo[]>('https://social-network.samuraijs.com/api/1.0/todo-lists', {
        withCredentials: true,
        headers: {
          'API-KEY': '1cdd9f77-c60e-4af5-b194-659e4ebd5d41',
        },
      })
      .subscribe((res: Todo[]) => {
        this.todos = res
      })
  }
}
