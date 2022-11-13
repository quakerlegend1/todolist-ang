import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { CommonResponseType } from 'src/app/core/models/core.models'
import { ResultCodeEnum } from 'src/app/core/enums/resultCode.enum'
import { Router } from '@angular/router'

export interface LoginRequestData {
  email: string
  password: string
  rememberMe: boolean
}

export interface MeResponse {
  email: string
  id: number
  login: string
}

@Injectable()
export class AuthService {
  isAuth = false

  constructor(private http: HttpClient, private router: Router) {}
  login(data: LoginRequestData) {
    this.http
      .post<CommonResponseType<{ userId: number }>>(`${environment.baseUrl}/auth/login`, data)
      .subscribe(res => {
        if (res.resultCode === ResultCodeEnum.success) {
          this.router.navigate(['/'])
        }
      })
  }
  logout() {
    this.http.delete<CommonResponseType>(`${environment.baseUrl}/auth/login`).subscribe(res => {
      if (res.resultCode === ResultCodeEnum.success) {
        this.router.navigate(['/login'])
      }
    })
  }

  me() {
    this.http
      .get<CommonResponseType<MeResponse>>(`${environment.baseUrl}/auth/me`)
      .subscribe(res => {
        if (res.resultCode === ResultCodeEnum.success) {
          this.isAuth = true
        }
      })
  }
}
