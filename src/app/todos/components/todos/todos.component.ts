import { Component, OnInit } from '@angular/core'
import { TodosService } from 'src/app/todos/services/todos.service'
import { Observable } from 'rxjs'
import { DomainTodo } from 'src/app/todos/models/todos.models'

@Component({
  selector: 'tl-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos$?: Observable<DomainTodo[]>
  todoTitle = ''
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    //subscribe
    this.todos$ = this.todosService.todos$
    this.todosService.getTodos()
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
}
