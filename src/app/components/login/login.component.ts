import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'inst-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })
  onSubmit() {
    console.log(this.loginForm.value)
  }

  constructor() {}
}
