// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { FormsModule } from '@angular/forms';
//import { MatFormFieldModule } from '@angular/material/form-field';
//import { BrowserModule } from '@angular/platform-browser';

const appRoutes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'display-users', component: DisplayUsersComponent },
];

@NgModule({
  imports: [
    FormsModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}