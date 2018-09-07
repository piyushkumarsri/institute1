import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import * as adminRoutes from '../../features/admin/containers';

export const containers = [
    LoginComponent,
    HomeComponent
];


export const routes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            // lazy routing
             { path: 'admin', loadChildren: 'app/features/admin/admin.module#AdminModule' },
             { path: 'student', loadChildren: 'app/features/student/student.module#StudentModule' }

        ]
    },
    { path: 'login', component: LoginComponent },

];

