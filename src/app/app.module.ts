import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProfileIMGComponent } from './UserAcnt/profile-img/profile-img.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ProfileAcntComponent } from './UserAcnt/profile-acnt/profile-acnt.component';
import { CoverPhotoComponent } from './UserAcnt/cover-photo/cover-photo.component';
import { PencilSvgComponent } from './component/pencil-svg/pencil-svg.component';
import { FillUpComponent } from './component/fill-up/fill-up.component';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    NavbarComponent,
    ProfileIMGComponent,
    HomePageComponent,
    ProfileAcntComponent,
    CoverPhotoComponent,
    PencilSvgComponent,
    FillUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
