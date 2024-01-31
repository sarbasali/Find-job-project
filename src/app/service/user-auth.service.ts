import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  dataStore: any;
  details: any[] = [];

  constructor(private formBuilder: FormBuilder) {

    console.log(this.dataStore);
  }

  Register(formData: any) {
    

    if (formData) {
      // Save details array to local storage
     localStorage.setItem('userDetails', JSON.stringify(formData));
      console.log("successfuly stored with", formData);
      // this.userForm.reset();
    }else{
      console.log("something wrong");
    }
  }
  
}
