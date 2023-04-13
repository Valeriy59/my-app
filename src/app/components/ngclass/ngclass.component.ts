import { Component } from '@angular/core'

@Component({
  selector: 'inst-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css'],
})
export class NgClassComponent {
  isSuccess = false
  constructor() {
    setTimeout(() => {
      this.isSuccess = true
    }, 3000)
  }
}
