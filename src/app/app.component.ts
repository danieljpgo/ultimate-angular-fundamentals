import { Component } from '@angular/core';

interface Nav {
  link: string;
  name: string;
  exact: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ultimate-angular-project';

  nav: Nav[] = [{
      link: '/',
      name: 'Home',
      exact: true
    }, {
      link: '/',
      name: 'Opss',
      exact: false
    }
  ]
}
