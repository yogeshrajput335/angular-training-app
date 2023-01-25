import { MyRxJsComponent } from './my-rx-js/my-rx-js.component';
import { MyReactiveFormComponent } from './my-reactive-form/my-reactive-form.component';
import { MyModalFormComponent } from './my-modal-form/my-modal-form.component';
import { MyHttpRequestEmpComponent } from './my-http-request-emp/my-http-request-emp.component';
import { MyObserPromiseComponent } from './my-obser-promise/my-obser-promise.component';
import { MyLearnComponent } from './my-learn/my-learn.component';
import { MyUsersComponent } from './my-users/my-users.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAboutComponent } from './my-about/my-about.component';
import { MyEmployeeComponent } from './my-employee/my-employee.component';
import { MyHttpApiMemComponent } from './my-http-api-mem/my-http-api-mem.component';
import { MyStudentComponent } from './my-student/my-student.component';
import { MyLoginComponent } from './my-login/my-login.component';
import { ReactiveValidationComponent } from './reactive-validation/reactive-validation.component';
import { AppCustomPreloader } from './common/custome-preloader';


const routes: Routes = [
  { path: 'dashboard', component: MyDashboardComponent },
  { path: 'user', component: MyUsersComponent },
  { path: 'learn', component: MyLearnComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'about', component: MyAboutComponent },
  { path: 'employee', component: MyEmployeeComponent },
  { path: 'ober-pro', component: MyObserPromiseComponent },
  { path: 'http-req', component: MyHttpRequestEmpComponent },
  { path: 'http-memapi', component: MyHttpApiMemComponent},
  { path: 'modal-form', component: MyModalFormComponent },
  { path: 'reactive-form', component: MyReactiveFormComponent },
  { path:'login',component:MyLoginComponent},
  { path:'student',component:MyStudentComponent},
  { path:'validation',component:ReactiveValidationComponent},
  { path:'rx-js',component:MyRxJsComponent},
  {
    path: 'lazy-loading',
    loadChildren: () => import('./lazy-demo/lazy-loading.module')
    .then(m => m.LazyLoadingRoutingModule)
 },
 {
  path: 'pre-loading',
  loadChildren: () => import('./preloading-demo/preloading-demo.module')
  .then(m => m.PreLoadingRoutingModule),
  data: { preload: true }
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: AppCustomPreloader })],
  exports: [RouterModule],
  providers: [AppCustomPreloader]
})
export class AppRoutingModule { }
