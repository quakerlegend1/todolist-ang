import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs'

interface AuthMeResponse {
  resultCode: number
  messages: string[]
  data: {
    id: number
    email: string
    login: string
  }
}
enum ResultCodes {
  success = 0,
  error = 1,
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth = false
  constructor(private http: HttpClient) {}
  authMe() {
    this.http.get<AuthMeResponse>(`${environment.baseNetworkUrl}/auth/me`).subscribe(res => {
      if (res.resultCode === ResultCodes.success) {
        this.isAuth = true
      }
    })
  }
}
