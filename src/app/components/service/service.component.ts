import { Component, OnInit } from '@angular/core'
import { ValueService } from '../../services/value.service'
import { Observable } from 'rxjs'
import { BeautyLoggerService } from '../../services/beauty-logger.service'

@Component({
  selector: 'inst-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
  value$ = new Observable()

  constructor(
    private valueService: ValueService,
    private beautyLoggerService: BeautyLoggerService
  ) {}
  ngOnInit(): void {
    // this.value = this.valueService.value
    // subscription
    // this.valueService.value$.subscribe(value => {
    //   this.value = value)}

    this.value$ = this.valueService.value$
  }

  addValueHandler() {
    this.valueService.add()
    console.log('add value')
    console.log('%cadd value', 'background: red; color: yellow; font-size: x-large')
    this.beautyLoggerService.log('add value', 'success')
  }
}
