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
import { MyHttpApiMemComponent } from './my-http-api-mem/my-http-api-mem.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService, MemAPIService,DataAPIService } from './services/config.service';
import { MyStudentComponent } from './my-student/my-student.component';
import { studentService } from './services/student.service';
import { MyModalFormComponent } from './my-modal-form/my-modal-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyReactiveFormComponent } from './my-reactive-form/my-reactive-form.component';
import { MyLoginComponent } from './my-login/my-login.component';
import { loginService } from './services/login.service';
import { ReactiveValidationComponent } from './reactive-validation/reactive-validation.component';
import { LazyDemoComponent } from './lazy-demo/lazy-demo.component';
import { PreloadingDemoComponent } from './preloading-demo/preloading-demo.component';
import { MyRxJsComponent } from './my-rx-js/my-rx-js.component';
import { RegisterComponent } from './register/register.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SubjectDemoComponent } from './subject-demo/subject-demo.component';
import { MyViewchildComponent } from './my-viewchild/my-viewchild.component';
import { NgrxDemoComponent } from './ngrx-demo/ngrx-demo.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { Reducers } from './common/ngrx/red.reducer';


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
    MyHttpApiMemComponent,
    MyModalFormComponent,
    MyReactiveFormComponent,
    MyStudentComponent,
    MyLoginComponent,
    ReactiveValidationComponent,
    MyRxJsComponent,
    RegisterComponent,
    SubscriptionComponent,
    SubjectDemoComponent,
    MyViewchildComponent,
    NgrxDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // StoreModule.forRoot({
    //   users : Reducers
    // }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([])
  ],

  providers: [ConfigService,DataAPIService,studentService,loginService,MemAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
