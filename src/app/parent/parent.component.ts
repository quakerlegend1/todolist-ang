import { Component } from '@angular/core'

interface Lesson {
  id: number
  title: string
  weekGrades: { id: number; gradeItem: number }[]
}

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  value: string = ''
}
