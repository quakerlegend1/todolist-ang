import { Component } from '@angular/core'

interface Iuser {
  name: string
  age: number
}

@Component({
  selector: 'inst-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user: Iuser = {
    name: 'Bobi',
    age: 50,
  }
  //Property binding
  isAppLoading = true

  constructor() {
    setTimeout(() => {
      this.isAppLoading = false
    }, 3000)
  }

  //Event binding
  appTitle = 'Instagram'
  changeTitleHandler() {
    this.appTitle = 'New title'
  }

  //Event binding Input

  text = ''
  changeText(event: Event) {
    this.text = (event.currentTarget as HTMLInputElement).value
  }

  newText = ''

  changeNewText(event: Event) {
    this.newText = (event.currentTarget as HTMLInputElement).value
  }
}
