// app.module.ts
// app.module.ts 
import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { AppComponent } from './app.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 


import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from './register-user/register-user.component';
import { DisplayUsersComponent } from './display-users/display-users.component';




//import { MaterialModule } from './material.module';

const routes: Routes = [
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'display-users', component: DisplayUsersComponent },
  { path: '', redirectTo: 'reactive', pathMatch: 'full' },
  { path: '**', redirectTo: 'reactive', pathMatch: 'full' }
];



@NgModule({
  declarations: [

    
  ],
  imports: [
    RegisterUserComponent,
    DisplayUsersComponent,
    HomepageComponent,
    AppComponent, 
    BrowserModule,
    FormsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    CommonModule
   // MaterialModule
   
  ],
  exports: [RouterModule],
  providers: [],
  
})
export class AppModule {
  ngDoBootstrap() {}
}
