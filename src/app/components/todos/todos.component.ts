import { Component, OnInit } from '@angular/core'
import { Todo, TodosService } from 'src/app/services/todos.service'
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = []
  error: string = ''

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos() {
    this.todosService.getTodos().subscribe(
      (res: Todo[]) => {
        this.todos = res
      },
      (error: HttpErrorResponse) => {
        this.error = error.message
      }
    )
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular' + randomNumber
    this.todosService.createTodo(title).subscribe(res => {
      const newTodo = res.data.item
      this.todos.unshift(newTodo)
    })
  }

  deleteTodo(id: string) {
    this.todosService.getTodos().subscribe(() => {
      this.todos.filter(todo => todo.id !== id)
    })
  }
}
