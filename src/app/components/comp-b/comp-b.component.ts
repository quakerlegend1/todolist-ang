import { Component, OnInit } from '@angular/core'
import { ValueService } from 'src/app/components/services/value.service'

@Component({
  selector: 'inst-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css'],
})
export class CompBComponent implements OnInit {
  value = 0

  constructor(private valueService: ValueService) {}

  ngOnInit(): void {
    this.valueService.value$.subscribe(data => {
      this.value = data
    })
  }

  decValueHandler() {
    this.valueService.dec()
  }
}
