import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TodosComponent } from './components/todos/todos.component'
import { TodosRoutingModule } from 'src/app/todos/todos-routing.module'
import { TodoComponent } from './components/todos/todo/todo.component'

@NgModule({
  declarations: [TodosComponent, TodoComponent],
  imports: [CommonModule, TodosRoutingModule],
})
export class TodosModule {}
