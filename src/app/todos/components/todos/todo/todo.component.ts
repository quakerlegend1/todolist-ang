import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { DomainTodo, FilterType } from 'src/app/todos/models/todos.models'
import { TodosService } from 'src/app/todos/services/todos.service'
import { LoggerService } from 'src/app/shared/services/logger.service'

@Component({
  selector: 'tl-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo!: DomainTodo
  @Output() deleteTodoEvent = new EventEmitter<string>()
  @Output() editTodoEvent = new EventEmitter<{ todoId: string; title: string }>()
  isEditMode = false
  newTitle = ''
  constructor(private todosService: TodosService, private loggerService: LoggerService) {}

  deleteTodoHandler() {
    this.deleteTodoEvent.emit(this.todo.id)
  }
  activateEditModeHandler() {
    this.newTitle = this.todo.title
    this.isEditMode = true
  }
  editTitleHandler() {
    this.isEditMode = false
    this.editTodoEvent.emit({ todoId: this.todo.id, title: this.newTitle })
  }

  changeFilter(filter: FilterType) {
    this.todosService.changeFilter(this.todo.id, filter)
  }

  ngOnInit(): void {
    this.loggerService.info(`get Todo: ${this.todo.title}`, this.constructor.name, this.todo)
  }
}
