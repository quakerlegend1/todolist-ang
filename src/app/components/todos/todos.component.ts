import { Component, OnInit } from '@angular/core'
import { Todo, TodosService } from 'src/app/services/todos.service'
import { HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs'

@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos$!: Observable<Todo[]>
  error: string = ''

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    // Подписка
    this.todos$ = this.todosService.todos$
    this.getTodos()
  }

  getTodos() {
    this.todosService.getTodos()
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular' + randomNumber
    this.todosService.createTodo(title)
  }

  deleteTodo() {
    const todoId = '2379553a-63e2-4bfc-8cb9-1dda25aebda2'
    this.todosService.deleteTodo(todoId)
  }
}
