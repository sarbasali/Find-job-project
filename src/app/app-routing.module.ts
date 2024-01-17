import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './authCheck/auth.guard';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ProfileAcntComponent } from './UserAcnt/profile-acnt/profile-acnt.component';

const routes: Routes = [
  {path :'' , component:HomePageComponent},
  {path :'home' , component:HomePageComponent},
  {path :'login' , component :LoginComponent,canActivate:[AuthGuard] },
  {path: 'signup' , component:SignUpComponent},
  {path:'profile' , component:ProfileAcntComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: [AuthGuard],
})
export class AppRoutingModule { }
