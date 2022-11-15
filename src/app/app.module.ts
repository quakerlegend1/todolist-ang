import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'

import { AppRoutingModule } from 'src/app/app-routing.module'
import { CoreModule } from 'src/app/core/core.module'
import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from 'src/app/shared/shared.module'
import { LogService } from 'src/app/shared/services/log.service'
import { LogPublishersService } from 'src/app/shared/services/log-publishers.service'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, HttpClientModule, SharedModule],
  providers: [LogService, LogPublishersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
