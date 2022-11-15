import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NotifyComponent } from './components/notify/notify.component'
import { LogTestComponent } from './components/log-test/log-test.component'

@NgModule({
  declarations: [NotifyComponent, LogTestComponent],
  imports: [CommonModule],
  exports: [NotifyComponent, LogTestComponent],
})
export class SharedModule {}
