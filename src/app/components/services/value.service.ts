import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ValueService {
  value$: BehaviorSubject<any> = new BehaviorSubject<number>(0)

  ad() {
    this.value$.next(this.value$.getValue() + 1)
  }

  dec() {
    this.value$.next(this.value$.getValue() - 1)
  }
}
