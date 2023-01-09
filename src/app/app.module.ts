import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyBodyComponent } from './my-body/my-body.component';
import { MyHeadComponent } from './my-head/my-head.component';
import { MyLeftComponent } from './my-left/my-left.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHeadComponent,
    MyBodyComponent,
    MyLeftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
