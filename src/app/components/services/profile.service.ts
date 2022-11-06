import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs'

export interface ProfileResponse {
  aboutMe?: string
  contacts: Contacts
  lookingForAJob: boolean
  lookingForAJobDescription?: string
  fullName: string
  userId: number
  photos: {
    small?: string
    large?: string
  }
}

interface Contacts {
  facebook?: any
  website?: any
  vk?: any
  twitter?: any
  instagram?: any
  youtube?: any
  github?: any
  mainLink?: any
}

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders().append('api-key', environment.apiKey),
    withCredentials: true,
  }
  getProfile(userId: number): Observable<ProfileResponse> {
    return this.http.get<ProfileResponse>(
      `${environment.baseNetworkUrl}/profile/${userId}`,
      this.httpOptions
    )
  }
}
