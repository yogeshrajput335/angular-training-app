import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNotDirective } from './common/app-not.directive';
import { MyBodyComponent } from './my-body/my-body.component';
import { MyHeadComponent } from './my-head/my-head.component';
import { MyLeftComponent } from './my-left/my-left.component';
import { MyRightComponent } from './my-right/my-right.component';
import { MyPipeComponent } from './my-pipe/my-pipe.component';
import { ExponentialStrengthPipe } from './common/exponential-strength.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyHeadComponent,
    MyBodyComponent,
    MyLeftComponent,
    MyRightComponent,
    AppNotDirective,
    MyPipeComponent,
    ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
