import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  @Input() password: string = '';
  @Input() userPic: string = 'user-photo.png';
  @Input() username: string = 'username';
  @Input() userTel: string = 'Phone Number';
  @Input() userEmail: string = 'Email';
}
