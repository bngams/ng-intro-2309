import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  today = new Date();
  display = true;

  words = ['hello', 'world', '!!!'];

  get title(){
    return 'my-app';
  }

  toggleDisplay(): void {
    this.display = !this.display;
  }
}
