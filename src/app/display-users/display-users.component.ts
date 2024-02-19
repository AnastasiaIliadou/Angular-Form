// display-users.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-users',
  standalone: true,
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css'],
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
 
})
export class DisplayUsersComponent implements OnInit {
  userData: any;
  submitted: boolean = false;

  ngOnInit() {
    // Retrieve userData from session storage
    const storedUserData = sessionStorage.getItem('userData');
    if (storedUserData) {
      this.userData = JSON.parse(storedUserData);
      this.submitted = true;
    }
  }

  constructor(private router: Router) {}

  editUserData() {
    // Set submitted to false to allow editing
    this.router.navigate(['/register-user']);
  }
}
