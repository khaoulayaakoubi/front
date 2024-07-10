import { Component, OnInit } from '@angular/core';
import { AuthApi } from '../../../API/auth.api';
import {Router} from '@angular/router'

@Component({
  selector: 'app-listeusers',
  templateUrl: './listeusers.component.html',
  styleUrls: ['./listeusers.component.css']
})
export class ListeusersComponent implements OnInit {

  form: any = {
    username: null,
    password: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  users: any[] = [];
  constructor(private authApi: AuthApi,private router : Router ) {}

  ngOnInit(): void {
    this.authApi.getAllUsers().subscribe(users => { this.users = users}) 
  }


  onDelete(userId: number) {
    this.authApi.deleteUser(userId).subscribe((response) => {
      //this.toastr.success(response.message)       // afficher un alerte du succés (green)
      //this.authApi.getAllUsers().subscribe(users => { this.users = users})  // Pour metter à jour le tableau sans rafraîchir la page
    }, err => {
     /// this.toastr.error(err.error.message)
    });
  }

}
