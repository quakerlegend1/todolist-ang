import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from 'src/app/components/home/home.component'
import { LoginComponent } from 'src/app/components/login/login.component'
import { TodosComponent } from 'src/app/components/todos/todos.component'
import { UsersComponent } from 'src/app/components/users/users.component'
import { ProfileComponent } from 'src/app/components/profile/profile.component'
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'users', component: UsersComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
