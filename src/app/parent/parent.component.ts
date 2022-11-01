import { Component } from '@angular/core'

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
  firstName = 'Bobi'
  lastName = 'Green'
  address: Address = {
    city: 'Rechitsa',
    street: 'Energetikov',
    house: 11,
  }
}
