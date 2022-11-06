import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

interface UsersResponse {
  items: User[]
  totalCount: number
}

export interface User {
  name: string
  id: number
  photos: {
    small: string
    large: string
  }
  followed: boolean
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders().append('api-key', environment.apiKey),
    withCredentials: true,
  }
  getUsers(): Observable<User[]> {
    return this.http
      .get<UsersResponse>(`${environment.baseNetworkUrl}/users`, this.httpOptions)
      .pipe(map(el => el.items))
  }
}
