import { AdmDashboardComponent } from './adm-dashboard.comonent';
import { Routes } from '@angular/router';
import { AdmUserRegistrationComponent } from './adm-user-registration/adm-user-registration.component';
import { AdmChaptersComponent } from './adm-chapters/adm-chapters.component';
import { AdmUsersComponent } from './adm-users/adm-users.component';
import { AdmBatchCreationComponent } from './adm-batch/adm-batch-creation.component';
import { AdmCoursesComponent } from './adm-courses/adm-courses.component';

export const containers = [
  AdmDashboardComponent,
  AdmUserRegistrationComponent,
  AdmChaptersComponent,
  AdmUsersComponent,
  AdmBatchCreationComponent,
  AdmCoursesComponent
];

export const routes: Routes = [
  { path: 'dashboard', component: AdmDashboardComponent },
  { path: 'user-registration', component: AdmUserRegistrationComponent },
  { path: 'chapters', component: AdmChaptersComponent },
  { path: 'users', component: AdmUsersComponent },
  { path: 'new-batch', component: AdmBatchCreationComponent },
  { path: 'courses', component: AdmCoursesComponent },
];
