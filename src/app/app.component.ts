import { Component } from '@angular/core'

interface IUser {
  age: number
  name: string
}

@Component({
  selector: 'inst-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoading = true

  constructor() {
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  }

  appTitle = 'Instagram'
  text = 'start value'

  changeTitleHandler() {
    this.appTitle = 'It-incubator'
  }
  changeTextHandler(event: Event) {
    this.text = (event.currentTarget as HTMLInputElement).value
  }
  user: IUser = {
    age: 32,
    name: 'Ivan',
  }
}
