import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cover-photo',
  templateUrl: './cover-photo.component.html',
  styleUrls: ['./cover-photo.component.scss']
})
export class CoverPhotoComponent {
@Input() width=""

}
