import { Component, OnInit } from '@angular/core'
import { TodosService } from 'src/app/todos/services/todos.service'
import { Observable } from 'rxjs'
import { DomainTodo } from 'src/app/todos/models/todos.models'
import { AuthService } from 'src/app/core/services/auth.service'
import { MyLoggerService } from 'src/myLogger.service'

@Component({
  selector: 'tl-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos$?: Observable<DomainTodo[]>
  todoTitle = ''
  constructor(private todosService: TodosService, private authService: AuthService, private myLogger:MyLoggerService) {}

  ngOnInit(): void {
    //subscribe
    this.todos$ = this.todosService.todos$
    this.todosService.getTodos()
  }

  addTodoHandler() {
    if(this.todoTitle !== "") {
      this.todosService.addTodo(this.todoTitle)
    }
    this.myLogger.info("Новая колоночка ToDo!😎")
    this.todoTitle = ''
  }

  deleteTodo(todoId: string) {
    this.todosService.deleteTodo(todoId)
    this.myLogger.warn("ToDo был удалён!😥")
  }

  editTodo(data: { todoId: string; title: string }) {
    this.todosService.updateTodoTitle(data.todoId, data.title)
    
  }

  logoutHandler() {
    this.authService.logout()
    this.myLogger.warn("Упс!, кажется вы вышли🤷‍♀️")
  }
}
