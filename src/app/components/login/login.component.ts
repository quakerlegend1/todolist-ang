import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'inst-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl(''),
  })

  get email() {
    return this.loginForm.get('email')
  }

  onSubmit() {
    console.log(this.loginForm.value)
  }

  constructor() {}
}
