import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'
import { ParentComponent } from './parent/parent.component'
import { ChildComponent } from './parent/child/child.component'
import { NgSwitchComponent } from './ngswitch/ngswitch.component'
import { NgClassComponent } from './ngclass/ngclass.component';
import { NgforComponent } from './ngfor/ngfor.component'

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    NgSwitchComponent,
    NgClassComponent,
    NgforComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
