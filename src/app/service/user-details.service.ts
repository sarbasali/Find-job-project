import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
 private userData:any[]=[]
  constructor() { }
 
  saveUserData(data:any){
    this.userData.push(data)
  }
  getUserData(){
    return this.userData
  }

}
