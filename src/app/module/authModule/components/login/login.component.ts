import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    
    if (this.loginForm.valid) {
      const enteredEmail = this.loginForm.get('email')!.value;
      // console.log(enteredEmail);
      
      const enteredPassword = this.loginForm.get('password')!.value;
      
      // Retrieve stored details from localStorage
      const storedDetailsString = localStorage.getItem('userDetails');
      
      if (storedDetailsString) {
        const storedDetails = JSON.parse(storedDetailsString);
        
        // Check if entered email and password match any stored details
        // const matchingUser = storedDetails.find((user: any) => user.email === enteredEmail && user.password === enteredPassword);
        // console.log('checking',matchingUser);
        if (Array.isArray(storedDetails)) {
          const matchingUser = storedDetails.find((user: any) => user.email === enteredEmail && user.password === enteredPassword);
          console.log("find success",matchingUser);
          
          // Rest of your code...
        } else {
          console.error('storedDetails is not an array.',storedDetails);
        }

        // if (matchingUser) {
        //   console.log('Login successful!');
        //   alert('Login successful')
        // } else {
        //   console.log('Invalid credentials. Please try again.');
        //   alert('Invalid credentials. Please try again.')
        // }
      } else {
        console.log('No user details found. Please sign up.');
      }
    }
  }
  
}
