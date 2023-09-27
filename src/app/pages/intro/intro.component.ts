import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  // DI with constructor
  constructor(private router: Router) {
  }

  toggleDisplay(): void {
    this.display = !this.display;
  }

  goToHome() {
    // implement navigation
    this.router.navigateByUrl('/home');
  }
}
