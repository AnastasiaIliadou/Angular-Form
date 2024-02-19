
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@Component({
  selector: 'app-register-user',
  standalone: true,
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
  imports: [CommonModule, FormsModule,ReactiveFormsModule],

}) 


export class RegisterUserComponent {


  userData = {
    name: '',
    surname: '',
    homeAddress: '',
    workAddress: '',
    gender: '',
    birthDate: ''
  };

   submitted: boolean = false;
   successMessage : string='';


  onSubmit() {
    
    console.log('Form submitted');

    // Perform form submission logic
    this.submitted = true;
    sessionStorage.setItem('userData', JSON.stringify(this.userData));
    this.successMessage  = 'Form submitted successfully!';
  }
  

  editData() {
    // Handle the "Edit" button click
    this.submitted = false;
    
    // Reset the form data if needed
    this.userData = { name: '', surname: '', homeAddress: '', workAddress: '', gender: '', birthDate: '' };
    this.successMessage = '';
  }
}


