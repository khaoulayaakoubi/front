import { Component, OnInit } from '@angular/core';
import { AuthApi } from '../API/auth.api';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authApi: AuthApi,private router : Router ) {}
  ngOnInit(): void {
  }

  // login 
  onSubmit() {
    this.authApi.login(this.form).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        //this.userService.setUser(data.username); // Passer le nom de l'utilsateur connecté pour l'afficher dans le navBar par suite
      },
      err => {
        //this.toastr.error("veillez vérifier votre nom d'utilisateur/mot de passe!")
      }
    );
  }
}
