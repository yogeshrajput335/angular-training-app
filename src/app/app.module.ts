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
import { MyAboutComponent } from './my-about/my-about.component';
import { MyEmployeeComponent } from './my-employee/my-employee.component';
import { MyObserPromiseComponent } from './my-obser-promise/my-obser-promise.component';
import { MyHttpRequestEmpComponent } from './my-http-request-emp/my-http-request-emp.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './services/config.service';
import { MyModalFormComponent } from './my-modal-form/my-modal-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyReactiveFormComponent } from './my-reactive-form/my-reactive-form.component';

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
    MyLearnComponent,
    MyAboutComponent,
    MyEmployeeComponent,
    MyObserPromiseComponent,
    MyHttpRequestEmpComponent,
    MyModalFormComponent,
    MyReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
