import { Injectable } from '@angular/core';
// import { SignUpComponent } from '../module/authModule/components/sign-up/sign-up.component';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

    constructor() { }
    isLoggedIn(){
      return localStorage.getItem('userDetails')
      
     }
}
