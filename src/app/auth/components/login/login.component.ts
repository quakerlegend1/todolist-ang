import { Component} from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from 'src/app/core/services/auth.service'
import { MyLoggerService } from 'src/myLogger.service'


@Component({
  selector: 'tl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,5}$'),
    ]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    rememberMe: new FormControl(false),
  })
 
  constructor(private authService: AuthService, private myLogger: MyLoggerService) {
    // console.log(this.authService.login)
  }
  
  get email() {
    return this.loginForm.get('email')
  }

  get password() {
    return this.loginForm.get('password');
  }

  onLoginSubmit() {
    const value = this.loginForm.value;
    this.authService.login(value);
    this.myLogger.warn("Вы отправили данные на сервер")
    // console.log(this.loginForm.get("email")?.valid)
    // console.log(this.loginForm.get("password")?.valid)
  }
}

