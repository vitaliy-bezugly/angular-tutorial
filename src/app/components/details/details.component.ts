import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from 'src/app/interfaces/housinglocation';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
    <img class="listing-photo" [src]="housingLocation?.photo"
      alt="Exterior photo of {{housingLocation?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{housingLocation?.name}}</h2>
      <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this housing location</h2>
      <ul>
        <li>Units available: {{housingLocation?.availableUnits}}</li>
        <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
        <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
      </ul>
    </section>
  </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  housingLocationId: number = 0;
  public housingLocation: HousingLocation | undefined;
  private route: ActivatedRoute = inject(ActivatedRoute);
  private housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id']);

    this.housingService.getHousingLocationById(this.housingLocationId).subscribe(response => {
      this.housingLocation = response;
    });
  }

  ngOnInit(): void {
  }

}
