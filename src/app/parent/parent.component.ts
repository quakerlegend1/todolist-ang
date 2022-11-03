import { Component } from '@angular/core'

interface Fruit {
  id: number
  name: string
  price: number
}

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  title = 'Some Title'
  url = 'https://angular.io/api/?type=pipe'
  date = new Date(2022, 4, 14, 10)
}
