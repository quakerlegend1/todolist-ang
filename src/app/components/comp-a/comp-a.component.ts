import { Component, OnInit } from '@angular/core'
import { ValueService } from 'src/app/components/services/value.service'

@Component({
  selector: 'inst-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css'],
})
export class CompAComponent implements OnInit {
  value = 0
  constructor(private valueService: ValueService) {}

  ngOnInit(): void {
    this.value = this.valueService.value
  }
}
