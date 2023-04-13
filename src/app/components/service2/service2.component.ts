import { Component, OnInit } from '@angular/core'
import { ValueService } from '../../services/value.service'
import { BeautyLoggerService } from '../../services/beauty-logger.service'

@Component({
  selector: 'inst-service2',
  templateUrl: './service2.component.html',
  styleUrls: ['./service2.component.css'],
})
export class Service2Component implements OnInit {
  value = 0

  constructor(
    private valueService: ValueService,
    private beautyLoggerService: BeautyLoggerService
  ) {}
  ngOnInit(): void {
    // this.value = this.valueService.value
    // subscription
    this.valueService.value$.subscribe(value => {
      this.value = value
    })
  }

  decValueHandler() {
    this.valueService.dec()
    this.beautyLoggerService.log('dec value', 'info')
  }
}
