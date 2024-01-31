import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { SignUpComponent } from './component/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProfileIMGComponent } from './Reuse/profile-img/profile-img.component';
import { FeedComponent } from './component/feed/feed.component';

import { ProfileAcntComponent } from './component/profile-acnt/profile-acnt.component';
import { CoverPhotoComponent } from './Reuse/cover-photo/cover-photo.component';
import { PencilSvgComponent } from './Reuse/pencil-svg/pencil-svg.component';
import { FillUpComponent } from './component/fill-up/fill-up.component';
import { AuthModule } from './module/auth.module';
// import { FeedModule } from './module/autgh.module';
@NgModule({
  declarations: [
    AppComponent,
    // SignUpComponent,
    // LoginComponent,
    NavbarComponent,
    ProfileIMGComponent,
    FeedComponent,
    ProfileAcntComponent,
    CoverPhotoComponent,
    PencilSvgComponent,
    FillUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
