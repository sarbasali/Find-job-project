import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authCheck/auth.guard';
import { FeedComponent } from './component/feed/feed.component';

import { ProfileAcntComponent } from './component/profile-acnt/profile-acnt.component';
import { FillUpComponent } from './component/fill-up/fill-up.component';
import { SignUpComponent } from './module/authModule/components/sign-up/sign-up.component';
import { LoginComponent } from './module/authModule/components/login/login.component';

const routes: Routes = [
  {path :'' , component:FeedComponent},
  {path :'home' , component:FeedComponent},
  {path :'login' , component :LoginComponent,canActivate:[AuthGuard] },
  {path: 'signup' , component:SignUpComponent},
  {path:'profile' , component:ProfileAcntComponent},
  {path :'fillUp' ,component:FillUpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: [AuthGuard],
})
export class AppRoutingModule { }
