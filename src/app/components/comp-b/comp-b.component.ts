import { Component, OnInit } from '@angular/core'
import { ValueService } from 'src/app/components/services/value.service'
import { Observable } from 'rxjs'
import { BeautyLoggerService } from 'src/app/components/services/beauty-logger.service'

@Component({
  selector: 'inst-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css'],
})
export class CompBComponent implements OnInit {
  value$ = new Observable()

  constructor(
    private valueService: ValueService,
    private beautyLoggerService: BeautyLoggerService
  ) {}

  ngOnInit(): void {
    this.value$ = this.valueService.value$
  }

  decValueHandler() {
    this.valueService.dec()
    this.beautyLoggerService.log('dec value', 'error')
  }
}
