import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from '../../model/message';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {  

  message: Message = {name: '', email: '', content: ''};

  send() {
    console.log(this.message);
  }
}
