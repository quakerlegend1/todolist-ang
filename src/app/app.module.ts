import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { HomeComponent } from './components/home/home.component'
import { LoginComponent } from './components/login/login.component'
import { TodosComponent } from './components/todos/todos.component'
import { UsersComponent } from './components/users/users.component'
import { ProfileComponent } from './components/profile/profile.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { AppRoutingRoutingModule } from 'src/app/app-routing-routing.module'
import { CredentialsInterceptor } from 'src/app/interceptors/credentials.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TodosComponent,
    UsersComponent,
    ProfileComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingRoutingModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
