import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HousingLocation } from '../interfaces/housinglocation';
import { PaginatedList } from '../interfaces/paginatedlist';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  private readonly baseUrl = environment.baseUrl;
  private housingLocationList: HousingLocation[]  = [];

  constructor(private http: HttpClient) {
    // initialize housingLocations
    this.getAllHousingLocations().subscribe(response => {
      this.housingLocationList = response.items;
      console.log(this.housingLocationList);
    });
  }

  public getAllHousingLocations(): Observable<PaginatedList<HousingLocation>> {
    return this.http.get<PaginatedList<HousingLocation>>(this.baseUrl);
  }

  public getHousingLocationById(id: number): Observable<HousingLocation | undefined> {
    return this.http.get<HousingLocation>(this.baseUrl + '/' + id);
  }

  public submitApplication(firstName: string, lastName: string, email: string) : void {
    console.log('Homes application received for ' + firstName + ' ' + lastName + ' at ' + email + '.');
  }
}
