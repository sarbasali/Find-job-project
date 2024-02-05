import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { SignUpComponent } from './component/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProfileIMGComponent } from './shared/profile-img/profile-img.component';
import { FeedComponent } from './component/feed/feed.component';

import { ProfileAcntComponent } from './component/profile-acnt/profile-acnt.component';
import { CoverPhotoComponent } from './shared/cover-photo/cover-photo.component';
import { PencilSvgComponent } from './shared/pencil-svg/pencil-svg.component';
import { FillUpComponent } from './component/fill-up/fill-up.component';
import { AuthModule } from './module/auth.module';
import { FeedProfileComponent } from './component/feed-profile/feed-profile.component';
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
    FillUpComponent,
    FeedProfileComponent
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
