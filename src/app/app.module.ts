import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyBodyComponent } from './my-body/my-body.component';
import { MyHeadComponent } from './my-head/my-head.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHeadComponent,
    MyBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
