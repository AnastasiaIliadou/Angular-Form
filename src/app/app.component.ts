import { Component, ViewEncapsulation } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';


import { HomepageComponent } from './homepage/homepage.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule, HomepageComponent, DisplayUsersComponent,RegisterUserComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None
 
})
export class AppComponent {
  title = 'angular-router-sample';
}
