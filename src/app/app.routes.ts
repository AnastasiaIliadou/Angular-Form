import { Routes } from '@angular/router';


import { HomepageComponent } from './homepage/homepage.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { DisplayUsersComponent } from './display-users/display-users.component';

export const routes: Routes = [
    { path: 'homepage', component: HomepageComponent},
    { path: 'register-user', component: RegisterUserComponent},
    { path: 'display-users', component: DisplayUsersComponent},
    {path: '', redirectTo: '/homepage', pathMatch: 'full'}
];
