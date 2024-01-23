import { Component } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { UserDetailsService } from 'src/app/service/user-details.service';

@Component({
  selector: 'app-fill-up',
  templateUrl: './fill-up.component.html',
  styleUrls: ['./fill-up.component.scss']
})
export class FillUpComponent {
  detailsForm:FormGroup;

  constructor( private formBuilder:FormBuilder ,private userService:UserDetailsService){
    this.detailsForm=formBuilder.group({
      firstName:[''],
      lastName:[''],
      additionalName:[''],
      headline:[''],
      position:['']

    })

    
  }

  OnSubmit(){
   const formData=this.detailsForm.value
   this.userService.saveUserData(formData)
   console.log('form data saved' ,formData);
   
  }
}
