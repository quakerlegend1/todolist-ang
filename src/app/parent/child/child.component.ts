import { Component, Input } from '@angular/core'
import { Address } from 'src/app/parent/parent.component'

@Component({
  selector: 'inst-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  name = 'Mike'
  @Input() lastNameProps?: string
  @Input() address?: Address
}
