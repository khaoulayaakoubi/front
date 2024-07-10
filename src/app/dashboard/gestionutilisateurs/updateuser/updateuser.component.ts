import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthApi } from '../../../API/auth.api';

@Component({
  selector: 'app-update-user',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  
        form: any = {
          username: null,
          email: null,
          password: null,
          role: null
        };
        userId!: string;
      
        constructor(
        
          private route: ActivatedRoute,
          private router: Router,
          private authApi: AuthApi

        ) { }
      
        ngOnInit(): void {
      
          this.loadUserData();
        }
      
        loadUserData(): void {
          this.authApi.getAllUsers().subscribe(
            (userData) => {
              this.form.username = userData.username;
              this.form.email = userData.email;
              this.form.role = userData.roles[0]; // Assuming the user has only one role
            },
            (error) => {
              console.error('Error loading user data:', error);
            }
          );
        }
      
        onSubmit(): void {
          const { username, email, password, role } = this.form;
          
          const updatedUser = {
            username,
            email,
            password: password || undefined, // Only include password if it's not empty
            role: [role] // Send role as an array
          };
      
          this.authApi.updateUser(this.userId, updatedUser).subscribe(
            (response) => {
              console.log('User updated successfully:', response);
              // Redirect to user list or show success message
              this.router.navigate(['/dashboard']);
            },
            (error) => {
              console.error('Error updating user:', error);
              // Handle error (e.g., show error message to user)
            }
          );
        }
}