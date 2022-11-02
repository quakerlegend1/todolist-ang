import { Component, EventEmitter, Output } from '@angular/core'

export interface Grades {
  math: number
  physic: number
}

@Component({
  selector: 'inst-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Output() sendGradeEvent = new EventEmitter<Grades>()
  sendGradeHandler() {
    const math = 5
    const physic = 25
    this.sendGradeEvent.emit({ math, physic })
  }
}
