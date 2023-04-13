import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Address } from '../parent.component'

@Component({
  selector: 'inst-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  name = 'Viktor'

  @Input() surnameProps?: string
  @Input() address?: Address

  @Output() sendGradeEvent = new EventEmitter<string>()

  inputGrade = ''
  sendGradeHandler() {
    this.sendGradeEvent.emit(this.inputGrade)
  }
}
