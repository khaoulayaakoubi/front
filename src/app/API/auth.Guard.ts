import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthApi } from './auth.api';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authApi: AuthApi, private router: Router,) { }

  canActivate(): boolean {
    if (this.authApi.isLoggedIn() ) {
      return true;
    } else {
      this.router.navigate(['/login'])
      return false;
    }
  }
}