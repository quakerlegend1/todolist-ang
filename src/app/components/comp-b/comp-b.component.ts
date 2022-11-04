import { Component, OnInit } from '@angular/core'
import { ValueService } from 'src/app/components/services/value.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'inst-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css'],
})
export class CompBComponent implements OnInit {
  value$ = new Observable()

  constructor(private valueService: ValueService) {}

  ngOnInit(): void {
    /*  this.valueService.value$.subscribe(data => {
      this.value = data
    })*/
    this.value$ = this.valueService.value$
  }

  decValueHandler() {
    this.valueService.dec()
  }
}
