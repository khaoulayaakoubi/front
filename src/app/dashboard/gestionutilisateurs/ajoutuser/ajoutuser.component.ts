import { Component, OnInit } from '@angular/core';
import { AuthApi } from '../../../API/auth.api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ajoutuser',
  templateUrl: './ajoutuser.component.html',
  styleUrls: ['./ajoutuser.component.css']
})
export class AjoutuserComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
    email: null,
    role: ['Client'] // Default role
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authApi: AuthApi, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const { username, email, password, role } = this.form;

    this.authApi.register(username, email, password, role).subscribe(
      (data: any) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/dashboard'])
      },
      (error: any) => {
        console.error(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
