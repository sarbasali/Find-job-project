import { Component } from '@angular/core';
import { UserDetailsService } from 'src/app/service/user-details.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen = false; 
  isSmallScreen = true;
  userData:any[]=[]
constructor (private userDetailsService:UserDetailsService){}
ngOnInit(){
  this.userDetailsService.getUserData().subscribe(data=>{
    this.userData=data
    console.log('form data stored ', this.userData);
    
  })
}
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('Menu toggled'); // Add a log to check if this function is being called
  }

}
