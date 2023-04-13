import { Component } from '@angular/core'

@Component({
  selector: 'inst-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
})
export class PipeComponent {
  title = 'lorem ipsum'
  url = 'https://angular.io/api/common/SlicePipe'
  date = new Date(2022, 4, 12, 10)
}
