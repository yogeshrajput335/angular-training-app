import { MyHttpRequestEmpComponent } from './my-http-request-emp/my-http-request-emp.component';
import { MyObserPromiseComponent } from './my-obser-promise/my-obser-promise.component';
import { MyLearnComponent } from './my-learn/my-learn.component';
import { MyUsersComponent } from './my-users/my-users.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAboutComponent } from './my-about/my-about.component';
import { MyEmployeeComponent } from './my-employee/my-employee.component';

const routes: Routes = [
  { path: 'dashboard', component: MyDashboardComponent },
  { path: 'user', component: MyUsersComponent },
  { path: 'learn', component: MyLearnComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'about', component: MyAboutComponent },
  { path: 'employee', component: MyEmployeeComponent },
  { path: 'ober-pro', component: MyObserPromiseComponent },
  { path: 'http-req', component: MyHttpRequestEmpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
