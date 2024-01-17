import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
dataStore:any

constructor() { 

  console.log(this.dataStore);
}
}
