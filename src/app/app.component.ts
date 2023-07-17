import { Component } from '@angular/core';

import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  template: `
  <app-navigation-bar></app-navigation-bar>

  <main class="container">
    <section class="content">
      <app-home></app-home>
    </section>
  </main>

  <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'docs-project';
}
