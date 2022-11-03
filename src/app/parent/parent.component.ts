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
  isLoading = true

  constructor() {
    setTimeout(() => {
      this.isLoading = false
    }, 4000)
  }
  lessons: Lesson[] = [
    {
      id: 0,
      title: 'Math',
      weekGrades: [
        {
          id: 0,
          gradeItem: 7,
        },
        {
          id: 1,
          gradeItem: 9,
        },
        {
          id: 2,
          gradeItem: 3,
        },
      ],
    },
    {
      id: 1,
      title: 'English',
      weekGrades: [
        {
          id: 0,
          gradeItem: 9,
        },
        {
          id: 1,
          gradeItem: 2,
        },
        {
          id: 2,
          gradeItem: 6,
        },
      ],
    },
  ]
}
