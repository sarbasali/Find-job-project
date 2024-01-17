import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from 'src/app/service/user-auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  userForm: FormGroup;
  details:any[]=[]
  constructor(private formBuilder: FormBuilder, private signupDtails:UserAuthService) {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {

    if (this.userForm.valid) {
      this.details.push(this.userForm.value)
      localStorage.setItem('userDetails', JSON.stringify(this.details));   
         console.log(this.details);
      alert('signup success')
      this.userForm.reset();
    } 
  }
}
