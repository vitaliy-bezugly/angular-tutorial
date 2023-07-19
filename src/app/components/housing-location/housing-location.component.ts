import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from 'src/app/interfaces/housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <div class="listing-location">
        <i class='bx bxs-edit-location'></i>
        <span>{{ housingLocation.city}}, {{housingLocation.state }}</span>
      </div>
      <a [routerLink]="['/details', housingLocation.id]" class="btn btn-primary">Learn more</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})

export class HousingLocationComponent implements OnInit {
  @Input() housingLocation!: HousingLocation;

  constructor() {
    console.log(this.housingLocation);
  }

  ngOnInit(): void {
  }

}
