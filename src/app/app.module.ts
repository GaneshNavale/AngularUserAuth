import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { MaterializeModule } from 'angular2-materialize';
import { Angular2TokenService } from 'angular2-token';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import {AuthService} from "./services/auth.service";
import {ApiService} from './api.service';
import { ProfileComponent } from './profile/profile.component';
import {AuthGuard} from "./guards/auth.guard";
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    AuthDialogComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ProfileComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [ Angular2TokenService, AuthService, AuthGuard, ApiService ],	
  bootstrap: [AppComponent]
})
export class AppModule { }
