import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Task } from 'src/app/todos/models/tasks.models'

@Component({
  selector: 'tl-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task!: Task
  @Output() deleteTaskEvent = new EventEmitter<string>()
  deleteTaskHandler() {
    this.deleteTaskEvent.emit(this.task.id)
  }
}
