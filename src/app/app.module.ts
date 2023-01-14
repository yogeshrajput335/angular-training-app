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
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MyUsersComponent } from './my-users/my-users.component';
import { MyLearnComponent } from './my-learn/my-learn.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHeadComponent,
    MyBodyComponent,
    MyLeftComponent,
    MyRightComponent,
    AppNotDirective,
    MyPipeComponent,
    ExponentialStrengthPipe,
    MyDashboardComponent,
    MyUsersComponent,
    MyLearnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
