import { Component } from '@angular/core'
import { LogService } from 'src/app/shared/services/log.service'

@Component({
  selector: 'tl-log-test',
  templateUrl: './log-test.component.html',
  styleUrls: ['./log-test.component.css'],
})
export class LogTestComponent {
  constructor(private logger: LogService) {}

  testLog(): void {
    this.logger.info('Test the `log()` Method', [1, 'Bobi', 56])
  }
}
