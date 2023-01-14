import { MyLearnComponent } from './my-learn/my-learn.component';
import { MyUsersComponent } from './my-users/my-users.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', component: MyDashboardComponent },
  { path: 'user', component: MyUsersComponent },
  { path: 'learn', component: MyLearnComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
