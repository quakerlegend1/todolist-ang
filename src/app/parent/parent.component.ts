import { Component } from '@angular/core'
import { Grades } from 'src/app/parent/child/child.component'

export interface Address {
  city: string
  street: string
  house: number
}

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  math?: number
  physic?: number
  getGrade(value: Grades) {
    this.math = value.math
    this.physic = value.physic
  }
}
