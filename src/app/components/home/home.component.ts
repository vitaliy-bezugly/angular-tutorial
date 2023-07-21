import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from 'src/app/interfaces/housinglocation';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from 'src/app/services/housing.service';
import { FilterService } from "../../services/filter-service.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  template: `
    <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation">
    </app-housing-location>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public housingLocationList: HousingLocation[] = [];
  public filteredLocationList: HousingLocation[] = [];

  private filterSubscription?: Subscription;

  constructor(private housingService: HousingService,
              private filterService: FilterService) {
    this.housingService.getAllHousingLocations().subscribe((response) => {
      this.housingLocationList = response.items;
      this.filteredLocationList = this.housingLocationList;
    });
  }

  ngOnInit(): void {
    this.filterSubscription = this.filterService.getFilter().subscribe(filter => {
      this.filterResults(filter);
    });
  }

  ngOnDestroy(): void {
    this.filterSubscription?.unsubscribe();
  }

  public wifiHousingLocations() : HousingLocation[] {
    return this.housingLocationList.filter(x => x.wifi);
  }

  public filterResults(filter: string) : void {
    this.filteredLocationList = this.housingLocationList.filter(x => x.city.toLowerCase().includes(filter.toLowerCase()));
  }
}
