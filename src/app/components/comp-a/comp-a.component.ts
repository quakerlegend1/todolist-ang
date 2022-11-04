import { Component, OnInit } from '@angular/core'
import { ValueService } from 'src/app/components/services/value.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'inst-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css'],
})
export class CompAComponent implements OnInit {
  value$ = new Observable()

  constructor(private valueService: ValueService) {}

  ngOnInit(): void {
    /*this.valueService.value$.subscribe(data => {
      this.value = data
    })*/
    this.value$ = this.valueService.value$
  }

  addValueHandler() {
    this.valueService.ad()
  }
}
