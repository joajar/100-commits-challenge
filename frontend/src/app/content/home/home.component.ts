import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Message } from '../../model/message';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {  

  message: Message = {name: '', email: '', content: ''};

  send() {
    console.log(this.message);
  }
}
