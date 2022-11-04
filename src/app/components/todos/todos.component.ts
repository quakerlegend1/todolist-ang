import { Component, OnInit, OnDestroy } from '@angular/core'
import { Todo, TodosService } from 'src/app/services/todos.service'
import { HttpErrorResponse } from '@angular/common/http'
import { Subscription } from 'rxjs'

@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit, OnDestroy {
  todos: Todo[] = []
  error: string = ''
  subscription: Subscription = new Subscription()

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.getTodos()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  getTodos() {
    this.subscription.add(
      this.todosService.getTodos().subscribe(
        (res: Todo[]) => {
          this.todos = res
        },
        (error: HttpErrorResponse) => {
          this.error = error.message
        }
      )
    )
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular' + randomNumber
    this.subscription.add(
      this.todosService.createTodo(title).subscribe(res => {
        const newTodo = res.data.item
        this.todos.unshift(newTodo)
      })
    )
  }

  deleteTodo(id: string) {
    this.subscription.add(
      this.todosService.getTodos().subscribe(() => {
        this.todos.filter(todo => todo.id !== id)
      })
    )
  }
}
