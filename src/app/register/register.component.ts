import { Component, OnInit } from '@angular/core';
import { AuthApi } from '../API/auth.api';
import {Router} from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
    password: null,
    role: ['Livreur'] // or ['Admin', 'Mod'] based on the requirement
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authApi: AuthApi, private router : Router) { }

  ngOnInit(): void {
    // Initialization code if needed
  }

  onSubmit(): void {
    const { username, email, password, role } = this.form;

    this.authApi.register(username, email, password, role).subscribe(
      (data: any) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/login'])
      },
      (error: any) => {
        console.error(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
