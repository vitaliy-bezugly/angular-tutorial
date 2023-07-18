import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HousingLocationComponent } from './components/housing-location/housing-location.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NavigationBarComponent,
    FooterComponent,
    HousingLocationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
