import { Component } from '@angular/core';
import { UserDetailsService } from 'src/app/service/user-details.service';

@Component({
  selector: 'app-profile-acnt',
  templateUrl: './profile-acnt.component.html',
  styleUrls: ['./profile-acnt.component.scss']
})
export class ProfileAcntComponent {
  userData:any[]=[]
  constructor(private userDetailsService:UserDetailsService){}
  ngOnInit(){
    this.userDetailsService.getUserData().subscribe(data=>{
      this.userData=data
      console.log('form data stored ', this.userData);
      
    })
  }
}
