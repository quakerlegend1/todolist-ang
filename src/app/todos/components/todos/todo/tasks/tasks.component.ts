import { Component, Input, OnInit } from '@angular/core'
import { TasksService } from 'src/app/todos/services/tasks.service'
import { Observable } from 'rxjs'
import { Task } from 'src/app/todos/models/tasks.models'
import { map } from 'rxjs/operators'

@Component({
  selector: 'tl-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  @Input() todoId!: string
  tasks$?: Observable<Task[]>
  taskTitle = ''
  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    //subscribe
    this.tasks$ = this.tasksService.tasks$.pipe(
      map(tasks => {
        const tasksForTodo = tasks[this.todoId]
        return tasksForTodo
      })
    )
    this.tasksService.getTasks(this.todoId)
  }

  addTaskHandler() {
    this.tasksService.addTask(this.todoId, this.taskTitle)
    this.taskTitle = ''
  }
}
