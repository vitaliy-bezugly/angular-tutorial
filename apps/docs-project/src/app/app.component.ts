import { Component, inject } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <app-navigation-bar></app-navigation-bar>

    <main id="main" class="container">
      <div id="content-wrap">
        <router-outlet></router-outlet>
      </div>
    </main>

    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'docs-project';
}
