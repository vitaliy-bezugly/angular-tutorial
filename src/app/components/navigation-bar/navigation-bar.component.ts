import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FilterService } from "../../services/filter-service.service";

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private filterService : FilterService) { }

  ngOnInit(): void {
  }

  applyFilter(event: Event): void {
    event.preventDefault();
    const filter = (event.target as HTMLInputElement).value;
    this.filterService.setFilter(filter);
  }
}
