import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'
import { ParentComponent } from './components/parent/parent.component'
import { ChildComponent } from './components/parent/child/child.component'
import { NgSwitchComponent } from './components/ngswitch/ngswitch.component'
import { NgClassComponent } from './components/ngclass/ngclass.component'
import { NgforComponent } from './components/ngfor/ngfor.component'
import { PipeComponent } from './components/pipe/pipe.component'
import { ServiceComponent } from './components/service/service.component'
import { Service2Component } from './components/service2/service2.component'
import { TodosComponent } from './components/todos/todos.component'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    NgSwitchComponent,
    NgClassComponent,
    NgforComponent,
    PipeComponent,
    ServiceComponent,
    Service2Component,
    TodosComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
