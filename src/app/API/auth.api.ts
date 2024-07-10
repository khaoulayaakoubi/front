import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';

const AUTH_API = 'http://localhost:8089/api/auth/';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json' })
};


@Injectable({
    providedIn: 'root'
  })

export class AuthApi {
    AUTH_API: any;
  
    constructor(private http: HttpClient, private router: Router) { }

    register(username: string, email: string, password: string, role: string[]): Observable<any> {
      return this.http.post<any>(`${AUTH_API}signup`, { username, email, password, role }, httpOptions);
  }

  
  // user auth
    //@route : /login
    //@param : username / password
    // connexion d'un utilisateur 
    login(credentials:any): Observable<any> {
  
      return this.http.post(AUTH_API + 'signin', {
        username: credentials.username,
        password: credentials.password
      }, httpOptions).pipe(
        map((response: any) => {
          localStorage.setItem('token', response.accessToken);
          if (response.roles.includes('Livreur')) {
            this.router.navigate(['/dashboard']);
          } 
          return response;
        })
      );
    }
    //verifier s'il existe un token dans le localStorage pour maintenir la connexion du l'utilisateur
    isLoggedIn(): boolean {
      const token = localStorage.getItem('token');
      return token !== null;
    }

 
   
    //route : /signup
    //@param : username / email / password
    // Enregistrer un nouveau utilisateur
    AddUser(user: any): Observable<any> {
      return this.http.post(AUTH_API + 'signup', {
        username: user.username,
        email: user.email,
        password: user.password,
        role: user.role
      }, httpOptions);
      
    }

    //route : /users
    // collecter la liste des utlisateurs qui se trouve dans la base de données
    getAllUsers(): Observable<any> {
      return this.http.get(AUTH_API + 'users');
    }
    
    //route : /users/:userId
    // Supprimer un utilisateur
    deleteUser(userId: number): Observable<any> {
      return this.http.delete(`${AUTH_API}users/${userId}`);
    }
    //route : /users/:userId
    // modifier un utlisateur
    updateUser(userId: string, user: any): Observable<any> {
      return this.http.put<any>(`${this.AUTH_API}users/update/${userId}`, user);
    }
    getUser(userId: string): Observable<any> {
      return this.http.get(`${AUTH_API}users/${userId}`);
    }
   
    //route : /signout
    // Se déconnecter en supprimant les tokens qui se trouvent dans le local storage (localStorage.removeitem)
    logout(): Observable<any> {
      localStorage.removeItem('token');
      return this.http.post(AUTH_API + 'signout', null, httpOptions).pipe(
        map((response: any) => {
          this.router.navigate(['login']);
          return response;
        })
      );
    }
}