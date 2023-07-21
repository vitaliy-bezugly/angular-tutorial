import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from 'src/app/interfaces/housinglocation';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <app-housing-location
      *ngFor="let item of housingLocationList"
      [housingLocation]="item"
    ></app-housing-location>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

  ngOnInit(): void {}

  wifiHousingLocations(): HousingLocation[] {
    return this.housingLocationList.filter((x) => x.wifi);
  }
}
