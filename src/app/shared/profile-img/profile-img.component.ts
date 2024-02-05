import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-img',
  templateUrl: './profile-img.component.html',
  styleUrls: ['./profile-img.component.scss']
})
export class ProfileIMGComponent {
@Input() width="w-10"
}
