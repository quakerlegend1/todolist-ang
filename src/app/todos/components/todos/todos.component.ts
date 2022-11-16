import { Component, OnInit } from '@angular/core'
import { TodosService } from 'src/app/todos/services/todos.service'
import { Observable } from 'rxjs'
import { DomainTodo } from 'src/app/todos/models/todos.models'
import { AuthService } from 'src/app/core/services/auth.service'
import { LoggerService } from 'src/app/shared/services/logger.service'

@Component({
  selector: 'tl-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos$?: Observable<DomainTodo[]>
  todoTitle = ''
  constructor(
    private todosService: TodosService,
    private authService: AuthService,
    private loggerService: LoggerService
  ) {}

  ngOnInit(): void {
    //subscribe
    this.todos$ = this.todosService.todos$
    this.todosService.getTodos()
    this.loggerService.warn(`get todos from server `)
  }

  addTodoHandler() {
    this.todosService.addTodo(this.todoTitle)
    this.todoTitle = ''
  }

  deleteTodo(todoId: string) {
    this.todosService.deleteTodo(todoId)
  }

  editTodo(data: { todoId: string; title: string }) {
    this.todosService.updateTodoTitle(data.todoId, data.title)
  }

  logoutHandler() {
    this.authService.logout()
  }
}
