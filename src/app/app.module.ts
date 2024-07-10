import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GestionproduitsComponent } from './dashboard/gestionproduits/gestionproduits.component';
import { AjoutComponent } from './dashboard/gestionproduits/ajout/ajout.component';
import { UpdateComponent } from './dashboard/gestionproduits/update/update.component';
import { ListeComponent } from './dashboard/gestionproduits/liste/liste.component';
import { HeaderComponent } from './dashboard/layouts/header/header.component';
import { FooterComponent } from './dashboard/layouts/footer/footer.component';
import { SidebarComponent } from './dashboard/layouts/sidebar/sidebar.component';
import { GestionutilisateursComponent } from './dashboard/gestionutilisateurs/gestionutilisateurs.component';
import { AjoutuserComponent } from './dashboard/gestionutilisateurs/ajoutuser/ajoutuser.component';
import { UpdateuserComponent } from './dashboard/gestionutilisateurs/updateuser/updateuser.component';
import { ListeusersComponent } from './dashboard/gestionutilisateurs/listeusers/listeusers.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NavbarComponent } from './landingpage/layout/navbar/navbar.component';
import { FooterbarComponent } from './landingpage/layout/footerbar/footerbar.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { AuthApi } from './API/auth.api';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    GestionproduitsComponent,
    AjoutComponent,
    UpdateComponent,
    ListeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    GestionutilisateursComponent,
    AjoutuserComponent,
    UpdateuserComponent,
    ListeusersComponent,
    LandingpageComponent,
    NavbarComponent,
    FooterbarComponent,
    MyprofileComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
