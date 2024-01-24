import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  private userDataSubject:BehaviorSubject<any[]>=new BehaviorSubject<any[]>([]);
  userData:Observable<any[]> = this.userDataSubject.asObservable()

  constructor(){}
  saveUserData(data:any){
    const currentData=this.userDataSubject.getValue()
    currentData.push(data)
    this.userDataSubject.next(currentData)
  }
  getUserData(): Observable<any[]>{
    return this.userData
  }

//  private userData:any[]=[]
//   constructor() { }
 
//   saveUserData(data:any){
//     this.userData.push(data)
//   }
//   getUserData(){
//     return this.userData
//   }

}
