import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { StudentComponent } from './modules/student/student.component';
import { ViewStudentComponent } from './modules/student/view/view-student.component';

const routes: Routes = [  
  {
    path: '',
    component: LoginComponent,
    // canActivate: [DashboardGuard],
  },
  {
    path: '',
    component: DefaultComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'students',
        children: [
          {
            path: '',
            component: StudentComponent
          },
          {
            path: 'view/:id',
            component: ViewStudentComponent
          },
        ]
      },
    ],
  },
  // {
  //   path: '**',
  //   redirectTo: 'dashboard',
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
