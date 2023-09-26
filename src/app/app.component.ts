import { Component } from '@angular/core'; // reférence les classes ou fichiers qu'on utilise

// @ => decorator
@Component({
  selector: 'app-root', // balise
  // template:`<h1>Hello</h1>`,
  // styles:[`h1{ color: red}`]
  templateUrl: './app.component.html', // vue
  styleUrls: ['./app.component.scss'] // vue (css)
})
// export <=> public
export class AppComponent { // controller
}
